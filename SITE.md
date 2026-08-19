# SITE.md — Build specification for cratis.no

**Read `AGENTS.md` first.** This document covers stack, form factor, design system, components, and build order. Page-by-page content lives in `PAGES.md`.

---

## 1. Purpose and scope

### 1.1 What this site is for

Four jobs, in priority order:

1. **Make a senior engineer understand Cratis in ten seconds** — and want to know more.
2. **Give a manager or architect the evidence to say yes** — trust, continuity, terms, proof.
3. **Sell support plans, workshops and advisory** — with public pricing and a low-friction first step.
4. **Make two people look like a company** — without claiming to be more than two people.

### 1.2 What this site is not

Not documentation. Not a tutorial. Not a blog-first site. Not a feature encyclopedia.

If a visitor wants to *learn Cratis*, this site's job is to hand them to cratis.io as fast as possible. If they want to *trust Cratis or buy from Cratis*, this site is where that happens end to end.

### 1.3 The single success metric

> A staff engineer who has never heard of Cratis lands on the homepage, and within thirty seconds can accurately explain to a colleague what it is and why it's different.

Every design and copy decision is judged against that sentence.

---

## 2. Form factor and constraints

*Technology choice is Einar's. This section states what the site must **do**, not what it must be built **with**.*

### 2.1 Requirements, not prescriptions

| Requirement | Why it matters |
| --- | --- |
| **Fast** | LCP under 1.5s. A slow site contradicts everything the brand claims about craft. |
| **Works without JavaScript** | Content must be readable with JS disabled. Only the one interactive piece (§5.3) may require it. |
| **Accessible** | Semantic HTML, real heading order, keyboard navigable, visible focus, WCAG AA contrast, `prefers-reduced-motion` honoured. |
| **Dark and light** | Dark is the default. Light must work and must be tested. |
| **Content in the repo** | Copy lives in version control, reviewable in a pull request. No CMS — two people need `git`, not an editor UI. |
| **Analytics without a cookie banner** | Plausible, Fathom, or none. A consent banner on a site that preaches honesty is a bad first impression. |
| **Preview deploys** | Every pull request gets a URL. Copy changes need to be seen before they merge. |

### 2.2 One structural rule that outlives any stack

**Pricing, product names, and locked descriptors have exactly one source each.**

Support plan tiers appear on `/support` and `/services`. Product descriptors appear on the homepage, `/stack`, and the footer. If those are typed by hand in multiple places they *will* drift — an unusually embarrassing bug for a brand whose central claim is that drift becomes a build error.

Whatever the stack: keep them in one data file and render from it.

### 2.3 Note on continuity with the docs site

The docs site (`../Documentation/web`) is Astro + Starlight. Sharing a toolchain family would let conventions and components transfer, and would make the two sites easier to keep visually aligned. That's an argument, not a requirement — the design and stack call is Einar's.

---

## 3. Design notes

*Einar owns design and styling. This section is **input**, not instruction — observations from the brand work and from the existing docs site that may or may not be useful.*

### 3.1 A correction to BRAND.md worth knowing about

`BRAND.md` §9.2 proposed a warm amber accent. **Disregard that.** It was written before I looked at `../Documentation/web/src/styles/cratis.css`, which already ships a real identity:

```css
--sl-font:            'Inter Variable'
--sl-font-mono:       'JetBrains Mono Variable'
--sl-color-accent:    #3b6fed   /* dark theme */
--sl-color-accent:    #2150cf   /* light theme */
--sl-color-accent-low: #14224a
--sl-color-accent-high:#c3d4fb
```

Brand continuity outranks a fresh aesthetic preference. A visitor moving between cratis.no and cratis.io should not feel they changed companies. If the accent changes, it should change on both sites in the same week.

### 3.2 The rest of BRAND.md §9 still stands

- **Editorial, not theatrical.** The theatre metaphor lives in the *names*. No curtains, masks, spotlights, or clapperboards — it reads as kitsch and undercuts the enterprise credibility the support plans depend on.
- **Code is a first-class visual element**, not decoration. Real, correct, runnable code — never pseudo-code on a site that sells type safety.
- **Almost no photography.** Two real photographs of two real people on `/about`. No stock, no illustrated blobs, no 3D isometric servers.
- **Asymmetry over centering.** Centered hero text is the default look of every developer-tool site.
- **One motion piece only** (§5.3). Nothing on scroll — no fade-ins, no parallax, no reveal animations.

### 3.3 One suggestion worth considering

If a single warm accent is introduced, reserving it for **prices, status pills, and the one motion highlight** — and nothing else — would make it read as meaningful rather than decorative. Scarcity is what makes an accent work.

### 3.4 The display-serif question

`BRAND.md` §9.2 argued for a high-contrast serif on headlines — the "playbill" reference — to separate Cratis from the wall of Inter-on-white that every developer tool currently looks like.

That argument still holds, but it is a **brand-wide** decision, not a marketing-site decision. If adopted, it should land on both sites together. Flagged as open decision 3 in §10.

