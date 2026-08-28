# cratis.no site specification

Read `AGENTS.md`, `BRAND.md`, and `MESSAGING.md` before changing public content.

## Purpose

The site should help an evaluator understand Cratis quickly, find the smallest relevant product path, see how verified products relate without implying a mandatory bundle, inspect current limits, and continue to canonical technical documentation, source, trust, or contact routes.

The existing lifecycle and offer framing is product-owned creative input, not claim authority. Before changing or reusing it, map each material sentence to current owning evidence and public approval. Preserve the visual onboarding sequence while claim-gated copy is reviewed; do not solve a wording problem by redesigning or deleting the experience.

## Technology and deployment

The current site is static HTML, one shared stylesheet, and one progressive-enhancement script. GitHub Pages serves the repository root. There is no compilation, package installation, CMS, or generated content layer.

JavaScript is optional for reading and navigation. It enhances theme persistence, motion, mobile-menu Escape behavior, in-page focus management, and contact email composition.

## Current routes

```text
/                                      Company and lifecycle overview
/studio/                               Cratis Studio Preview
/stack/                                Build and the lifecycle
/stack/the-cast/                       Product and capability naming
/why-cratis/                           Fit and anti-fit
/support/                              Assurance plans, pricing, and workshops
/trust/                                Current trust facts and explicit limits
/about/                                Founders, lineage, and values
/writing/                              Essays
/writing/vague-codebase-vague-code/    Published essay
/ai/                                   AI-topic route; intentionally absent from the current sitemap pending content/discovery review
```

Product tutorials and API documentation link to `cratis.io` instead of being duplicated here.

## Navigation

The desktop header contains Studio, How it works, What you get, Working with us, and Who we are, plus Docs. The mobile header exposes the same destinations through a native `<details>` menu.

Requirements:

- current Studio, Support, and About links use `aria-current="page"` in static HTML;
- the menu works without JavaScript;
- Escape closes an open enhanced menu and returns focus to its summary;
- links have at least a 48-pixel touch target;
- the skip link and visible focus styles remain available;
- every page has one `<h1>` and a logical heading order.

## Content architecture

### Homepage

Explain the lifecycle and route visitors to Studio, Build, Assurance, fit guidance, and contact. Do not include customer logos, testimonials, attributed founder quotations, or numerical absolutes without approved evidence.

The contact form opens a draft in the visitor's email application. The page must state that nothing is sent automatically and provide the email address as a fallback.

### Studio

Use **Preview** consistently. Describe Stage as a sandbox for supported model behavior, not as the production system, a complete runtime, or proof that design and implementation cannot drift. Current trial, pricing, export, and retention details belong to the hosted product and its applicable terms.

### Stack and cast

Present Build, Studio, and Assurance before individual capability names. Chronicle is the event-lifecycle foundation and Arc carries typed contracts from C# toward TypeScript and React. Client, storage, and operating-tool coverage vary by product and version; link to current documentation.

### Support

Preserve the founder-published plan and engagement prices and the concrete support terms on the page. General marketing copy may summarize them as published response targets, but should not expand their coverage. A signed agreement is authoritative for an engagement.

### Trust

State current facts and limits. Do not publish a support window, maintenance branch, release cadence, legal entity detail, universal telemetry claim, zero-migration claim, universal storage independence, or formal governance program before it exists and is ratified.

### About and writing

Treat company history, founder/team identity, experience, access, editorial claims, article assertions, and availability as separately reviewable facts. Publish names, roles, bios, photographs, quotations, history, and outcome language only with current owner verification and the required claim/content review.

## Product, ecosystem, license, and commercial wording

- Use exact owner-verified product descriptions on approved product surfaces.
- Explain the seam between products and the independent-use boundary together.
- A connected product path does not establish completeness, common maturity, compatibility, support, security, or one commercial/license boundary.
- Apply repository/package license wording only to that exact artifact and version.
- Treat Studio, model-first/software-factory, umbrella ecosystem, support, pricing, continuity, security/compliance, and managed responsibility wording as separately gated.
- Keep technical depth on cratis.io and in owning repositories; cratis.no teaches the reader where to start and why the next link matters.

Footer wording follows the same evidence and scope rules as body copy.

## Visual and asset requirements

- Dark is the default theme; light is fully supported.
- Respect `prefers-reduced-motion`.
- Content remains visible if scripts or observers fail.
- Preserve readable prose width and horizontal scrolling for comparison tables.
- Every public page includes SVG and PNG favicons plus the Apple touch icon.
- Every public page has a 1200×630 share card; Studio uses `assets/og/studio.jpg`.

## Search and discoverability

The site should be findable by the category terms evaluators actually search for, in the site's own voice — never as keyword paste.

Voice boundary. cratis.no is the company's trust surface. Visible body copy leads with the company narrative — one deliberate ecosystem of professional products, many years of expertise behind them, a company that keeps building and supporting them — and names technical breadth only where the page's own story needs it. Client, storage, protocol, and license inventories belong in metadata and product documentation, not in body paragraphs. Commitment is expressed as company stance ("we're here to stay", "we keep building and supporting this"), never as SLAs, guaranteed terms, prices, or contractual assurances; services and support plans are pointed at the existing `/support/` and contact surfaces.

Keywords. Titles, meta descriptions, and OpenGraph tags on product-relevant routes carry the category vocabulary naturally: event sourcing, event store, event-sourcing database, CQRS, .NET, and — where factual for the route — the shipped client languages (TypeScript, Kotlin/Java, Elixir) and MIT/free licensing. Use each term where it is true and reads natively; do not stuff, repeat, or rank-chase.

Structured data. Each route carries the JSON-LD that matches its content:

- `/` — `Organization` (with registry/social `sameAs`) and an `ItemList` of `SoftwareApplication` entries for the public products;
- `/stack/` — `SoftwareApplication` for Chronicle, mirroring the home-page product entry;
- `/why-cratis/` — `FAQPage` for the fit/anti-fit questions;
- `/writing/<essay>/` — `BlogPosting` with headline, dates, author, publisher;
- `/writing/` and `/about/` — `BreadcrumbList` (About also carries `AboutPage`/`Organization`).

JSON-LD states only what the page itself states and follows the same claim gates as body copy.

Sitemap. Every `<url>` carries `<lastmod>`; update it when a page's content changes. `/ai/` stays out of the sitemap until its content/discovery review passes.

Claim gating. Language-breadth, storage-breadth, license, and "coming soon" wording (Python client, Ensemble) must match the current approved public-claim wording before publication, exactly as for body copy. Model-first surfaces (Studio, Screenplay, Stage, Scene, Prologue) are described as experimental or Preview; pre-release products are strictly "coming soon". No benchmark, superiority, maturity, or production-readiness wording.

## Public hygiene

Public HTML contains no editorial, audit, placeholder, provenance, or source comments. Public pages and repository documents contain no private research references, competitor claims, customer secrets, or invented proof.

Customer logos and testimonials remain absent until real material has written publication approval. Unratified policy drafts do not belong here.

## Validation

Before publication:

1. Parse every public HTML file and reject malformed markup, duplicate IDs, or broken heading structure.
2. Resolve every internal file and fragment.
3. Check external links.
4. Scan for HTML comments, placeholder markers, invented customer names, and internal-policy references.
5. Scan public copy for British spellings.
6. Confirm Studio is Preview everywhere and outside Build.
7. Check favicon, touch-icon, and share-card dimensions.
8. Exercise desktop and mobile navigation with keyboard, Escape, reduced motion, and JavaScript disabled.
9. Review dark and light screenshots at mobile and desktop widths when browser tooling is available.
