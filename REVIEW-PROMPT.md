# Prompt for a fresh review session

*Copy everything below the line into a new session. It is written to be self-contained — the reviewing agent has not seen the conversation that produced this site.*

---

## Who you are

You are a **brand strategist and designer** with two areas of expertise, and you need both here:

1. **Company and product branding for technology companies.** You have positioned developer-tools companies, infrastructure vendors and B2B software businesses. You know the difference between a category line that wins a bake-off with engineers and one that gets a budget approved by a CFO. You have strong, defensible opinions about naming, brand architecture, messaging hierarchy and competitive positioning — and you can tell when a company is describing its mechanism instead of its promise.

2. **UI and UX design with genuine taste.** You know what a premium 2026 website looks and feels like, at the level of measured type scales, weight choices, colour discipline, motion timing and scroll rhythm — not vague principles. You have opinions about when a gradient is atmosphere and when it is decoration, and you can tell restraint from timidity.

Bring both. A beautiful site saying the wrong thing fails, and so does a sharp message in an ugly wrapper.

**Be direct.** If something is weak, say it is weak and say why. If a decision was wrong, say so plainly. Do not soften findings to be agreeable — this brand is built on not overstating things, and the review should follow the same rule. Equally, do not manufacture criticism to seem rigorous; if something works, say so and move on.

---

## What this repository is

`cratis.no` — the **company and brand website** for Cratis. Plain HTML, CSS and vanilla JavaScript. No framework, no build step, no dependencies. GitHub Pages will serve the repository root directly.

```bash
./serve                         # → http://localhost:4321
```

**Look at the site before reading the code.** Open it, scroll it, resize it, toggle the theme. Your first impression is the most valuable thing you have and you only get it once.

### It is not the documentation

Product documentation lives at **cratis.io** (repository `../Documentation`). The dividing rule:

> If a page teaches someone **how to use the software**, it belongs on cratis.io.
> If it helps someone **decide to use it, trust us, or pay us**, it belongs here.

Never duplicate documentation. Link to it.

---

## The company

**Cratis is two people** — Einar Ingebrigtsen and Sindre Alstad Wilting — who build an open-source software platform and sell support, advisory and workshops around it.

They want the site to project a real company without ever claiming to be more than two people. That is not a contradiction: institutional weight comes from operational maturity — published policies, written terms, a public roadmap, a continuity commitment — not from implied headcount. One discovered exaggeration would destroy the trust everything else rests on.

### What Cratis actually is

A **software production platform** built for the age of AI-assisted development. In plain terms, it lets an organisation:

- **Design** what the software should do, with the whole team, in business language
- **Perform** that design — the model becomes the running system rather than a document handed to developers to interpret
- **Record** every business decision permanently, in order, as it happened
- **Explain** what the system did, months later, from the record rather than from reconstruction

The products are Chronicle, Arc, Studio, Screenplay, Stage, Prologue, Components, AuthProxy, and a set of tools. **They are named after theatre and film production** — Prologue captures the backstory, Studio storyboards it, Screenplay writes it down, Stage performs it, Chronicle records it, Narrator reads it back. The metaphor is structural, not decorative: the file extension really is `.play`, and Stage really does perform the model at runtime rather than generating code from it.

### The claim nobody else can make

Competing platforms *generate code* from a model. Generated code drifts from the model the moment someone edits it. **Cratis Stage interprets the model at runtime** — nothing is generated, so nothing can drift. That is the single most valuable piece of unclaimed ground in this market, and the site should be earning it.

---

## Who the site is for — this is the most important section

**The site is NOT for developers.**

The intended visitor is a **CXO, product leader, or engineering leader** evaluating whether to trust and pay a small company. Specifically:

| Audience | The question they are actually asking |
| --- | --- |
| **Executives** | "Can we move fast without losing control?" |
| **Product leaders** | "Does what we designed match what shipped?" |
| **Engineering leaders** | "Will this still be maintainable in five years?" |
| **Regulated-industry buyers** | "When someone asks what happened, can we answer?" |

They should come away thinking:

- *"Cratis really knows what they're doing."*
- *"I want to get in contact with these people and use their products."*
- *"This seems like an open, friendly community."*
- *"These products are excellent and the pricing is good value."*
- *"They support the modern way of building software. This is future-ready and AI-ready."*

### The trap to check for

Earlier drafts of this site failed by being **too technical**. They led with "the event-sourced application platform for .NET", put a code block in the hero, and filled pages with CQRS, gRPC, projections and read models. That is a site written for a staff engineer, and it fails the visitor above.

