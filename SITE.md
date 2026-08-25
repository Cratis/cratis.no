# cratis.no site specification

## Purpose

cratis.no is the Cratis company, fit, trust, commercial-contact, and product-navigation surface. cratis.io is the canonical technical documentation surface. Owning product repositories retain source, releases, packages, issues, and repository-specific licenses.

## Technology

The site is static HTML with one shared stylesheet and one optional progressive-enhancement script. Core content and navigation remain available without JavaScript.

GitHub Pages is configured to serve the repository root from `main` at the custom domain in `CNAME`.

## Exact route set

```text
/               Company and product navigation
/stack/         Bounded product descriptions and technical links
/why-cratis/    Evidence-first fit navigation
/support/       Commercial contact and software/responsibility boundary
/trust/         Source, license, and private vulnerability-reporting routes
/about/         Company contact and owning-surface links
```

Every route must appear in `sitemap.xml`, except no additional route is admitted by appearing in navigation or source. A removed HTML file is a removed Pages route after the reviewed `main` deployment completes.

## Navigation

Desktop and native `<details>` mobile navigation expose the same destinations:

1. Products
2. Fit
3. Commercial
4. Trust
5. About
6. Documentation at cratis.io

Each page marks its current navigation item with `aria-current="page"`. The skip link, visible focus, 48-pixel mobile targets, Escape-to-close enhancement, and focus return remain available.

## Metadata

Every page has:

- one bounded title and meta description;
- one self-canonical cratis.no URL;
- matching OpenGraph title, description, URL, and 1200×630 local image;
- SVG and PNG favicons plus the Apple touch icon; and
- one visible H1 with logical heading order.

Metadata is public copy and follows the same statement boundary as the page body.

## Content boundary

- Name products and link owning technical surfaces without implying an umbrella product, common maturity, compatibility, support, or commercial commitment.
- Use only current product-owner-reviewed descriptions on their admitted product surfaces.
- Do not publish a product identity, capability, maturity, quality, compatibility, security-posture, performance, support, pricing, continuity, customer-outcome, roadmap, or managed-service statement without current owning approval.
- Keep the private vulnerability-reporting route factual. Do not imply security posture, response time, SLA, warranty, bounty, or support.
- Keep technical depth on cratis.io and in owning product repositories.
- Exclude credentials, customer or personal data, production payloads, private security evidence, internal review material, and local artifacts.

## Progressive enhancement

- The theme toggle persists only a light/dark preference.
- The native mobile menu works without JavaScript; JavaScript adds Escape and focus return.
- Reduced-motion preference disables optional entrance and scrolling animations.
- Content is visible if scripts, fonts, or observers fail.

## Validation

Run:

```bash
python3 tools/validate-site.py
python3 tools/validate-site.py --check-external
```

Then serve the repository and verify:

1. all six routes return HTML;
2. internal files and fragments resolve;
3. the sitemap and canonical URLs match the exact route set;
4. light and dark desktop layouts have no contrast or overflow blocker;
5. mobile navigation works at 390 pixels;
6. keyboard focus is visible and follows a logical order;
7. reduced-motion mode has no required animation;
8. each page remains useful with JavaScript disabled; and
9. the final source contains no private or removed-route material.
