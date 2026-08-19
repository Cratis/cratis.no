# cratis.no

The Cratis **company and brand site**. Plain HTML, CSS and vanilla JavaScript — no framework, no build step, no dependencies.

> **Not the documentation.** Product docs live at [cratis.io](https://cratis.io) (`../Documentation`). If a page teaches someone *how to use the software*, it belongs there. If it helps someone *decide to use it, trust us, or pay us*, it belongs here.

---

## Run it

```bash
./serve            # → http://localhost:4321, opens a browser
./serve 8080       # any other port
```

`serve` picks the first static server it finds — python3, npx, php or ruby — and refuses to start if the port is busy. There is nothing to install and nothing to build.

Any static server works just as well:

```bash
python3 -m http.server 4321
```

Opening `index.html` directly also works, though root-relative paths (`/assets/…`) need a server.

## Deploy

Static files at the repository root. Point GitHub Pages at the default branch, root directory — nothing to build.

**Before the first deploy**, see [Launch checklist](#launch-checklist).

## Structure

```text
index.html                 Homepage
about/                     Founders, community, values
support/                   Plans, advisory, workshops
trust/                     Licence, security, continuity, governance
why-cratis/                The competitive argument
stack/                     The platform
stack/the-cast/            How the products are named
writing/                   Index + essays
assets/css/site.css        Everything visual — one file
assets/js/site.js          Progressive enhancement only
assets/img/logo.svg        Wordmark, uses currentColor
assets/og/                 Per-page share cards (1200×630)
```

## The documents

Brand and content decisions live in version control alongside the site.

| File | What it is |
| --- | --- |
| `AGENTS.md` | Rules for anyone — human or AI — working on this site. **Read first.** |
| `BRAND.md` | Positioning, brand architecture, messaging pillars, competitive analysis |
| `MESSAGING.md` | Approved copy, product one-liners, objection handling, do-not-say list |
| `SITE.md` | Purpose, requirements, design notes, information architecture |
| `PAGES.md` | Page-by-page blueprint |
| `POLICIES.md` | Draft versioning/LTS policy and support terms — **not yet publishable** |
| `REVIEW-PROMPT.md` | Self-contained brief for a fresh session reviewing this site |
| `reference/` | The original design concept, preserved, with its known factual errors annotated |

## Conventions

- **Audience is non-technical.** The homepage, `/about`, `/support` and `/trust` are written for executives and product leaders. They are verified free of developer jargon. `/stack`, `/why-cratis` and the essays are the technical depth, reachable from the footer.
- **One stylesheet, one script.** Resist adding files; the site is small enough that discoverability beats modularity.
- **JavaScript is optional.** Every page is complete and readable with scripts disabled. The rotating headline word, the orbit, the marquees and the reveals are all enhancement.
- **Nothing invented ships silently.** Placeholder content carries a visible amber ribbon, a `data-placeholder-guard` attribute, and an HTML comment. Search for `NEEDS FACT`, `DRAFT:`, `PLACEHOLDER` and `BLOCKED`.

## Launch checklist

Blocking items, all requiring facts only the founders have:

- [ ] **Legal entity** — registered name, organisation number, address, VAT. Appears in every footer and on `/trust`.
- [ ] **Customer logos** — replace the six invented names on the homepage, or delete the band.
- [ ] **Testimonials** — replace the four invented quotes with real, permissioned ones, or delete the section.
- [ ] **Founder quotes** — two drafts written *in* Einar's and Sindre's voices. Approve, rewrite, or remove.
- [ ] **Founder photographs** — initials stand in on `/about` and the homepage.
- [ ] **Founder bios** — one line each, currently placeholder.
- [ ] **Pricing sign-off** — support tiers and engagement fees on `/support` are proposals, not decisions.
- [ ] **Versioning policy** — `POLICIES.md` §0 documents why the "LTS branch" promise was removed. Resolve before advertising it.
- [ ] **Privacy/analytics** — `/trust` says no cookie banner. Confirm the analytics choice, or leave as-is.
- [ ] **Domain** — `.no` reads as a local supplier to international buyers. See `BRAND.md` §10.1.

## Browser support

Modern evergreen browsers. Uses `color-mix()`, `clamp()`, `backdrop-filter` and `aspect-ratio`. Degrades to a readable, unstyled-but-correct document in anything older.