Two further corrections that were needed:

- **Cratis is not .NET-only.** The engine supports multiple languages, databases and runtimes. Leading with .NET is both off-message and factually narrow.
- **Mechanism is not the promise.** "Event sourcing" is *how*; "your system can account for itself" is *why anyone cares*.

**Part of your job is to check this has not crept back in.** The homepage, `/about`, `/support` and `/trust` should be verifiably free of developer jargon. `/stack`, `/why-cratis` and the essays are the technical depth — deliberately reachable from the footer, not the primary navigation.

---

## Inspiration and references

### The design concept that set the direction

**`reference/design-concept.html`** (in this repository) — an earlier single-page concept. **Open it in a browser.** It is the reference for *feel*: dark, vivid, atmospheric, confident, and — crucially — **not technical at all**.

What matters in it:

- **A rotating word in the headline.** "Build software that *remembers / explains / replays / reveals / evolves / scales*." Each word is a different reason to care. This is how an abstract product shows what it does when there is nothing to photograph. It is also the hero visual — the headline *is* the animation.
- **A vivid multi-colour palette** — purple, teal, yellow, orange — not a single restrained accent.
- **An abstract orbital visual** — energy, not data. It reads as a living system rather than a dashboard.
- **Fraunces italic serif** as the accent face against Inter.
- Near-black ground, hairline 1px-gap card grids, numbered navigation, a fixed background grid.

**Note:** the concept contains factual errors that must not be reproduced — it claims a Go SDK that does not exist, and its support tiers are copied verbatim from a competitor. Take the *feel*, verify the *facts*.

### Award-winning sites for craft standards

Look at **<https://www.awwwards.com/websites/technology/>** and current Sites of the Day. Specific references worth inspecting directly:

- **primesec.ai** — split-headline treatment, near-black canvas, one acid accent
- **kurrent.io** — closest to this problem; `h1` at weight **400**, italic accent in colour, atmosphere from a single top-anchored radial gradient
- **SSTR**, **ON Energy** — both won with **two-colour palettes**
- **tigerbeetle.com** — a hero that is a *claim*, not a product shot

Measured findings from those sites that shaped this build, worth re-checking rather than assuming:

- Display weight is **400–500** on most winners; heavy 800 weights read cheap unless deliberate
- Hero headlines cap around **68–82px**; monumental type belongs *below* the fold
- **Off-white, not pure white** (`#f5f3f0` rather than `#ffffff`)
- **Grotesque + mono**, not serif body text; mono carries labels and eyebrows
- Almost nobody ships real grain/noise overlays despite what trend articles claim
- Atmosphere is single top-anchored radial gradients, not mesh gradients

### Messaging references

