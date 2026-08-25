# cratis.no site specification

Read `AGENTS.md`, `BRAND.md`, and `MESSAGING.md` before changing public content.

## Purpose

The site should let an evaluator understand Cratis quickly, decide whether it fits, verify current limits, and choose among three offers:

1. **Cratis Build** — the open runtime and operating foundation.
2. **Cratis Studio** — the paid collaborative design product at **Preview** maturity.
3. **Cratis Assurance** — founder-led support and bounded expertise, with availability and commitments defined by the selected plan or engagement.

The organizing lifecycle is **Design → Build → Operate → Improve**. Studio supports Design but is not part of Build. Build includes the deployed runtime and available operating tools. Assurance does not gate the right to run or repair Build.

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

Preserve the more-than-fifteen-year event-sourcing lineage and the founder-led nature of Assurance without promising unlimited direct availability. Only publish approved names, roles, bios, photographs, and quotations.

## Open-source and commercial wording

Use these boundaries:

- Cratis Build is developed in public under the license stated by each repository.
- Cratis Studio is a separate paid Preview product.
- Cratis Assurance is paid time, expertise, and published commitments.
- Build does not require Studio or Assurance as permission to run.

Do not say that all Cratis software is MIT licensed, that every deployed component has identical terms, or that public source eliminates migration and maintenance work.

Footer wording must remain scoped to Build and repository-specific licenses.

## Visual and asset requirements

- Dark is the default theme; light is fully supported.
- Respect `prefers-reduced-motion`.
- Content remains visible if scripts or observers fail.
- Preserve readable prose width and horizontal scrolling for comparison tables.
- Every public page includes SVG and PNG favicons plus the Apple touch icon.
- Every public page has a 1200×630 share card; Studio uses `assets/og/studio.jpg`.

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
