#!/usr/bin/env python3
"""Validate the exact static cratis.no public surface with standard-library tools."""

from __future__ import annotations

import argparse
import http.client
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urldefrag, urljoin, urlparse

ROOT = Path(__file__).resolve().parents[1]
ROUTES = {
    "/": ROOT / "index.html",
    "/stack/": ROOT / "stack" / "index.html",
    "/why-cratis/": ROOT / "why-cratis" / "index.html",
    "/support/": ROOT / "support" / "index.html",
    "/trust/": ROOT / "trust" / "index.html",
    "/about/": ROOT / "about" / "index.html",
}
REMOVED_ROUTES = ("/studio/", "/ai/", "/stack/the-cast/", "/writing/")
REQUIRED_FILES = (
    ROOT / "CNAME",
    ROOT / "robots.txt",
    ROOT / "sitemap.xml",
    ROOT / "assets" / "css" / "site.css",
    ROOT / "assets" / "js" / "site.js",
    ROOT / "assets" / "img" / "favicon.svg",
    ROOT / "assets" / "img" / "favicon-32.png",
    ROOT / "assets" / "img" / "apple-touch-icon.png",
)
PROHIBITED_PUBLIC_TEXT = (
    "Software that remembers",
    "model-first",
    "AI-native",
    "Cratis Studio",
    "Cratis Assurance",
    "more than fifteen years",
    "fifteen-plus years",
    "free trial",
    "response targets",
    "support plans",
    "roadmap input",
    "production-ready",
    "enterprise-ready",
    "CLM-",
    "Private and confidential",
    "/Volumes/sourcecode/",
)
REQUIRED_PRODUCT_WORDING = (
    "Arc is an opinionated CQRS application framework for ASP.NET Core with commands, queries, validation, authorization, and TypeScript proxy generation.",
    "Components is a React component library aligned with Arc application patterns.",
    "The Cratis CLI provides terminal workflows for inspecting and diagnosing Chronicle.",
    "Chronicle Workbench provides a bundled local browser surface for authorized inspection of Chronicle runtime state and preview of supported projection behavior.",
    "Chronicle and its bundled local Workbench are available as MIT-licensed self-hosted software; authorized local use is separate from paid Cratis support, hosted coordination, or managed operational responsibility.",
)


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.headings: list[int] = []
        self.h1_text: list[str] = []
        self.links: list[str] = []
        self.assets: list[str] = []
        self.images: list[dict[str, str | None]] = []
        self.meta: dict[str, str] = {}
        self.title_parts: list[str] = []
        self.comments = 0
        self._heading: int | None = None
        self._in_title = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if values.get("id"):
            self.ids.append(values["id"] or "")
        heading_level = {"h1": 1, "h2": 2, "h3": 3, "h4": 4, "h5": 5, "h6": 6}.get(tag)
        if heading_level is not None:
            self._heading = heading_level
            self.headings.append(heading_level)
        if tag == "title":
            self._in_title = True
        if tag == "a" and values.get("href"):
            self.links.append(values["href"] or "")
        if tag == "link" and values.get("href"):
            rel = (values.get("rel") or "").split()
            if not {"preconnect", "dns-prefetch"}.intersection(rel):
                self.assets.append(values["href"] or "")
            if "canonical" in rel:
                self.meta["canonical"] = values["href"] or ""
        if tag == "script" and values.get("src"):
            self.assets.append(values["src"] or "")
        if tag == "img":
            self.images.append(values)
            if values.get("src"):
                self.assets.append(values["src"] or "")
        if tag == "meta":
            key = values.get("name") or values.get("property")
            if key:
                self.meta[key] = values.get("content") or ""

    def handle_endtag(self, tag: str) -> None:
        if tag in {f"h{level}" for level in range(1, 7)}:
            self._heading = None
        if tag == "title":
            self._in_title = False

    def handle_data(self, data: str) -> None:
        text = " ".join(data.split())
        if not text:
            return
        if self._heading == 1:
            self.h1_text.append(text)
        if self._in_title:
            self.title_parts.append(text)

    def handle_comment(self, data: str) -> None:
        self.comments += 1