### 3.5 Content-driven layout constraints

These come from the copy rather than from taste, so they are worth knowing regardless of visual direction:

- **The hero headline must hold two lines maximum** at every breakpoint. "The model is the system." is short by design.
- **The pull-quotes need room.** Three of them (`§1.3`, `§1.4`, and the continuity clause) are doing heavy lifting and will be screenshotted.
- **The plan table must not collapse into stacked cards on mobile.** The comparison *is* the value — horizontal scroll with a sticky first column preserves it.
- **Prose wants a narrow measure** (~42rem); comparison tables and code want a wide one (~68rem). The page alternates between them.

---

## 4. Information architecture

```text
/                       Homepage
/stack                  The Cratis Stack — three products, one narrative
/stack/the-cast         The ensemble page (metaphor, shareable)
/why-cratis             The competitive argument, honestly made
/support                Support plans + continuity clause + terms
/services               Advisory catalogue
/services/workshops     Workshops + public cohorts
/trust                  Security, governance, LTS, licence, roadmap
/about                  Founders, core team, values, legal entity
/customers              Showcase — named production users
/blog                   Index
/blog/[slug]            Post
/contact                Book a Fit Review
/legal/terms            Support plan terms
/legal/privacy          Privacy
```

### 4.1 Navigation

**Header** — five items maximum. More than five and nothing gets clicked.

```text
[Cratis]    Stack   Why Cratis   Support   Services   Docs ↗    [ Get started ]
```

- `Docs ↗` goes to cratis.io with an external-link marker.
- `Get started` is the only button in the header. It goes to the cratis.io getting-started page.
- Sticky on scroll, translucent backdrop, thin bottom border once scrolled.
- Mobile: hamburger → full-screen overlay, large touch targets.

**Footer** — four columns, and this is where the credibility signals live.

```
Product          Company         Resources        Cratis
Chronicle        About           Documentation    Cratis AS
Arc              Trust           GitHub           Org.nr NNN NNN NNN
Studio           Customers       Discord          Oslo, Norway
The Cast         Blog            Roadmap          oss@cratis.io
                 Contact         Changelog        MIT licensed
                                 Security
```

Bottom bar: `© Cratis AS` · Terms · Privacy · theme toggle.

**The legal entity in the footer is not a formality.** It is the line that turns "two guys with a GitHub org" into "a registered company" for a cautious reader. Put it on every page.

---

## 5. Recurring content patterns

*Not a component spec — a list of the shapes the copy keeps taking. Useful whether these become components, partials, or hand-built sections.*

### 5.1 Patterns that repeat across pages

| Pattern | Where it appears | What it has to do |
| --- | --- | --- |
| **Product card** | Homepage, `/stack`, footer | Name + locked descriptor + one-liner + link. The descriptor is never optional — see `MESSAGING.md` §3. |
| **Statement** | Homepage ×2, `/support`, `/about` | A single brand line, large, standing alone. These get screenshotted; they need room. |
| **Code showcase** | Homepage, `/stack` | Tabbed C# / TypeScript with a caption. Real code from the docs, never invented. |
| **Comparison** | `/why-cratis` | "Instead of / you get" two-column table. |
| **Plan table** | `/support` | Four tiers, ~15 rows. Must stay comparable on mobile. |
| **Engagement card** | `/services` | Name, duration, price, "you leave with". |
| **FAQ** | `/support`, `/why-cratis` | Expand/collapse. Should work without JS. |
| **Person card** | `/about`, homepage | Photo, name, role, one-line bio, link. |
| **Honesty callout** | Every commercial page | The "when this is the wrong fit" aside. This is a Cratis signature — it needs a distinct, recognisable treatment. |
| **Logo wall** | `/customers` | **Blocked** until three real logos exist. An empty or padded wall is worse than none. |

### 5.2 The single source-of-truth rule

Product descriptors, plan tiers, and engagement prices each appear on **two or more** pages. However the site is built, these belong in one data file and get rendered — not retyped. See §2.2.

### 5.3 The one interactive piece — "model to system"

The centrepiece, and the only place on the site that justifies JavaScript. Four states:

```text
[ 1 Model ]  [ 2 Script ]  [ 3 Running ]  [ 4 History ]

1. MODEL     A simplified event-model canvas — command → event → read model.
2. SCRIPT    The same model as Screenplay .play source.
3. RUNNING   The live app — a React form and a table.
4. HISTORY   The event log in the CLI, showing the event the form just produced.
```

**Caption, fixed:** *"The same model, four ways. Stage runs it — nothing is generated, so nothing can drift."*

Behaviour worth preserving whatever the implementation:

- Auto-advance, but **stops permanently on any user interaction**. Nothing is more irritating than a carousel that keeps moving after you've taken control.
- Keyboard operable, correct tab semantics.
- A static first frame when JS is off or reduced-motion is set.

**This is the single highest-value asset on the site** — it demonstrates the one claim no competitor can make. It is also the only thing here that needs real design and engineering time. Worth doing *after* the pages exist, so it illustrates something proven rather than something speculative.