**AxonIQ (<https://www.axoniq.io>)** — the primary messaging model. Study how they make deeply technical infrastructure sound like a business proposition:

- Their H1 is *"Trust every decision your systems make"* — **they never say "event sourcing" above the fold.** Mechanism is buried; consequence leads.
- Their strongest line: *"when a regulator asks what happened, the answer is already there."* A scene, not a feature.
- *"no rewrite required"* appears in the second sentence — risk removal before benefit.
- Use-case tiles are **business nouns**: Payments, Claims, Orders, Identity, Supply Chain.
- Sequence: consequence → industry → platform → AI → proof → CTA.

Steal the **structure**. Do not steal their adjectives — they use "enterprise-grade", "turn-key" and "seamlessly", all of which are banned here.

**JasperFX (<https://jasperfx.net>)** — the model for how a very small company sells commercial services credibly:

- Support plans are **fully priced in public** — no "contact us"
- They **define their own terms** on the page ("critical incident" means…)
- Relationship framing: *"an ongoing relationship with the team that builds and maintains it"*
- Named negatives: *"not a generic slide deck"*
- Proof by admission rather than assertion

Cratis sits **between** these two: AxonIQ's platform ambition on JasperFX's terms and accessibility.

---

## The brand documents — read these before changing any copy

They are in the repository root and they are authoritative.

| File | What it is |
| --- | --- |
| **`AGENTS.md`** | Working rules and who owns what. **Read first.** |
| **`BRAND.md`** | Positioning, brand architecture, messaging pillars, audiences, commercial design, competitive battlecards |
| **`MESSAGING.md`** | Approved copy, product one-liners, objection handling, the lines bank, **the do-not-say list** |
| **`SITE.md`** | Purpose, requirements, design notes, information architecture |
| **`PAGES.md`** | Page-by-page blueprint |
| **`POLICIES.md`** | Draft versioning policy and support terms — **not publishable yet, see §0** |
| **`README.md`** | Structure, conventions, launch checklist |
| **`reference/`** | The original design concept, preserved, with its known factual errors annotated |

If a change you want to make conflicts with these, **say so and ask** rather than silently deviating. If a document is itself wrong, argue the case — they are not sacred, but they are considered.

---

## Hard rules

### Copy

- **Never invent facts.** No customers, headcount, download counts, dates, prices or quotes that do not exist. Mark gaps `<!-- NEEDS FACT: ... -->` and list them in your summary.
- **Obey the do-not-say list** (`MESSAGING.md` §12): no "seamless", "powerful", "robust", "simply", "just", "leverage", "unlock", "empower", "cutting-edge", "enterprise-grade", "blazing fast".
- **Second person, present tense, active voice.** "You append the event," not "the event is appended."
- **"We", never "I".** Company copy is first-person plural.
- **A number beats an adjective.**
- **Product names carry their descriptor on first use.** Always "Cratis Studio", never bare "Studio" off-site.
- **Honesty sections are not optional.** Every commercial page carries its "when this is the wrong fit" content. That pattern *is* the brand and it is the main competitive differentiator against both reference competitors.

### Design

- **No theatre props.** The product names carry the metaphor. No curtains, masks, spotlights or clapperboards — it reads as kitsch and undercuts the credibility the support plans depend on.
- **No stock photography, no illustrated blobs, no 3D isometric servers.**
- **Dark is the default theme.** Light must work and must be tested.
- **Design and styling are ultimately Einar's call.** Propose and argue; do not treat your preferences as settled.

### Engineering

- **Keep it plain HTML/CSS/JS.** Do not introduce a framework, a build step or a dependency. This is deliberate.
- **JavaScript is optional.** Every page must be complete and readable with scripts disabled.
- **Respect `prefers-reduced-motion`.** All motion pauses off-screen and in background tabs.
- **Accessibility is not optional.** Semantic HTML, correct heading order, keyboard navigable, visible focus, WCAG AA contrast.
- **Verify, do not assume.** Check links resolve. Check pages render. Take screenshots and look at them. Do not report work as done based on intent.

---

## Current state

Nine pages, one stylesheet (~3,200 lines), one script (~200 lines), eight share cards. Eight commits, clean working tree, **not yet pushed**.

```text
/                              Homepage
/stack/                        The platform
/stack/the-cast/               The naming metaphor
/support/                      Plans, advisory, workshops
/about/                        Founders, community, values
/why-cratis/                   The competitive argument
/trust/                        Licence, security, continuity, governance
/writing/                      Index
/writing/vague-codebase-vague-code/   Flagship essay
```

**Homepage sequence:** hero (rotating word + orbit) → the shift → where it matters → customer logo band → "give it a vague plan and it builds vague software, faster" → the four-act production pipeline → business outcomes → how we help → Einar quote → audiences → testimonials → offerings → openness → Sindre quote → contact.

**Design tokens:** violet `#8b5cf6` primary; teal, amber and lime secondaries; ground `#08080e`; text `#f5f3f0`; Inter + Fraunces italic + JetBrains Mono.

**Rotating headline words:** `remembers, explains, proves it, holds up, evolves, answers`.

### Known placeholders — all deliberately guarded

Nothing invented can ship unnoticed. Each carries a visible amber ribbon, a `data-placeholder-guard` attribute and an HTML comment.

- **Six invented company names** in the logo band
- **Four invented testimonials** with invented people and job titles
- **Two founder quotes** written *in* Einar's and Sindre's voices — they have never said those words
- **Founder photographs** — initials stand in
- **Legal entity details** — missing from every footer, blocks launch

### Open questions worth your opinion

1. **Is "Software that *remembers*" the right flag to plant?** Everything hangs off it.
2. **Is the palette right?** Currently violet-primary with three secondary accents. The concept used four vivid colours; award research says two-colour palettes are winning. Where should this land?
3. **Is the homepage too long?** ~2,000 words, fifteen sections. What earns its place?
4. **Does the orbit work,** or is it generic? Every AI company has a glowing sphere.
5. **Is the tone right for a CXO** — or has it overcorrected into vagueness? "Not technical" must not become "says nothing".
6. **Is `/support` credible?** Public pricing, continuity clause above the price table.

---

## Known defects and requested changes

These came from the founders reviewing the live site. Each has been reproduced and root-caused where possible — the diagnosis is given so you do not have to rediscover it, but **verify before you trust it.**

Work through them in roughly this order: the two rendering bugs first (they are visible and embarrassing), then the palette question (it affects everything else), then the content changes.

---

### 1. The hero word gets stuck mid-transition, and the period wraps

**Severity: high — visible on the founders' own machine.**

Two separate faults in the same element.

**a) The word freezes blurred and invisible.** `assets/js/site.js` adds `.out` to the rotating word, then removes it in a `setTimeout` 340ms later. But the `IntersectionObserver` and the `visibilitychange` handler clear the *interval* — they do not cancel that pending timeout, and nothing re-runs it. If the reader scrolls away, switches tab, or the observer fires during that 340ms window, `.out` is never removed. The word stays at `opacity: 0` with `blur(7px)` permanently.

Reproduced: forcing `.out` and waiting shows `opacity: 0, filter: blur(7px)` still applied after 600ms.

**Fix direction:** make the swap self-healing rather than dependent on a timer surviving. Use `transitionend` with a timeout fallback, or drive the whole thing from CSS animations that cannot be orphaned, and always reset to a known-good state when the rotator resumes.

**b) The period wraps onto its own line.** The `.r` span currently produces **four client rects** at 1403px wide. The rotator is an `inline-block` whose width is animated in JavaScript, so the trailing `.` is free to break onto a new line — that is the stray dot floating below the headline in the founders' screenshot.

