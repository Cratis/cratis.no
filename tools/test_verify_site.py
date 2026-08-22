# Copyright (c) Cratis. All rights reserved.
# Licensed under the MIT license. See LICENSE file in the project root for full license information.

from contextlib import redirect_stderr
from io import StringIO
from pathlib import Path
import shutil
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parent))
import verify_site

SOURCE_ROOT = Path(__file__).resolve().parent.parent


class VerifySiteTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temporary_directory = tempfile.TemporaryDirectory()
        self.root = Path(self.temporary_directory.name)
        (self.root / "assets/img").mkdir(parents=True)
        shutil.copy2(SOURCE_ROOT / "index.html", self.root / "index.html")
        shutil.copy2(SOURCE_ROOT / "sitemap.xml", self.root / "sitemap.xml")
        for reference in verify_site.REQUIRED_ASSETS:
            source = SOURCE_ROOT / reference.removeprefix("/")
            target = self.root / reference.removeprefix("/")
            shutil.copy2(source, target)

    def tearDown(self) -> None:
        self.temporary_directory.cleanup()

    def assert_invalid_html(self, transform) -> None:
        index = self.root / "index.html"
        index.write_text(transform(index.read_text(encoding="utf-8")), encoding="utf-8")
        with redirect_stderr(StringIO()), self.assertRaises(SystemExit):
            verify_site.verify_html(self.root)

    def test_current_site_is_valid(self) -> None:
        verify_site.verify_html(self.root)
        verify_site.verify_routes(self.root)

    def test_duplicate_visible_link_is_rejected(self) -> None:
        self.assert_invalid_html(
            lambda source: source.replace(
                "</ul>",
                '<li><a href="https://example.invalid">Documentation</a></li></ul>',
            )
        )

    def test_script_is_rejected(self) -> None:
        self.assert_invalid_html(
            lambda source: source.replace("</body>", "<script>document.title = 'Other'</script></body>")
        )

    def test_generated_css_content_is_rejected(self) -> None:
        self.assert_invalid_html(
            lambda source: source.replace("</style>", "a::after { content: 'claim'; }</style>")
        )

    def test_accessibility_label_drift_is_rejected(self) -> None:
        self.assert_invalid_html(lambda source: source.replace("Cratis links", "Product links"))

    def test_unexpected_accessible_heading_claim_is_rejected(self) -> None:
        self.assert_invalid_html(lambda source: source.replace("<h1>", '<h1 aria-label="Cratis is secure">'))

    def test_text_after_body_is_rejected(self) -> None:
        self.assert_invalid_html(lambda source: f"{source}Unexpected claim")

    def test_additional_rendered_route_is_rejected(self) -> None:
        route = self.root / "support/index.html"
        route.parent.mkdir(parents=True)
        route.write_text("<!doctype html><title>Other</title>", encoding="utf-8")
        with redirect_stderr(StringIO()), self.assertRaises(SystemExit):
            verify_site.verify_routes(self.root)


if __name__ == "__main__":
    unittest.main()
