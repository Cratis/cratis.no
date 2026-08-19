# PAGES.md — Page blueprints for cratis.no

Every page, every section, with the actual words. Read `AGENTS.md` and `SITE.md` first.

**How to use this file.** Each section gives a **purpose** (why it exists — cut the section if you can't answer this), the **copy** (use verbatim unless marked DRAFT), and **build notes**. Copy marked `<!-- NEEDS FACT -->` must not be invented.

---

# 1. `/` — Homepage

**Job:** a staff engineer understands Cratis in ten seconds and wants to keep reading.
**Meta title:** `Cratis — The event-sourced application platform for .NET`
**Meta description:** `Model your domain, and the model becomes the running system. Event-sourced .NET with typed contracts from C# to React. MIT licensed. Built by the people who answer your questions.`

Nine sections. Not ten.

---

## 1.1 Hero

**Purpose:** the ten-second test. Everything else on the site is downstream of this.

```text
EYEBROW    THE EVENT-SOURCED APPLICATION PLATFORM FOR .NET

H1         The model is the system.

LEAD       Event-sourced .NET, modelled end to end — from the canvas,
           to the running app, to the history behind it.

BUTTONS    [ Get started ↗ ]   [ Why Cratis → ]

STRIP      MIT licensed  ·  MongoDB, PostgreSQL, SQL Server or SQLite
           ·  .NET, TypeScript, Kotlin and Elixir clients
```

**Build notes**

- Left-aligned, not centered. Headline max two lines at every breakpoint.
- `Get started ↗` → `https://cratis.io/chronicle/get-started/` (external marker).
- `Why Cratis →` → `/why-cratis`.
- Credibility strip in `--text-faint`, `--step--1`. These are facts, not features — that's the point.
- One subtle radial glow behind. That is the entire atmosphere budget.
- **No product screenshot here.** The proof comes in §1.5, once the claim has been made.

---

## 1.2 Three commands

**Purpose:** prove it's real and low-friction before asking anyone to read an argument. Engineers trust a command more than a paragraph.

```text
H2      Three commands to a full-stack app.

CODE    dotnet new install Cratis.Templates
        dotnet new cratis -n MyApp --allow-scripts Yes
        cd MyApp && docker compose up -d && dotnet run

CAPTION Chronicle, Arc and a React frontend, wired together.
        Nothing to bolt on afterwards.
```

**Build notes**

- Copy button on the block. It will be used.
- Verified against `cratis.io` — do not alter the commands.
- Full-bleed dark panel (`--bg-sunken`) so it reads as a distinct beat.

---

## 1.3 The problem

**Purpose:** name the pain before naming the product. This is the pain→relief rule, and it's the section that earns the right to the rest of the page.

```text
EYEBROW  THE PROBLEM

H2       Your architecture is in a diagram. Your truth is in a row.

BODY     The design lives on a whiteboard that stopped being accurate in
         month three. The behaviour lives across four folders in four
         layers. The state lives in a row that has forgotten how it got
         that way.

         Every one of those gaps is a place where what you meant and what
         runs quietly diverge.

         Then you point an assistant at it. It doesn't fail loudly — it
         guesses, plausibly, at speed.

PULL     Give it a vague codebase and it produces vague code, faster.
```

**Build notes**

- The pull-quote uses `<Statement>` — large, `--step-2`, accent left rule.
- **This is the most important paragraph on the site.** It is the line that will get quoted. Give it room.
- Resist adding an illustration. The words are doing the work.

---

## 1.4 The answer

**Purpose:** four concrete moves. Not benefits — mechanisms. A senior engineer discounts benefits and trusts mechanisms.

```text
EYEBROW  THE ANSWER

H2       One model, all the way down.

  01  Model it where everyone can see it.
      Commands, events and read models on a shared canvas — not a sketch
      you translate afterwards, but the slice, drawn.

  02  Record what happened, not what's left.
      Chronicle stores immutable facts and derives read models from them.
      Audit isn't a feature you add later; it's what the storage layer
      already is.

  03  Carry one contract to the screen.
      Arc generates the TypeScript your React app calls. Rename a property
      in C#, and the frontend stops compiling until you fix it.

  04  Give the agent the same rails.
      Analyzers, .ai skills and an MCP server into the live store — so an
      assistant builds with the grain of the framework instead of guessing
      at it.

PULL  Nothing in that list is a thing you keep in sync. The build does.
```

**Build notes**

- Numbered, single column, generous spacing. **Not a four-up card grid** — cards flatten these into equal-weight features, and they aren't equal weight. They're a sequence.
- Numerals in `--accent`, mono, large.

---

## 1.5 The proof — `ModelToSystem`

**Purpose:** demonstrate the one claim no competitor can make. Everything above is assertion; this is evidence.

```text
EYEBROW  THE DIFFERENCE

H2       Most tools generate code from your model.
         Ours runs the model.

LEAD     Generated code drifts from the model the moment someone edits it.
         Stage doesn't generate anything — it performs the model directly,
         so there is nothing to drift.

[ ModelToSystem component — see SITE.md §5.3 ]

CAPTION  The same model, four ways. Stage runs it — nothing is generated,
         so nothing can drift.
```

**Build notes**

- Widest section on the page (`--measure-wide`), `--bg-raised`.
- Phase 1 ships a **static** four-panel version. Phase 7 makes it interactive.
- The headline is a direct, deliberate contrast with AxonIQ's Dev Agent. It names no competitor — the reader who knows the market will make the connection, and the reader who doesn't still understands the point.

---

## 1.6 The products

**Purpose:** three names, not nineteen. Establish the shape of the stack.

```text
EYEBROW  THE STACK

H2       Three products, one grain.

CARD 1   CHRONICLE — the event store
         Records what happened. Projections, reducers, reactors,
         constraints and replay over MongoDB, PostgreSQL, SQL Server or
         SQLite. gRPC at the boundary, with .NET, TypeScript, Kotlin and
         Elixir clients.
         → Chronicle docs

CARD 2   ARC — the full-stack CQRS framework
         Turns behaviour into a typed application. Commands and queries
         become HTTP endpoints and generated TypeScript proxies, with
         identity, tenancy, authorization and React components included.
         → Arc docs

CARD 3   STUDIO — the modelling surface
         Where the model is designed — and run. Model on the canvas, write
         it as a Screenplay script, and let Stage perform it live. Bring an
         existing system in with Prologue.
         → Studio        [ Coming soon ]

FOOT     Use them together, or use one on its own. Chronicle never knows
         Arc exists.  →  See the whole stack
```

**Build notes**

- The Studio card carries a `Coming soon` pill in `--signal`. **Do not hide the status.** Honesty is the brand, and a discovered overclaim costs more than the card gains.
- The footer line is the anti-lock-in message. Keep it.

---

## 1.7 The code

**Purpose:** show, don't tell. This is the section that converts a skeptical engineer.

```text
EYEBROW  ONE SLICE

H2       You write the behaviour once.

TABS     [ C# — the slice ]  [ React — the screen ]
```

C# tab:

```csharp
// Command, event, and read model for one feature — in one file.
[Command]
public record RegisterAuthor(AuthorId Id, AuthorName Name)
{
    public AuthorRegistered Handle() => new(Name);   // returns the fact that happened
}

[EventType]
public record AuthorRegistered(AuthorName Name);

[ReadModel, FromEvent<AuthorRegistered>]
public record Author(AuthorId Id, AuthorName Name)
{
    // This static method *is* the query — exposed over HTTP automatically.
    public static Task<IEnumerable<Author>> AllAuthors(IReadModels readModels) =>
        readModels.Materialized.GetInstances<Author>();
}
```

```text
CAPTION  Arc generates the TypeScript proxies. The React side can't drift —
         rename a property in C#, rebuild, and the frontend stops compiling
         until you fix it.
```

**Build notes**

- C# sample is taken verbatim from cratis.io. **Do not modify it.**
- The React tab needs the matching frontend snippet — pull it from the docs, don't write one. Mark `<!-- NEEDS FACT: React snippet from cratis.io homepage -->` if unavailable.
- Syntax highlighting via Astro's built-in Shiki. Theme must match the docs site.

---

## 1.8 Who we are

**Purpose:** the company promise. This is the asymmetric advantage over any vendor with a sales team — and it belongs above the fold of the decision, not buried in `/about`.

```text
EYEBROW  THE COMPANY

H2       Built by the people who answer your questions.

BODY     We're small. That's deliberate, and it's the point: the person
         replying in Discord is the person who wrote the line you're asking
         about. No account manager, no tier-one triage, no discovery call
         before you get a straight answer.

         We publish what we're building. We say when something isn't ready.
         And we'll tell you when Cratis is the wrong fit — which is worth
         more to both of us than a year of a licence you regret.

LINKS    [ Work with us → ]  [ Support plans → ]  [ Join the Discord ↗ ]
```

**Build notes**

- Two founder photographs, real, well shot, side by side. No stock, no avatars.
- `<!-- NEEDS FACT: founder photos, names, one-line bios -->`

---

## 1.9 Where to start

**Purpose:** three routes out, matched to three intents. A single CTA loses two of the three visitors.

```text
H2   Start where it makes sense.

  Just looking?
  The getting-started walkthrough takes one event through a projection
  and a reactor.                                    → Get started ↗

  Already have a system?
  Prologue captures what it actually does and interprets it into an
  event model.                                      → Prologue ↗

  Not sure it fits?
  Book a Fit Review. Ninety minutes, free, and we'll tell you honestly
  if the answer is no.                              → Book a Fit Review →
```

---

# 2. `/support` — Support plans

**Job:** convert a team that already uses Cratis into a paying customer, and give an architect the written answers their review demands.
**Meta title:** `Support plans — Cratis`
**Meta description:** `Support plans for teams running Cratis in production. Advisory hours, guaranteed response times, and a written continuity clause. From $4,500/year.`

> **⚠ BLOCKED — see `POLICIES.md` §0.** This page cannot ship as specified. The plan table below promises "LTS branch & backports", and an audit of all eleven repositories found **no maintenance branch has ever existed** and no older major has ever received a fix after its successor shipped. Either the release process changes first, or that row comes out. Do not publish this page until `POLICIES.md` §3 decision 1 is resolved.

**Section order is fixed: Hero → the honest thing → plans → detail → FAQ → CTA.**

---

## 2.1 Hero

```text
H1    Depend on it with someone behind you.

LEAD  Cratis is MIT licensed and always will be. A support plan isn't
      access to the software — it's an ongoing relationship with the people
      who build it, and a written answer to the questions your architecture
      review will ask.
```

---

## 2.2 The continuity clause — before the price

**Purpose:** answer the unspoken objection before asking for money. This is the most valuable copy on the entire site, and its position is the whole point.

```text
CALLOUT (variant: honest)

H2    First, the question you were going to ask anyway.

Q     What happens if we stop?

BODY  Everything you depend on is MIT licensed and published on GitHub.
      Chronicle's kernel boundary is gRPC and protobuf. The storage schemas
      are documented. The clients for .NET, TypeScript, Kotlin and Elixir
      are all open source. There is no licence server, no phone-home, and
      no proprietary format holding your data.

      If Cratis ceased to operate tomorrow, you would keep the source, the
      protocol, the schemas, the tooling, and the right to fork — with
      nothing to renew and nothing to migrate off.

      Every support plan additionally guarantees a ninety-day wind-down
      with handover documentation.

      We think that makes us a lower-lock-in choice than most vendors ten
      times our size. It's certainly a more honest one.
```

**Build notes**

- Full-width, bordered, `--bg-raised`. Visually distinct from the surrounding page.
- **Never move this below the pricing table.** Leading with the caveat is the differentiator.
- Anchor `#continuity` — this will get linked directly.

---

## 2.3 The plans

`PlanTable` from `src/data/plans.ts`. Values from `BRAND.md` §6.2.

| | Community | Essential | Professional | Enterprise |
| --- | --- | --- | --- | --- |
| | Free | **$4,500/yr** | **$14,000/yr** | **from $34,000/yr** |
| For | Anyone | A team putting Cratis into production | A product depending on it | Mission-critical or regulated |
| Advisory hours | — | 10 | 30 | 70 |
| Response, critical | — | 2 business days | 1 business day | 4 business hours |
| Critical incidents | — | 2 | Unlimited | Unlimited |
| Design questions | Discord | 5/yr | Unlimited | Unlimited |
| Private channel | — | ✓ | ✓ | ✓ |
| Private issue board | — | — | ✓ | ✓ |
| Named architect | — | — | — | ✓ |
| Onboarding | — | 1 hour | 2 hours | Half day |
| Workshop day | — | — | 1 | 2 |
| Quarterly model review | — | — | — | ✓ |
| ~~LTS branch & backports~~ | — | — | ✓ | ✓ |
| Roadmap input | Public | Public | Prioritised | Prioritised + briefing |
| Continuity clause | — | ✓ | ✓ | ✓ + escrowed keys |

⚠ **The LTS row is struck through because it is not deliverable today.** Remove it, or make it real first — see `POLICIES.md` §0.

**Build notes**

- Prices in `--signal`, mono, large.
- Mobile: horizontal scroll with a sticky first column. **Never** collapse to stacked cards — the comparison is the value.
- Each column ends with `[ Talk to us ]` → `/contact?plan=essential` etc.

---

## 2.4 What the words mean

**Purpose:** remove ambiguity before it becomes a support dispute, and demonstrate that the terms are real.

```text
What "advisory hours" means.
Not break/fix. Architecture questions, model reviews, consistency boundary
decisions, tenancy design, migration paths, performance work, and second
opinions before you commit to something expensive to change.

What a critical incident means.
A production-blocking issue where Cratis is not behaving as documented.

What isn't in a plan.
General .NET or React consultancy, and feature development for your
product. For scoped work, see Advisory.

Not ready for a plan?
The Discord is free, public, and usually faster. That's not a consolation
prize — it's where most questions get answered.
```

---

## 2.5 FAQ

Use `MESSAGING.md` §9 verbatim. Minimum set:

- You're two people. What happens if you stop?
- What counts as a critical incident?
- Do unused advisory hours roll over? `<!-- DECISION NEEDED -->`
- Can we buy a single workshop without a plan? *(Yes — see Services)*
- Do you sign our MSA / DPA / security questionnaire? `<!-- DECISION NEEDED -->`
- How do we pay? `<!-- DECISION NEEDED: invoice vs card -->`

---

## 2.6 CTA

```text
H2    Start with a conversation.

BODY  Tell us what you're building, which parts of Cratis you use, and
      what kind of help you need. We'll come back on whether we can help,
      what shape it would take, and when we could start.

CTA   [ Get in touch → ]
```

---

# 3. `/services` — Advisory

**Job:** sell fixed-scope engagements without a sales call.
**Meta title:** `Advisory and consulting — Cratis`
**Meta description:** `Fixed-scope, fixed-price engagements: architecture review, model sprint, first slice, Prologue discovery. Start with a free 90-minute Fit Review.`

## 3.1 Hero

```text
H1    Get the model right the first time.

LEAD  The first slices set the pattern everything after them copies.
      Consistency boundaries are cheap to change now and expensive to
      change later.

      Every engagement is fixed in scope, fixed in price, and named in
      outcome. You'll know what you're getting and what it costs before
      you commit to anything.
```

## 3.2 Start here

```text
CALLOUT  Start with a Fit Review — ninety minutes, free, and we'll tell you
         plainly whether we can help. If the answer is no, we'll tell you
         what we'd do instead.

         [ Book a Fit Review → ]
```

## 3.3 The catalogue

`EngagementCard` grid from `src/data/engagements.ts`. Values from `BRAND.md` §6.3.

| Engagement | Duration | Price | You leave with |
| --- | --- | --- | --- |
| Fit Review | 90 min | Free | An honest yes/no, and what we'd do instead if no |
| Architecture Review | 1 week | $7,500 | Written review: model, consistency boundaries, tenancy, storage, failure modes — risks ranked, fixes named |
| Model Sprint | 3 days | $12,000 | An event model the team agrees on, and the first three slices specified |
| First Slice | 2 weeks | $25,000 | One production-shaped vertical slice built with your team |
| Prologue Discovery | 2 weeks | $22,000 | Your existing system captured into an event model, plus a sequenced adoption plan |
| AI-Ready Foundations | 1 week | $9,000 | Conventions, analyzers and `.ai` rails set up so agents build to your standards |
| Production Readiness | 1 week | $7,500 | A checked list of what must be true before go-live |

**Build notes**

- Each card: name, duration pill, price in `--signal`, the deliverable, `[ Enquire → ]`.
- **Prices are published.** This is deliberate — see `SITE.md` §10 decision 2.

## 3.4 When we're not the right fit

```text
H2    When we're not the right fit.

LEAD  Being direct about the limits saves everyone a meeting.

  The question can be answered in public.
  The Discord is free, open, and usually faster.

  You want a general .NET or React consultancy.
  We work on the model, the stack, and the architecture around them.

  You want us to build your product.
  We'll build the first slice with your team, and teach them the pattern.
  We won't be your development department.

  You found a vulnerability.
  Use responsible disclosure instead.  → Security
```

---

# 4. `/services/workshops`

**Meta title:** `Workshops — Cratis`
**Meta description:** `Two-day workshops on event modelling, event sourcing with Chronicle, and full-stack Cratis. Built around your domain, not a generic deck. Public cohorts quarterly.`

## 4.1 Hero

```text
H1    The syntax is learnable in a week.
      The modelling is the part worth teaching.

LEAD  Most teams don't struggle with Cratis. They struggle with deciding
      what an event is, where a consistency boundary belongs, and which
      read models are worth having.

      Our workshops are built around your codebase and your domain — not
      a generic deck we run for everyone.
```

## 4.2 The catalogue

| Workshop | Length | Price |
| --- | --- | --- |
| Event Modelling in Practice | 2 days | $8,500 |
| Event Sourcing with Chronicle | 2 days | $8,500 |
| Full-Stack Cratis: Arc, Components and the Typed Boundary | 2 days | $8,500 |
| Foundations (any single topic) | 1 day | $5,000 |

On-site: +$3,500 plus travel.

## 4.3 Format

```text
Remote, up to twelve people, two days by default. We work through your
domain, not a toy one. You leave with an event model your team agrees on
and the first slices specified — not just notes.

On-site is available. So is a one-day Foundations format when two days is
more than the calendar allows.
```

## 4.4 Public cohorts

```text
H2    Public workshops

BODY  Once a quarter we run an open cohort — fifteen seats, mixed teams,
      same format. It's the cheapest way to find out whether event
      modelling changes how your team thinks, before committing a whole
      team's calendar to it.

      $1,400 per seat.

NEXT  <!-- NEEDS FACT: next cohort date -->
      [ Join the waiting list → ]
```

**Build notes**

- If no date is set, show a waiting-list form rather than a fake date. **Never invent a date.**

---

# 5. `/trust`

**Job:** win the enterprise architecture review. Optimised to be *cited*, not read.
**Meta title:** `Trust — security, governance and continuity — Cratis`
**Meta description:** `Licence, security disclosure, versioning and LTS policy, governance, continuity commitments, and roadmap. Everything an architecture review needs, in one place.`

## 5.1 Hero

```text
H1    Everything your review will ask for.

LEAD  Licence, security, versioning, governance, continuity and roadmap —
      in one place, with anchors you can link to directly.
```

## 5.2 Sections

Each with a stable anchor:

| Anchor | Content | Source |
| --- | --- | --- |
| `#licence` | MIT. What that means. What is and isn't commercial. | Repo licences |
| `#continuity` | The full continuity clause, plus the ninety-day wind-down | `/support` §2.2 |
| `#security` | Disclosure process, contact, response commitment | cratis.io/security |
| `#versioning` | SemVer policy, what a breaking change is, maintenance lines, support windows | **`POLICIES.md` §1** — drafted, blocked on decision 1 |
| `#governance` | How decisions are made, how contributions are accepted, code of conduct | cratis.io/governance |
| `#roadmap` | What's being built, what's next, what's deliberately not planned | cratis.io/roadmap |
| `#dependencies` | What Cratis depends on, and what a customer must run | Docs |
| `#data` | What we collect (analytics), what we don't, sub-processors | `<!-- NEEDS FACT -->` |
| `#company` | Legal entity, registration, address, VAT | `<!-- NEEDS FACT -->` |

**Build notes**

- Dense and plain. **No marketing voice on this page** — it is a reference document and should read like one.
- Sticky table of contents on desktop.
- **The versioning/LTS policy is drafted in `POLICIES.md` §1 but must not be published yet.** It commits to a quarterly major cadence and a six-month support window, neither of which exists today. Publishing a policy you don't keep converts a vague concern into a documented broken promise.
- **Read `POLICIES.md` §0 before touching this page.** Chronicle has shipped six majors in ~17 months and Arc six in ~14. That story needs fixing at the source, not spinning here.

---

# 6. `/about`

**Meta title:** `About Cratis`
**Meta description:** `Cratis is built by two people who wanted software they'd be happy to inherit. Here's who we are, what we value, and what being small actually means for you.`

## 6.1 Opening

```text
H1    Two people, and the software we'd want to inherit.

BODY  Cratis started from a straightforward frustration: the tools were
      good, but you spent your life keeping them in sync with each other.
      The event store didn't know about the command boundary. The command
      boundary didn't know about the frontend. The frontend didn't know
      about anything, and the model that was supposed to tie it all
      together lived on a whiteboard.

      So we built the thing where the pieces agree.
```

## 6.2 The founders

Two `PersonCard`s. Real photos, real bios.
`<!-- NEEDS FACT: names, roles, bios, LinkedIn/GitHub -->`

## 6.3 Core team

**Purpose:** the highest-leverage credibility move available (`BRAND.md` §7.2). Community contributors, clearly framed as such.

```text
H2    Core team

LEAD  Cratis is built in the open, and these people shape it with us —
      through code, review, and telling us when we've got it wrong.
```

`<!-- BLOCKED: recruit 3–5 community members first. Do not ship an empty
     or one-person core team section — it reads worse than omitting it. -->`

## 6.4 We're small

```text
H2    We're small. Here's what that actually means.

What you get.
The person answering your question wrote the code. No triage tier, no
account manager, no ticket that gets escalated to someone who has to read
the source for the first time.

What we do about the rest.
Everything is MIT and public. There's a published roadmap, a versioning
and LTS policy, a security disclosure process, and a written continuity
clause in every support plan. Not because we plan to disappear — because
you shouldn't have to take our word for it.

What we won't do.
Pretend to be bigger than we are. You can count us, and you should be
able to.
```

## 6.5 Values

```text
H2    What we build towards

Empathy.          Understanding who we're building for — an API consumer,
                  a teammate, an end user — is the whole job.
Simplicity.       The internals can be complex. The surface you touch
                  shouldn't be.
Readability.      Code is read far more than it's written. We're not
                  trying to save keystrokes.
Predictability.   Surprises belong to birthdays, not in code.
Testability.      Specs are how a system explains itself to the next person.
Automation.       If a computer can do it, make it do it.
```

---

# 7. `/why-cratis`

**Job:** the evaluator's page. Long, honest, comparative.
**Meta title:** `Why Cratis — and when it's the wrong choice`
**Meta description:** `How Cratis compares to assembling libraries yourself or adopting an enterprise event platform — including the cases where you should choose something else.`

## Sections

1. **Hero** — `The honest version.` / *"You're comparing options. Here's where we're genuinely different, where we're not, and when you should pick something else."*
2. **Instead of / you get** — the `Comparison` table from `BRAND.md` §4.2 Pillar 1
3. **The four pillars** — one model end to end · a history you can question · rails an agent can follow · open at every boundary
4. **Coming from libraries** — the JasperFX battlecard, `BRAND.md` §12. **Concede first and sincerely.** Include *"When to use Marten instead"* as a real subsection.
5. **Coming from an enterprise platform** — the AxonIQ battlecard
6. **When Cratis isn't the right fit** — verbatim from cratis.io

**Build notes**

- **Never disparage a competitor.** The JasperFX section must praise Marten specifically and by name, and recommend it where it genuinely wins. This costs a small number of deals and buys the community standing that is the only distribution a two-person company has.
- No competitor logos.

---

# 8. `/stack` and `/stack/the-cast`

## 8.1 `/stack`

The three products in one narrative, with the honest dependency story: *"The dependency only runs one way. Arc can sit on top of Chronicle; Chronicle never knows Arc exists."* Include the "use them on their own — or together" table from cratis.io. Every deep link goes to the docs.

## 8.2 `/stack/the-cast`

**Purpose:** shareable asset. Cratis has a coherent ten-product metaphor and no page presenting it — this is the kind of page that gets posted.

Copy: `MESSAGING.md` §4, verbatim.

**Build notes**

- Typographic treatment only. **No illustrations, no theatre props.** The names carry it.
- The closing paragraph — *"The metaphor isn't decoration. The file extension is `.play`."* — is the payoff. Give it space.
- Good OG image candidate.

---

# 9. `/contact`

```text
H1    Start with a conversation.

LEAD  You don't need a finished design or an approved budget. Tell us
      what you're working on and we'll tell you honestly whether we can
      help.

FORM  What you're building or evaluating
      Which Cratis products you use, or expect to
      Greenfield, brownfield, or already in production
      What kind of help: modelling · review · development · training ·
        troubleshooting · support plan
      Rough timeframe
      Does this need to be private?
      Email

ASIDE Prefer email? oss@cratis.io — subject line starting
      "Working with Cratis".

      Just have a question? The Discord is free and usually faster.
```

**Build notes**

- Static form → Formspree, Netlify Forms, or a `mailto:` with a prefilled body. **No backend.**
- Prefill the "kind of help" field from `?plan=` and `?engagement=` query params.

---

# 10. `/blog`

Chronological, no categories until there are twenty posts. Author, date, reading time.

**First three posts, in order:**

1. **"Give it a vague codebase and it produces vague code, faster."** — the flagship. Carries the whole thesis, timely, will travel.
2. **"The model is the system: why we run models instead of generating code."** — the Stage differentiator, argued properly.
3. **"What we tell teams who ask whether they should use Marten instead."** — generous, honest, wins community standing.

**Cadence:** two per month. Engineering-led, not marketing-led. A quiet blog is worse than no blog.

---

# 11. `/customers`

**BLOCKED until three real named production users exist.**

Do not build a placeholder. Do not pad with community projects presented as customers. An empty or inflated showcase is actively worse than no page — and on this brand specifically, it would contradict the thing being sold.

When unblocked: name, one-paragraph description of what they built and what changed, logo with permission, and a direct quote where offered.

---

# 12. Content that must be written but does not exist yet

Flag all of these to the founders. **None can be invented.**

| Artefact | Needed for | Priority |
| --- | --- | --- |
| Versioning & LTS policy | `/trust`, `/support` | **Highest** — drafted in `POLICIES.md` §1, but blocked on a real release-process change first |
| A real maintenance branch, proven once | `/support` plan table | **Blocking** — the LTS row is currently unsellable |
| One retrospective upgrade guide (Arc v20→v21) | `/trust`, credibility | High — proves the commitment is real |
| Support plan T&Cs | `/legal/terms` | High — procurement needs a document |
| Legal entity details | Footer, `/trust` | High — blocks launch |
| Founder photos + bios | `/about`, homepage | High |
| Privacy policy | `/legal/privacy` | Required |
| Next public workshop date | `/services/workshops` | Medium |
| Three named customers | `/customers` | Medium — unblocks the strongest proof on the site |
| Core team members | `/about` | Medium — highest credibility-per-effort item in `BRAND.md` |
| React snippet for §1.7 | Homepage | Low — pull from docs |
