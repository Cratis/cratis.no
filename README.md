# cratis.no

The Cratis company, onboarding, and brand site. It is plain HTML, CSS, and vanilla JavaScript with no build step or runtime dependencies.

Product documentation belongs at [cratis.io](https://cratis.io). This repository owns the cratis.no visual system, route implementation, metadata, and candidate company/onboarding copy. Existing public copy and supporting message documents remain inputs to review; they do not independently approve a product, maturity, compatibility, security, support, commercial, or roadmap claim.

## Run locally

```bash
./serve            # http://localhost:4321
./serve 8080       # another port
```

Any static server also works:

```bash
python3 -m http.server 4321
```

Root-relative paths require a server. GitHub Pages serves the repository root directly.

## Current structure

```text
index.html                         Company and lifecycle overview
studio/index.html                  Cratis Studio Preview
stack/index.html                   Cratis Build and the lifecycle
stack/the-cast/index.html          Portfolio naming map
why-cratis/index.html              Fit and anti-fit guidance
support/index.html                 Cratis Assurance plans and pricing
trust/index.html                   Current trust facts and explicit limits
about/index.html                   Founders, lineage, and values
writing/index.html                 Essays
writing/vague-codebase-vague-code/ Published essay
ai/index.html                      AI-topic route; currently omitted from sitemap pending content/discovery review
assets/css/site.css                Shared styles
assets/js/site.js                  Progressive enhancement
assets/img/                        Wordmark, favicon, and touch icons
assets/og/                         Per-page share cards
```

## Content sources

| File | Purpose |
| --- | --- |
| `AGENTS.md` | Repository-wide working rules |
| `BRAND.md` | Positioning, lifecycle, offers, voice, and fit |
| `MESSAGING.md` | Candidate message inventory and copy-review inputs; not claim authority |
| `SITE.md` | Current site behavior, routes, and validation requirements |
| `PAGES.md` | Page-by-page responsibilities |
| `REVIEW-PROMPT.md` | Public-site review checklist |

Unratified policy drafts do not belong in this public repository.

## Public-content rules

- Use American English and preserve the established visual identity, onboarding flow, route structure, dark/light themes, and progressive enhancement unless the site owner approves a design change.
- Lead with one reader problem, explain why it matters, then connect the smallest relevant product path and an honest next step.
- Treat every material product, ecosystem, maturity, compatibility, security, privacy/compliance, support, commercial, outcome, and roadmap sentence as a claim requiring current owning evidence and review.
- Keep technical behavior, exact versions, setup, and limitations in owning product documentation; summarize and link rather than duplicating manuals.
- State product relationships and independent-use boundaries together so a connected ecosystem does not imply a mandatory bundle or universal compatibility.
- Scope license wording to the exact repository/package; a public source link does not establish ecosystem-wide licensing, readiness, support, or warranty.
- Do not publish invented customers, logos, testimonials, quotations, legal details, metrics, or capabilities.
- Do not expose editorial notes, audit history, private sources, claim IDs, internal evidence, or research provenance in HTML.
- Say plainly when evidence is missing, a profile is narrower, or a simpler approach is the better fit.

## Progressive enhancement and accessibility

Every page remains readable without JavaScript. The mobile primary navigation uses native `<details>` behavior as its no-JavaScript fallback. JavaScript adds Escape-to-close, focus return, theme persistence, animation, smooth in-page navigation, and a properly encoded email draft for the contact form.

Validate dark and light themes, mobile and desktop widths, keyboard navigation, visible focus, reduced motion, and no-JavaScript behavior before publication.

## Static validation

At minimum, check:

- HTML parsing and unique IDs;
- internal files and fragments;
- external HTTP links;
- no HTML comments or placeholder markers;
- no invented customer or testimonial text;
- American English in public content;
- required favicon, touch icon, and share-card assets;
- Studio labeled Preview everywhere.