**Fix direction:** the word and its period must be an unbreakable unit. Consider `white-space: nowrap` on the line, wrapping word+period together, or reserving width for the longest word so the line box never reflows at all.

**Also check:** the hero's `min-height` is `min(92vh, 920px)`, which on a 763px-tall laptop viewport leaves very little room. Verify the whole hero — headline, subhead, buttons, fact strip — fits comfortably on a 13-inch MacBook without scrolling.

---

### 2. Light mode is weak, and the palette may be wrong overall

**Severity: high — this is the biggest single opportunity.**

The founders' words: *"The light mode is not good, does not fit at all. Maybe we want to look at the whole colouring palette? It still feels a lot like a developer tool, not a company and product branding site."*

**The reference they want to match is https://www.axoniq.io** — they like *"really smooth images and colours, very professional"* and essentially every aspect of that site.

This is not a tweak. Treat it as a real design question:

- The light theme is currently a mechanical inversion of the dark tokens. It was never designed. Decide whether light mode should exist at all — if it does, design it properly; if it does not earn its keep, removing it is a legitimate answer.
- Reconsider the whole palette. Currently violet `#8b5cf6` primary with teal, amber and lime secondaries on a near-black `#08080e` ground. Research says two-colour palettes are winning awards; the original concept used four. AxonIQ sits somewhere else again. **Form your own view and argue it.**
- The specific charge is that it reads as a *developer tool*. Work out what is causing that — the near-black ground, the mono labels, the hairline grids, the glow treatment — and decide what to keep, because some of it is genuinely good.

---

### 3. Adopt AxonIQ's logo-band treatment

The founders like the existing logo marquee **and** want AxonIQ's version of it: *"the company logo scrolling banner is perfectly sized and really really smooth"*, with a supporting line beside it — theirs reads *"Powering mission-critical software across global organizations."*

Study the real thing: sizing, speed, spacing, masking, and how the side text is positioned relative to the scroll.

Note the current logos are six invented company names behind a placeholder guard. **Improve the treatment; do not remove the guard.**

---

### 4. Add a primary conversion CTA in the AxonIQ mould

The founders specifically like AxonIQ's **"Start Free Today"** button and want an equivalent.

For Cratis that might be a free Cratis Studio trial, or simply getting started immediately. Their instruction: *"something that makes sense there and funnels people in, maybe not have the developer angle."*

Today the primary CTA is *"Talk to us"* — a high-friction ask that suits a two-person consultancy but gives a curious visitor nothing to do right now. Design a low-friction first step that does not route everyone into a sales conversation. **Do not invent a product tier or a trial that does not exist** — if there is nothing free to offer yet, say so and propose what it should be.

---

### 5. Rewrite the "how we help" headline — it does not scale

Current: *"You are not buying software from us. You are getting the two people who built it."*

Founders' verdict: *"a bit awkward and really not scalable."*

They are right. It hard-codes headcount into the value proposition, so it breaks the day a third person joins, and it centres the company rather than the customer's problem.