---

## 6. Page-type templates

### 6.1 Homepage — the ten-second test

Sections, in order:

1. **Hero** — headline, subhead, two buttons, credibility strip
2. **Three commands** — the install snippet
3. **The problem** — name the pain
4. **The answer** — four moves, one payoff line
5. **`ModelToSystem`** — the proof
6. **The products** — three cards
7. **The code** — one slice, C# and TypeScript
8. **Who we are** — the company promise
9. **Where to start** — three routes out

Nine sections. **No more.** Every extra section costs comprehension, which is the one thing the homepage is measured on.

### 6.2 Commercial pages (`/support`, `/services`)

Fixed order: **Hero → the honest thing → the offer → the detail → FAQ → CTA.**

"The honest thing" comes *before* the price. On `/support` that is the continuity clause. On `/services` it is "when we're not the right fit". Leading with the caveat is the differentiator — it is also, straightforwardly, the more useful order for the reader.

### 6.3 Trust page

Long, dense, scannable, boring on purpose. Sections addressable by anchor so an architect can link a colleague to exactly one clause. This page is optimised for being *cited*, not read.

---

## 7. Suggested sequence

*Ordered by value, not by dependency. The point is that finished pages beat scaffolded ones — one complete page teaches more about whether the direction is right than twelve empty routes.*

| Order | Page | Why here |
| --- | --- | --- |
| 1 | **Homepage** | The ten-second test is the whole point. Everything else is downstream of getting this right. |
| 2 | `/support` | Revenue. The continuity clause is the most valuable copy on the site. |
| 3 | `/services` + `/services/workshops` | Revenue. |
| 4 | `/trust` | Cheapest high-value page — mostly assembly of content that already exists on cratis.io. |
| 5 | `/about` + `/contact` | Credibility, and the route from interest to conversation. |
| 6 | `/stack` + `/why-cratis` | Depth for the evaluator who wants to go deeper. |
| 7 | The "model to system" piece | Now illustrates something proven. |
| 8 | `/stack/the-cast` | Shareable asset — good launch-day content. |
| 9 | `/blog` + first post | Ongoing. |
| 10 | `/customers` | **Blocked** until three real named users exist. |

**A launch could reasonably be 1–5.** Items 6–9 are depth, and depth can follow. Item 10 is blocked on facts, not on effort.

---

## 8. SEO and metadata

- **One `<h1>` per page.** Real heading hierarchy, no skipped levels.
- **Per-page OG image** in `public/og/` — dark background, the page headline in Inter, the Cratis mark. Consistent template.
- Meta descriptions written by hand, 150–160 characters. Never auto-generated.
- `Organization` and `Product` JSON-LD on the homepage. `FAQPage` on `/support`.
- `sitemap.xml` and a real `robots.txt`.
- **Canonicals matter here.** cratis.io and cratis.no must never compete for the same query. Any topic that exists in the docs is linked, not restated.

**Target queries** — commercial-intent only, leaving informational queries to the docs:

`event sourcing .NET support` · `Marten alternative` · `AxonIQ alternative .NET` · `event modeling workshop` · `event sourcing consulting` · `CQRS framework .NET React` · `event sourcing training`

---

## 9. Done checklist

Before a page ships:

**Content — the part that must not slip**

- [ ] Every claim traceable to `BRAND.md`, `MESSAGING.md`, or a verified fact
- [ ] Zero do-not-say words (`MESSAGING.md` §12)
- [ ] Every product name carries its locked descriptor on first use
- [ ] No invented statistics, dates, customers, or headcount
- [ ] Every external link resolves
- [ ] Any gap left as an explicit marker, not a plausible guess

**Experience**

- [ ] Dark and light both correct
- [ ] Mobile, tablet, desktop all checked
- [ ] Readable with JavaScript disabled
- [ ] Keyboard navigable, visible focus states
- [ ] `prefers-reduced-motion` honoured
- [ ] LCP under 1.5s

**Brand**

- [ ] No theatre imagery, no stock photography
- [ ] The honesty section is present wherever the page makes a claim worth qualifying

---

## 10. Open decisions

Flag these to the founders; do not decide them unilaterally.

| # | Decision | Recommendation |
| --- | --- | --- |
| 1 | **Domain.** `.no` signals a local Norwegian supplier to international enterprise buyers. | Consolidate on `cratis.io`, or acquire `.com`/`.dev`. See `BRAND.md` §10.1. |
| 2 | **Publish prices?** | **Yes.** Public pricing is the single biggest credibility multiplier available to a small company. |
| 3 | **Display serif for headlines?** | Defer. If adopted, change both sites in one commit. |
| 4 | **Payment flow** — Stripe checkout vs. invoice on request? | Invoice for support plans; Stripe only for public workshop seats. |
| 5 | **Blog on this site or cratis.io?** | Here. Company voice, and it feeds the commercial pages. |
| 6 | **Legal entity details** — exact name, org.nr, address for the footer. | **Needed before launch.** Cannot be invented. |
