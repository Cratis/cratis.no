# Copyright (c) Cratis. All rights reserved.
# Licensed under the MIT license. See LICENSE file in the project root for full license information.

from html.parser import HTMLParser
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
EXPECTED_LINKS = [
    ("Documentation", "https://cratis.io"),
    ("GitHub", "https://github.com/Cratis"),
    ("Contact", "mailto:oss@cratis.io"),
]
REQUIRED_ASSETS = {
    "/assets/img/favicon.svg",
    "/assets/img/favicon-32.png",
    "/assets/img/apple-touch-icon.png",
}
ALLOWED_TAGS = {
    "html",
    "head",
    "meta",
    "title",
    "link",
    "style",
    "body",
    "main",
    "h1",
    "nav",
    "ul",
    "li",
    "a",
}
EXPECTED_START_TAGS = [
    ("html", (("lang", "en"),)),
    ("head", ()),
    ("meta", (("charset", "utf-8"),)),
    ("meta", (("name", "viewport"), ("content", "width=device-width, initial-scale=1"))),
    ("meta", (("name", "description"), ("content", "Cratis."))),
    ("meta", (("name", "color-scheme"), ("content", "light dark"))),
    ("title", ()),
    ("link", (("rel", "icon"), ("href", "/assets/img/favicon.svg"), ("type", "image/svg+xml"))),
    ("link", (("rel", "icon"), ("href", "/assets/img/favicon-32.png"), ("sizes", "32x32"))),
    ("link", (("rel", "apple-touch-icon"), ("href", "/assets/img/apple-touch-icon.png"))),
    ("style", ()),
    ("body", ()),
    ("main", (("id", "main"),)),
    ("h1", ()),
    ("nav", (("aria-label", "Cratis links"),)),
    ("ul", ()),
    ("li", ()),
    ("a", (("href", "https://cratis.io"),)),
    ("li", ()),
    ("a", (("href", "https://github.com/Cratis"),)),
    ("li", ()),
    ("a", (("href", "mailto:oss@cratis.io"),)),
]
EXPECTED_END_TAGS = [
    "title",
    "style",
    "head",
    "h1",
    "a",
    "li",
    "a",
    "li",
    "a",
    "li",
    "ul",
    "nav",
    "main",
    "body",
    "html",
]


class SiteParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.comments: list[str] = []
        self.descriptions: list[str | None] = []
        self.in_body = False
        self.in_style = False
        self.in_title = False
        self.current_link: str | None = None
        self.current_link_text: list[str] = []
        self.links: list[tuple[str, str]] = []
        self.assets: set[str] = set()
        self.body_text: list[str] = []
        self.style_text: list[str] = []
        self.titles: list[str] = []
        self.tags: list[str] = []
        self.main_ids: list[str | None] = []
        self.nav_labels: list[str | None] = []
        self.h1_count = 0
        self.nested_anchor = False
        self.start_tags: list[tuple[str, tuple[tuple[str, str | None], ...]]] = []
        self.end_tags: list[str] = []
        self.declarations: list[str] = []
        self.unexpected_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.tags.append(tag)
        self.start_tags.append((tag, tuple(attrs)))
        values = dict(attrs)
        if tag == "body":
            self.in_body = True
        elif tag == "title":
            self.in_title = True
        elif tag == "style":
            self.in_style = True
        elif tag == "meta" and values.get("name") == "description":
            self.descriptions.append(values.get("content"))
        elif tag == "a":
            if self.current_link is not None:
                self.nested_anchor = True
            self.current_link = values.get("href")
            self.current_link_text = []
        elif tag == "main":
            self.main_ids.append(values.get("id"))
        elif tag == "nav":
            self.nav_labels.append(values.get("aria-label"))
        elif tag == "h1":
            self.h1_count += 1
        elif tag in {"img", "link"}:
            reference = values.get("src") or values.get("href")
            if reference and reference.startswith("/assets/"):
                self.assets.add(reference)

    def handle_endtag(self, tag: str) -> None:
        self.end_tags.append(tag)
        if tag == "body":
            self.in_body = False
        elif tag == "title":
            self.in_title = False
        elif tag == "style":
            self.in_style = False
        elif tag == "a":
            text = " ".join(self.current_link_text)
            if self.current_link is not None:
                self.links.append((text, self.current_link))
            self.current_link = None
            self.current_link_text = []

    def handle_data(self, data: str) -> None:
        text = " ".join(data.split())
        if not text:
            return
        if self.in_title:
            self.titles.append(text)
        if self.in_style:
            self.style_text.append(text)
        if self.in_body:
            self.body_text.append(text)
            if self.current_link is not None:
                self.current_link_text.append(text)
        elif not self.in_title and not self.in_style:
            self.unexpected_text.append(text)

    def handle_comment(self, data: str) -> None:
        self.comments.append(data)

    def handle_decl(self, decl: str) -> None:
        self.declarations.append(decl)