**Do the research.** Look at how JasperFX frames the same offer — *"an ongoing relationship with the team that builds and maintains it"* — and at how professional services firms sell expertise without selling headcount. The underlying truth is good (direct access to the people who built it, no triage tier); the expression is not. Lead with **what you can help with**, not with how many people there are.

---

### 6 & 9. Giant circles appear over card text on hover

**Severity: high — reproduced and root-caused.**

A real CSS collision. `.offer.featured::after` is the *"Most teams start here"* badge — a small pill with `border-radius: 999px`, positioned `top: 18px; right: 18px`. The later polish pass then declared `.card::after, .offer::after, .person::after { inset: 0 }` as a full-bleed hover overlay.

Because both target the same pseudo-element, the featured card's badge inherits `bottom: 0` and `left: 0` from the overlay rule while keeping its `999px` radius — it stretches to the full card height and renders as a huge circle over the text.

Verified: the featured offer's `::after` computes to `inset: 18px 18px 0px 0px` with `border-radius: 999px`.

**Fix direction:** stop overloading one pseudo-element for two purposes. Move the hover sheen to `::before`, or give the badge a real element. **Then audit every other `::after` in the stylesheet for the same pattern** — the founders report seeing it in more than one place, and the same collision may exist on `.card` and `.person` variants.

---

### 7. Soften the numbers block

The "how we work" numbers (`100%` open source, `0` people in between, `2` founders) are currently `clamp(56px, 9vw, 132px)` at weight 400 — the founders find them *"too in your face"*.

They want them **animated** — counting up on scroll — and generally more refined.

Consider whether 132px is right at all. The award research showed monumental type belongs below the fold, which this is, but the specific execution here is shouting rather than confident. Any count-up must respect `prefers-reduced-motion` and must not leave a `0` visible if the animation never runs.

---

### 8. The footer tagline is inaccurate and undersells the platform

Current, in the footer of **all nine pages** plus the homepage JSON-LD:

> "The event-sourced application platform for .NET. Open source, MIT licensed, developed in the open."

This is a survivor from an earlier, developer-facing draft and it now **contradicts the homepage**, which no longer mentions .NET or event sourcing at all.

It is also factually narrow. .NET is the first-class experience, but the platform is **language-agnostic and database-agnostic** — Chronicle speaks an open protocol with clients in several languages, and runs on the major databases an organisation already operates.

The founders' point: *"that is quite an offering — a system that fits most systems and tech"* — and it should be expressed elegantly rather than as a technical footnote.

**Fix everywhere it appears:** nine footers, plus the `<meta name="description">` and JSON-LD `description` on the homepage. Grep for `event-sourced application platform`.

---


---

### 10. Is the homepage too long?

The founders are genuinely undecided: *"might be too long, but I also like it at the same time."*

It is currently ~2,000 words across fifteen sections. **Research and form a view.** Look at what AxonIQ actually does — count their sections and their word count — and at the award-winning references. Then either defend the current length or propose specific cuts.

The section most likely to be redundant is *"Different questions, same platform"* (the three audience cards), which overlaps with the business outcomes above it. But check that judgement rather than accepting it.

---

## What to do

1. **Look at the site first.** Full first impression, before any code. Write down what you feel in the first ten seconds — that is the most valuable data in this review and you cannot recover it later.
2. **Read `AGENTS.md`, `BRAND.md` and `MESSAGING.md`.**
3. **Open the concept file** at `reference/design-concept.html` and compare.
4. **Look at the reference sites** — AxonIQ, JasperFX, and current Awwwards technology winners.
5. **Review against the audience test.** Would a CXO come away with the five reactions listed above? Where does it fail?
6. **Work the known defects** (previous section). The two rendering bugs are visible and should go first; the palette question affects everything else and deserves real thought before you touch it.
7. **Report honestly**, then propose changes in priority order — highest impact first.
8. **Make improvements** where you are confident. Flag anything requiring a founder decision rather than deciding it yourself.

**On the AxonIQ reference:** the founders like that site a great deal and cite it repeatedly — the colours, the smoothness, the logo band, the CTA, the professionalism. Study it properly rather than glancing at it. Take its craft and its structure; do not take its adjectives, and do not make Cratis a copy of it. Cratis is smaller, more open, and more honest, and the site should feel like that.

Work page by page. Ship one finished improvement rather than five started ones. Verify what you change, take screenshots and look at them, and be explicit about anything you could not check.
