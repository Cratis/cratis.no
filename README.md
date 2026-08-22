# cratis.no

Static hosting for `cratis.no`. The published page currently provides neutral links to Cratis documentation, GitHub, and contact.

## Run locally

```bash
./serve            # http://localhost:4321
./serve 8080       # another port
```

Any static server also works:

```bash
python3 -m http.server 4321
```

Root-relative asset paths require a server. GitHub Pages serves the repository root directly.

## Structure

```text
index.html                Published page
assets/img/               Wordmark, favicon, and touch icon
CNAME                     Custom domain
robots.txt                Crawler policy
sitemap.xml               Published route inventory
tools/verify_site.py      Static content guard
tools/test_verify_site.py Guard regression tests
serve                     Local static server
```

## Verify

```bash
PYTHONDONTWRITEBYTECODE=1 python3 tools/test_verify_site.py
PYTHONDONTWRITEBYTECODE=1 python3 tools/verify_site.py
```

The verifier parses the HTML, rejects comments, scripts, generated CSS text, accessibility-label drift, duplicate links, and additional rendered routes; checks the exact ordered navigation targets; confirms the sitemap contains only the root route; and verifies required assets.

Use American English. Do not add customer material, attributed quotations, metrics, dates, prices, legal terms, product maturity, capabilities, support commitments, security assertions, availability statements, compatibility promises, roadmap wording, or outcome claims without the corresponding review and evidence.