def fail(message: str) -> None:
    print(f"error: {message}", file=sys.stderr)
    raise SystemExit(1)


def verify_html(root: Path | None = None) -> None:
    root = root or ROOT
    source = (root / "index.html").read_text(encoding="utf-8")
    parser = SiteParser()
    parser.feed(source)
    parser.close()

    unexpected_tags = sorted(set(parser.tags) - ALLOWED_TAGS)
    if unexpected_tags:
        fail(f"unexpected HTML tags: {unexpected_tags}")
    if parser.declarations != ["doctype html"]:
        fail(f"unexpected declarations: {parser.declarations!r}")
    if parser.start_tags != EXPECTED_START_TAGS:
        fail(f"unexpected start tags or attributes: {parser.start_tags!r}")
    if parser.end_tags != EXPECTED_END_TAGS:
        fail(f"unexpected end tags: {parser.end_tags!r}")
    if parser.unexpected_text:
        fail(f"text appears outside expected rendered contexts: {parser.unexpected_text!r}")
    if parser.comments:
        fail("published HTML contains comments")
    if parser.nested_anchor:
        fail("published HTML contains nested anchors")
    if parser.titles != ["Cratis"]:
        fail(f"unexpected title content: {parser.titles!r}")
    if parser.descriptions != ["Cratis."]:
        fail(f"unexpected descriptions: {parser.descriptions!r}")
    if parser.main_ids != ["main"]:
        fail(f"unexpected main landmarks: {parser.main_ids!r}")
    if parser.nav_labels != ["Cratis links"]:
        fail(f"unexpected navigation labels: {parser.nav_labels!r}")
    if parser.h1_count != 1:
        fail(f"unexpected h1 count: {parser.h1_count}")
    if parser.links != EXPECTED_LINKS:
        fail(f"unexpected navigation links: {parser.links!r}")
    if parser.body_text != ["Cratis", "Documentation", "GitHub", "Contact"]:
        fail(f"unexpected visible body text: {parser.body_text!r}")
    if parser.assets != REQUIRED_ASSETS:
        fail(f"unexpected required asset references: {sorted(parser.assets)}")
    if re.search(r"(?:^|[;{])\s*content\s*:", "\n".join(parser.style_text), re.IGNORECASE):
        fail("generated CSS content is not allowed")

    for reference in parser.assets:
        path = root / reference.removeprefix("/")
        if not path.is_file():
            fail(f"missing referenced asset: {reference}")


def verify_routes(root: Path | None = None) -> None:
    root = root or ROOT
    routes = sorted(
        path.relative_to(root).as_posix()
        for path in root.rglob("*.html")
        if not any(part.startswith(".") for part in path.relative_to(root).parts)
    )
    if routes != ["index.html"]:
        fail(f"unexpected rendered routes: {routes}")

    expected_sitemap = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cratis.no/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
"""
    sitemap = (root / "sitemap.xml").read_text(encoding="utf-8")
    if sitemap != expected_sitemap:
        fail("sitemap differs from the one-route contract")


def main() -> None:
    verify_html()
    verify_routes()
    print("site verified: one neutral route, three links, required assets, no comments")


if __name__ == "__main__":
    main()