class Validator:
    def __init__(self, check_external: bool) -> None:
        self.check_external = check_external
        self.errors: list[str] = []
        self.pages: dict[str, PageParser] = {}
        self.external_urls: set[str] = set()

    def fail(self, message: str) -> None:
        self.errors.append(message)

    def run(self) -> int:
        self.validate_inventory()
        self.validate_pages()
        self.validate_sitemap()
        self.validate_robots()
        self.validate_statement_boundary()
        if self.check_external:
            self.validate_external_links()
        if self.errors:
            for error in self.errors:
                print(f"ERROR: {error}")
            print(f"{len(self.errors)} error(s)")
            return 1
        suffix = " with external reachability" if self.check_external else ""
        print(f"Validated {len(ROUTES)} exact routes{suffix}: 0 errors")
        return 0

    def validate_inventory(self) -> None:
        for required in REQUIRED_FILES:
            if not required.is_file():
                self.fail(f"missing required file: {required.relative_to(ROOT)}")
        actual = {
            path.resolve()
            for path in ROOT.rglob("*.html")
            if ".git" not in path.parts and ".ai" not in path.parts
        }
        expected = {path.resolve() for path in ROUTES.values()}
        for extra in sorted(actual - expected):
            self.fail(f"unadmitted HTML route source: {extra.relative_to(ROOT)}")
        for missing in sorted(expected - actual):
            self.fail(f"missing admitted HTML route source: {missing.relative_to(ROOT)}")
        for removed in REMOVED_ROUTES:
            candidate = self.route_file(removed)
            if candidate.exists():
                self.fail(f"removed route still exists: {removed}")

    def validate_pages(self) -> None:
        for route, path in ROUTES.items():
            text = path.read_text(encoding="utf-8")
            if not text.lower().startswith("<!doctype html>"):
                self.fail(f"{route}: missing HTML doctype")
            parser = PageParser()
            try:
                parser.feed(text)
                parser.close()
            except Exception as error:
                self.fail(f"{route}: HTML parse failed: {error}")
                continue
            self.pages[route] = parser
            duplicates = sorted({value for value in parser.ids if parser.ids.count(value) > 1})
            if duplicates:
                self.fail(f"{route}: duplicate ids: {', '.join(duplicates)}")
            if parser.headings.count(1) != 1:
                self.fail(f"{route}: expected exactly one H1")
            for previous, current in zip(parser.headings, parser.headings[1:]):
                if current > previous + 1:
                    self.fail(f"{route}: heading order skips H{previous} to H{current}")
            if parser.comments:
                self.fail(f"{route}: contains {parser.comments} HTML comment(s)")
            required_meta = ("description", "canonical", "og:type", "og:title", "og:description", "og:url", "og:image", "og:image:width", "og:image:height")
            for key in required_meta:
                if not parser.meta.get(key):
                    self.fail(f"{route}: missing metadata {key}")
            expected_canonical = f"https://cratis.no{route}"
            if parser.meta.get("canonical") != expected_canonical:
                self.fail(f"{route}: canonical differs from {expected_canonical}")
            if parser.meta.get("og:url") != expected_canonical:
                self.fail(f"{route}: og:url differs from {expected_canonical}")
            if parser.meta.get("og:image:width") != "1200" or parser.meta.get("og:image:height") != "630":
                self.fail(f"{route}: OpenGraph image dimensions must be 1200x630")
            if not "".join(parser.title_parts).strip():
                self.fail(f"{route}: empty title")
            for image in parser.images:
                if "alt" not in image:
                    self.fail(f"{route}: image missing alt attribute: {image.get('src', '')}")
            for reference in parser.links + parser.assets + [parser.meta.get("og:image", "")]:
                self.validate_reference(route, reference)

    def validate_reference(self, source_route: str, reference: str) -> None:
        if not reference or reference.startswith(("mailto:", "tel:")):
            return
        if reference.startswith(("http://", "https://")):
            base, _ = urldefrag(reference)
            if not base.startswith("https://cratis.no/"):
                self.external_urls.add(base)
                return
            parsed = urlparse(base)
            reference = parsed.path or "/"
        if not reference.startswith(("/", "#")):
            self.fail(f"{source_route}: non-root-relative internal reference: {reference}")
            return
        if reference.startswith("#"):
            target_route, fragment = source_route, reference[1:]
        else:
            path_part, fragment = urldefrag(reference)
            target_route = path_part
        target_file = self.route_file(target_route)
        if not target_file.exists():
            self.fail(f"{source_route}: missing internal target {reference}")
            return
        if fragment:
            target_page = self.pages.get(target_route)
            if target_page is None and target_route in ROUTES:
                target_parser = PageParser()
                target_parser.feed(ROUTES[target_route].read_text(encoding="utf-8"))
                target_page = target_parser
            if target_page is not None and fragment not in target_page.ids:
                self.fail(f"{source_route}: missing fragment {reference}")

    @staticmethod
    def route_file(route: str) -> Path:
        path_part, _ = urldefrag(route)
        if path_part == "/":
            return ROOT / "index.html"
        if path_part.endswith("/"):
            return ROOT / path_part.lstrip("/") / "index.html"
        return ROOT / path_part.lstrip("/")

    def validate_sitemap(self) -> None:
        text = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
        if not text.startswith('<?xml version="1.0" encoding="UTF-8"?>') or "<urlset" not in text or "</urlset>" not in text:
            self.fail("sitemap.xml does not have the expected XML declaration and urlset root")
            return
        matches = re.findall(r"<loc>\s*(https://cratis\.no/[^<]*)\s*</loc>", text)
        urls = set(matches)
        expected = {f"https://cratis.no{route}" for route in ROUTES}
        if len(matches) != len(urls):
            self.fail("sitemap.xml contains duplicate routes")
        if urls != expected:
            self.fail(f"sitemap route set differs: expected {sorted(expected)}, got {sorted(urls)}")

    def validate_robots(self) -> None:
        text = (ROOT / "robots.txt").read_text(encoding="utf-8")
        if "User-agent: *" not in text or "Allow: /" not in text or "Sitemap: https://cratis.no/sitemap.xml" not in text:
            self.fail("robots.txt does not expose the expected allow/sitemap policy")

    def validate_statement_boundary(self) -> None:
        public_text = "\n".join(path.read_text(encoding="utf-8") for path in ROUTES.values())
        lower = public_text.casefold()
        for phrase in PROHIBITED_PUBLIC_TEXT:
            if phrase.casefold() in lower:
                self.fail(f"public HTML contains prohibited wording: {phrase}")
        for route in REMOVED_ROUTES:
            if f'href="{route}' in public_text or f"https://cratis.no{route}" in public_text:
                self.fail(f"public HTML still links removed route: {route}")
        if ".NET/Orleans actor-based kernel" in public_text:
            self.fail("public HTML contains Chronicle architecture wording not admitted on cratis.no")
        for wording in REQUIRED_PRODUCT_WORDING:
            if wording not in public_text:
                self.fail(f"required bounded product wording is missing: {wording[:80]}…")

    def validate_external_links(self) -> None:
        for original_url in sorted(self.external_urls):
            url = original_url
            try:
                for _ in range(6):
                    parsed = urlparse(url)
                    if parsed.scheme != "https" or not parsed.hostname:
                        raise ValueError("external references must use an absolute HTTPS URL")
                    path = parsed.path or "/"
                    if parsed.query:
                        path = f"{path}?{parsed.query}"
                    connection = http.client.HTTPSConnection(parsed.hostname, parsed.port or 443, timeout=15)
                    try:
                        connection.request("HEAD", path, headers={"User-Agent": "cratis-no-site-validator/1.0"})
                        response = connection.getresponse()
                        status = response.status
                        location = response.getheader("Location")
                    finally:
                        connection.close()
                    if status in {301, 302, 303, 307, 308} and location:
                        url = urljoin(url, location)
                        continue
                    break
                else:
                    raise ValueError("too many redirects")
            except (OSError, ValueError, http.client.HTTPException) as error:
                self.fail(f"external URL unavailable: {original_url}: {error}")
                continue
            if status >= 400 and status not in {401, 403, 405, 429}:
                self.fail(f"external URL returned HTTP {status}: {original_url}")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check-external", action="store_true", help="check public external URLs for reachability")
    args = parser.parse_args()
    return Validator(args.check_external).run()


if __name__ == "__main__":
    sys.exit(main())
