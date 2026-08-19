# Cratis — Brand & Positioning Strategy

**Status:** Strategy v1 · Prepared for the Cratis founders
**Scope:** Company positioning, brand architecture, messaging system, commercial offering design, verbal & visual identity, go-to-market sequencing.

---

## 0. Executive summary

**The finding.** Cratis has a genuinely rare asset that neither of its reference competitors possesses: a coherent path from *a model people agree on* to *a system that runs* to *a history you can question* — and the whole path is legible to AI agents. JasperFX sells excellent libraries. AxonIQ sells an enterprise platform. Nobody sells **the model as the running system**.

**The problem.** That asset is currently invisible, because it is spread across nineteen product names, three domains, and a metaphor that is documented only inside individual READMEs. A visitor cannot tell in ten seconds what Cratis is. Sophistication is being read as sprawl.

**The recommendation.**

1. **Own the category of coherence, not the category of event sourcing.** Event sourcing is the mechanism, not the promise. The promise is: *the model is the system.*
2. **Collapse the public brand to three products** — Chronicle, Arc, Studio — with everything else positioned as a capability inside them or as "Tools". Keep all nineteen repos. Stop marketing nineteen products.
3. **Split the metaphor from the money.** Theatre names for craft; plain, procurement-grade names for commercial offerings.
4. **Manufacture institutional weight through operational maturity, not headcount claims.** SLAs, LTS policy, continuity clauses, a named core team, a public roadmap and governance. This is exactly how JasperFX projects a company around two-and-a-half people — and it is honest.
5. **Productise the services.** Fixed-scope, fixed-price, named engagements. This is the only way two people sell consulting at scale without being consumed by it.

---

## 1. Where Cratis actually sits

### 1.1 The two reference points, read accurately

**JasperFX / Critter Stack** — *"Tools that Get Out of Your Way."*
Library-level. Postgres-centric, .NET-only, backend-only. Personality-led (Jeremy Miller). Marten has 15.7M downloads and eleven years of history. Sells consulting, support plans ($3k / $6k / $15k per year), workshops, and one commercial product (CritterWatch). Brand virtues: battle-hardened, low ceremony, humane. Brand limits: no design surface, no frontend story, no runtime platform, no polyglot boundary. Their AI claim is passive — *"our code is clean, so AI writes it well."*

**AxonIQ** — *"Explainable AI infrastructure."*
Platform-level. Java-only. Fifteen years, Fortune 100 logos, regulated industries. Framework + Server + Insights + Agents. Pricing from $150/mo to enterprise. Brand virtues: institutional gravity, a genuinely modern AI-era narrative (explainability, agent memory, audit-as-query). Brand limits: heavy, expensive, sales-led, Java, and their Discovery/brownfield product is still in private preview.

### 1.2 The gap Cratis occupies

| | JasperFX | AxonIQ | **Cratis** |
| --- | --- | --- | --- |
| Shape | Libraries | Enterprise platform | **Platform, adopted like libraries** |
| Runtime | .NET | Java | **.NET, with TS / Kotlin / Elixir clients** |
| Frontend | — | — | **Typed C# → TypeScript → React, compiler-enforced** |
| Design surface | — | Dev Agent (generates code) | **Studio → Screenplay → Stage (runs the model)** |
| Brownfield on-ramp | — | Discovery (private preview) | **Prologue (shipping, v2)** |
| Storage | Postgres, SQL Server, SQLite | Axon Server | **Mongo, Postgres, SQL Server, SQLite** |
| AI posture | "clean code helps AI" | "AI explainability infrastructure" | **Rails agents can follow, plus MCP into the live store** |
| Buying motion | Self-serve + support plans | Enterprise sales | **Self-serve + support plans** |
| Feel | Craftsman's workshop | Institution | **Small studio with a real ecosystem** |

Cratis has **AxonIQ's ambition on JasperFX's terms.** That is the sentence the whole brand has to earn.

### 1.3 The one claim only Cratis can make

AxonIQ's Dev Agent *generates* code from user journeys — a one-way door; the model and the code diverge from the first commit. Cratis Stage **interprets the model at runtime**: *"No code generation, no compilation: the model is the application."*

That is not a marketing nuance. It is a category-defining difference, and it is the single most valuable unclaimed piece of ground in this market. **Take it.**

---

## 2. Positioning

### 2.1 Positioning statement (internal, not for publication)

> For .NET teams building information systems that have to survive a decade of change, **Cratis** is an event-sourced application platform where **the domain model is the running system** — from a shared modelling canvas, through typed full-stack slices, to a history you can question — so that developers and AI agents build against the same conventions, and the system can always account for what it did.
>
> Unlike **libraries you assemble yourself**, the layers are designed as one thing. Unlike **enterprise event platforms**, you can adopt it on a Tuesday afternoon and reach the people who built it on Discord.

### 2.2 Three candidate brand territories

**Territory A — THE MODEL IS THE SYSTEM** *(recommended)*
The idea: the gap between what the team designed and what the software does is where projects die. Cratis closes it structurally.
Owns: coherence, Studio/Screenplay/Stage, the vertical slice, the typed proxy boundary, event modeling.
Defensibility: **very high.** Neither competitor can say it. JasperFX has no model layer at all; AxonIQ generates code and therefore drifts.

**Territory B — SYSTEMS THAT CAN ACCOUNT FOR THEMSELVES**
The idea: memory, audit, explainability, "how did we get here?"
Defensibility: **low as a headline.** AxonIQ has spent fifteen years and a Fortune 100 customer list on exactly this ground, and now brands itself "explainable AI infrastructure." Fighting there is fighting uphill against their proof.
→ **Use as a pillar, not as the flag.**

**Territory C — BUILT FOR HOW SOFTWARE IS WRITTEN NOW**
The idea: AI writes a growing share of the code; it is only as good as the structure it works inside.
Defensibility: **medium, and decaying.** Every framework will claim this within eighteen months. Cratis's version is unusually concrete (analyzers, `.ai` skills, MCP into the live store, LLM-shaped CLI output) — but the claim itself is becoming table stakes.
→ **Use as a pillar and as the reason-to-act-now.**

**Recommendation: lead with A. Support with B and C.** A is the only ground that is both true and uncontested.

### 2.3 The category line

Do not say "event sourcing framework." That puts Cratis in a bake-off with Marten on Marten's terms, on Marten's proof, and loses.

Say:

> **The event-sourced application platform for .NET.**

"Application platform" claims the full-stack scope. "Event-sourced" names the mechanism honestly. ".NET" qualifies fast and repels bad-fit traffic — a feature, not a bug.

### 2.4 Brand line

**Recommended:**

> ## The model is the system
>
> *Event-sourced .NET, modelled end to end — from the canvas to the running app to the history behind it.*

The line is short, ownable, memorable, and — uniquely — **literally true of the product**, because Stage runs the model. Brand lines that are literally true age extremely well.

**Runners-up, for campaign and section use:**

- *Build the system you modelled.* — already in use; excellent as a product-level line for Arc/Studio.
- *Nothing in this list is a thing you keep in sync. The build does.* — already in the docs; the single best sentence Cratis has written. Promote it.
- *Software that can answer for itself.* — reserve for the compliance/audit pillar.
- *Write it once. It runs, it records, and it can explain itself.* — long-form hero subhead.

**Reject:** anything built on "productivity", "simple", "modern", "developer-first", or "10x". All unownable.

---

## 3. Brand architecture

### 3.1 The problem, stated plainly

Nineteen public names is a portfolio a hundred-person company would struggle to communicate. For two people it reads as unfocused — *"they build a lot of things"* rather than *"they build one thing extremely well."* Every additional name divides attention, dilutes SEO, and raises the buyer's perceived integration risk.

**Brand architecture is not repo architecture.** Keep every repository. Reduce the marketed surface.

### 3.2 Recommended structure

```text
CRATIS  ·  the company, the stack, the people
│
├── THE STACK  (the marketed product surface — three names)
│   │
│   ├── CHRONICLE   The event store.
│   │               "Records what happened."
│   │               → storage backends, namespaces, projections, reducers,
│   │                 reactors, constraints, replay, Workbench, MCP server,
│   │                 .NET / TypeScript / Kotlin / Elixir clients
│   │
│   ├── ARC         The full-stack framework.
│   │               "Turns behaviour into a typed application."
│   │               → commands, queries, proxy generation, tenancy, identity,
│   │                 authorization, Components (React), AuthProxy (edge)
│   │
│   └── STUDIO      The modelling surface.
│                   "Where the model is designed — and run."
│                   → Screenplay (the language), Stage (the runtime),
│                     Prologue (bring an existing system in)
│
├── TOOLS  (one page, one grid, no individual campaigns)
│       CLI · Narrator · Lens · Synopsis · Prompter
│
├── FOUNDATIONS  (open-source libraries; a listing, not a story)
│       Fundamentals · Specifications · Architecture · Templates · AI
│
└── SERVICES  (plain names — see §6)
        Support · Workshops · Advisory
```

### 3.3 The calls this makes

**Screenplay and Stage become part of Studio.** Today they are three names for one idea, and the idea is the crown jewel. As three names, none of them lands. As *"Studio — the canvas; Screenplay — the script; Stage — the performance"* they become a single, memorable, three-beat story that a person can retell after hearing it once. Keep the names, demote them to components.

**Components and AuthProxy become part of Arc.** They are never sold separately in practice, and Arc's value proposition is precisely that you don't hand-assemble these pieces. Marketing them separately contradicts the pitch.

**Prologue stays visible but lives under Studio.** It is the highest-leverage commercial story in the portfolio — it is the answer to *"we already have a system"*, which is the first objection ninety per cent of buyers raise — and AxonIQ's equivalent is still in private preview. Give it a strong page. Do not give it a top-level brand slot.

**Tools get one page.** Narrator (9 commits), Lens (v0.0.1), and Synopsis (8 commits) are early. Presenting them as peers of Chronicle invites a maturity audit Cratis will lose. Presented as a tools grid, they read as generosity and momentum.

**VerticalSlices is retired from the public surface.** No description, dormant since March, superseded by Screenplay/Stage. Archive it.

### 3.4 The one naming risk worth naming

**Arc is the weakest name in the portfolio** and, at v21 with 6,500 commits, by far the most mature product. "Arc" tells a prospect nothing, collides with Arc browser and Arc XP in search, and is the piece most likely to be discovered independently of the metaphor.

**Do not rename it.** The cost is too high and the equity is real. Instead, **never let "Arc" travel alone.** Always: *"Arc — the full-stack CQRS framework."* Lock the descriptor into the style guide and enforce it everywhere, including social handles and package descriptions.

Same discipline for **Studio**, which is generic in the developer-tools market (Android, Visual, Data). Always *"Cratis Studio"*, never "Studio" standing alone off-site.

---

## 4. The messaging system

### 4.1 Master narrative

Use this as the source for the homepage, the pitch, the conference talk, and the first three minutes of every sales call.

> **The way software gets built has changed twice over.**
>
> Assistants now write, refactor and review a growing share of the code, and teams ship faster than their architecture was ever designed to absorb. At the same time, more of what software does has to be explainable — to an auditor, to a regulator, to a customer, and increasingly to another machine.
>
> Both pressures land on the same weak point: **most systems have no explicit model.** The architecture lives in a diagram that stopped being true in month three. The truth lives in a database row that has forgotten how it got that way. An assistant dropped into that codebase does not fail loudly — it guesses, plausibly, at speed.
>
> **Give it a vague codebase and it produces vague code, faster.**
>
> Cratis is built on the opposite bet. Model the domain where the whole team can see it. Record what happened as immutable facts instead of overwriting the answer. Keep one typed contract from C# to React so drift becomes a build error rather than a production incident. Put the conventions somewhere a compiler *and* an agent can both read them.
>
> Do that, and the model stops being a document about the system. **It becomes the system.**
>
> We are the people who build Chronicle, Arc and Studio. We are small, we are reachable, and we would rather tell you Cratis is the wrong fit than sell you a year of it.

### 4.2 Four pillars

Every asset should be traceable to one of these. If a piece of copy serves none of them, cut it.

---

**PILLAR 1 · ONE MODEL, END TO END**
*The pieces agree about how an application is shaped.*

- The point is not that Cratis has many packages. It is that **the packages agree**.
- One C# command becomes an HTTP endpoint, a typed TypeScript proxy, a React form and a spec — written once.
- Rename a property in C# and the frontend stops compiling until you fix it. **Drift becomes a build error.**
- A feature is one folder — intent, state, screen and specs together — not four folders in four layers.
- In Studio, the model isn't a sketch you translate. **It's the slice, drawn.** In Stage, it isn't generated. **It runs.**

*Proof:* generated proxies; Roslyn analyzers (ARC*/ARCCHR*); vertical slices; the four event-modeling patterns mapping one-to-one onto the four Cratis slice types; Stage interpreting an `EventModel` into a live application with no compilation step.

*Kill shot against JasperFX:* they hand you excellent parts. You still own the assembly, the frontend contract, and the design surface — forever.

---

**PILLAR 2 · A HISTORY YOU CAN QUESTION**
*Event sourcing as the default for information systems — not the exception.*

- Event sourcing optimises for **understanding change**, not storing the latest value.
- Events are facts: immutable, past-tense, single-purpose. *If you reach for a nullable field on an event, you need a second event.*
- Read models are disposable. **There is no precious state to migrate, because the events are the state.**
- Audit isn't a feature you add. It is what the storage layer already is.
- Aggregate roots are one way to structure decisions. **Dynamic Consistency Boundary is another.**

*Proof:* Chronicle v16 shipping; projections / reducers / reactors; server-side constraints at append time; revision support for correcting the past; namespaces for tenancy; replay, failed-partition recovery, jobs; four storage backends.

*Honesty clause — keep it, it is a competitive weapon:* "When neither fits — a couple of static pages, a non-.NET backend, or a throwaway prototype — Cratis is more than you need, and that's fine."

---

**PILLAR 3 · RAILS AN AGENT CAN FOLLOW**
*Built for how software is written now.*

- An assistant is only as good as the structure it works inside.
- Cratis ships the structure: `.ai` skills and agents for Claude Code, Copilot and Codex; analyzers that fail the build on convention drift; generated proxies that break when a contract moves.
- A convention you can break silently isn't a convention — **it's a suggestion.**
- And the running system is legible too: the Chronicle **MCP server** lets an agent browse the event log, replay an observer and recover a failed partition — in plain language, against the live store.
- **Operate, not mutate.** The MCP server and the CLI inspect. To change state you still go through commands and events. **History stays honest.**

*Proof:* `cratis init`; `CHRONICLE.md`; `cratis llm-context`; plain output 2.7–5.6× smaller than JSON for agent consumption; `Cratis.Architecture.CodeAnalysis`; the `.ai` propagation hub across every repo.

*Kill shot against JasperFX:* "clean code is AI-friendly" is a hope. Analyzers, skills and an MCP server are a mechanism.

---

**PILLAR 4 · OPEN AT EVERY BOUNDARY**
*Adopt it without betting the company on us.*

- MIT licensed. Source on GitHub. No open-core bait-and-switch on the core.
- Chronicle speaks **gRPC/protobuf** at the kernel boundary — .NET is first-class, and TypeScript, Kotlin and Elixir clients ship today.
- Storage is a deployment choice: MongoDB, PostgreSQL, SQL Server, SQLite. The event model doesn't change.
- The pieces stand alone. Chronicle without Arc. Arc without event sourcing, over EF Core or Mongo. Components without either.
- **The dependency only runs one way.** Arc can sit on top of Chronicle; Chronicle never knows Arc exists.

*Proof:* four published client SDKs across NuGet, npm, Maven and Hex; four storage implementations; `arc-without-event-sourcing` documented as a first-class path.

*Kill shot against AxonIQ:* one runtime, one server, a commercial licence for production use, and a pricing page that starts a negotiation. Cratis is four runtimes, four databases, MIT, and a `dotnet new`.

### 4.3 The company promise (the fifth message — about *you*, not the code)

*Small, senior, and reachable.*

- The people who answer your question are the people who wrote the line of code you're asking about.
- No account manager, no tier-one triage, no discovery call before you get a straight answer.
- We publish what we're building, we say when something isn't ready, and **we will tell you when we're not the right fit.**
- The community answer is free and usually faster. If it would help everyone, it belongs in the docs.

This is the strongest asymmetric advantage two people have against a company with a sales team. **Do not hide it. Sell it.**

---

## 5. Audiences and what each one needs to hear

| Audience | Their real question | Lead with | Proof they need | Where they are |
| --- | --- | --- | --- | --- |
| **Staff / principal engineer** *(champion — win this one first)* | "Is this thought through, or is it someone's hobby?" | Pillars 1 & 2, plus the honesty clauses | Docs depth, the DCB page, `arc-without-event-sourcing`, the "when it's the wrong fit" sections, source on GitHub | Discord, GitHub, conference talks, long-form writing |
| **Eng manager / CTO, scale-up** *(economic buyer)* | "What happens to my team's velocity — and what happens if you disappear?" | Pillar 1 (less glue, faster onboarding), the company promise, continuity | Support plan terms, LTS policy, MIT + open protocol, named engagements with fixed scope | Referral, the champion, the support-plan page |
| **Enterprise architect, regulated** | "Can I defend this choice in a review?" | Pillar 2 (audit is the storage layer), Pillar 4 (no lock-in) | Compliance page, security/disclosure policy, governance, roadmap, company registration, SLA in writing | Long evaluation; needs institutional signals more than features |
| **Community developer** *(top of funnel)* | "Can I have something running before I lose interest?" | Three commands to a full-stack app; Prompter on Discord | Templates, samples, the getting-started walkthrough | Search, YouTube, Reddit/r/dotnet, Discord |
| **Brownfield owner** *(highest-value wedge)* | "I can't rewrite. Is there a path in?" | Prologue + the Adoption engagement | Capture from CDC, HTTP and telemetry; "it captures metadata, not data"; a sequenced adoption plan | Direct outreach, talks, case studies |

**Sequencing:** win the staff engineer, and they carry you to the manager. Every asset that fails to respect a senior engineer's intelligence costs you the only channel you have.

---

## 6. Commercial offering design

### 6.1 The governing principle

> **Metaphor for the craft. Plain language for the commerce.**

Chronicle, Arc, Studio, Screenplay, Stage, Prologue, Narrator, Lens, Prompter, Synopsis — evocative, and they earn it.
Support, Workshops, Advisory, Essential, Professional, Enterprise — plain, boring, procurement-safe.

A finance director should never have to ask what they are approving. Cute names on invoices cost deals.

### 6.2 Support plans

Positioned deliberately **between** JasperFX ($3k / $6k / $15k) and AxonIQ (from ~$21k/yr for small business, enterprise on request). Cratis carries more surface than JasperFX — a frontend, an edge gateway, a modelling layer, four client SDKs — and should not price below it.

| | **Community** | **Essential** | **Professional** | **Enterprise** |
| --- | --- | --- | --- | --- |
| | Free | **$4,500 / yr** | **$14,000 / yr** | **from $34,000 / yr** |
| For | Anyone | A team putting Cratis into production | A product depending on it | Mission-critical or regulated |
| Advisory hours | — | 10 | 30 | 70 |
| Response, critical | — | 2 business days | 1 business day | 4 business hours |
| Critical incidents | — | 2 | Unlimited | Unlimited |
| Design/architecture questions | Discord | 5 / yr | Unlimited | Unlimited |
| Private channel | — | ✓ Discord/Slack | ✓ | ✓ |
| Private issue board | — | — | ✓ | ✓ |
| Named architect | — | — | — | ✓ |
| Onboarding session | — | 1 hour | 2 hours | Half day |
| Workshop day included | — | — | 1 | 2 |
| Quarterly model review | — | — | — | ✓ |
| LTS branch & backports ⚠ | — | — | ✓ | ✓ |
| Roadmap input | Public | Public | Prioritised | Prioritised + private roadmap briefing |
| **Continuity clause** | — | ✓ | ✓ | ✓ + escrowed release keys |

⚠ **The LTS row is not deliverable today.** A later audit of all eleven repositories found that no maintenance branch has ever existed, and no older major has ever received a fix after its successor shipped. Chronicle has shipped six majors in ~17 months; Arc six in ~14. See **`POLICIES.md` §0** — that row must be removed, or the release process changed, before this table is published.

**The continuity clause is the most important line on that table.** It is the direct, written answer to the objection every buyer will raise and most will not say out loud. Draft it explicitly:

> *Everything you depend on is MIT licensed and published on GitHub. Chronicle's kernel boundary is gRPC/protobuf, and the clients are open. If Cratis ceased to operate tomorrow, you would keep the source, the protocol, the storage schemas, the CLI, and the right to fork — with no licence to renew and no server to phone home to. Your support plan additionally guarantees a ninety-day wind-down with handover documentation.*

That paragraph converts a two-person company from a risk into a lower-lock-in choice than AxonIQ. **Put it on the pricing page, not in the FAQ.**

### 6.3 Productised engagements

Two people cannot sell open-ended consulting. Fixed scope, fixed price, named outcome, fixed calendar — this protects the roadmap, prices on value rather than hours, and looks like a company with a service catalogue.

| Engagement | Duration | Price | You leave with |
| --- | --- | --- | --- |
| **Fit Review** | 90 min | **Free** | An honest yes/no, and what we'd do instead if no |
| **Architecture Review** | 1 week | **$7,500** | Written review: model, consistency boundaries, tenancy, storage, failure modes — risks ranked, fixes named |
| **Model Sprint** | 3 days, remote | **$12,000** | An event model the team agrees on, and the first three slices specified |
| **First Slice** | 2 weeks | **$25,000** | One production-shaped vertical slice built with your team — the pattern everything after it copies |
| **Prologue Discovery** | 2 weeks | **$22,000** | Your existing system captured into an event model, plus a sequenced adoption plan |
| **AI-Ready Foundations** | 1 week | **$9,000** | Conventions, analyzers and `.ai` rails set up so agents build to your standards |
| **Production Readiness** | 1 week | **$7,500** | A checked list of what must be true before go-live: TLS, storage, secrets, observability, replay, backup |

**Workshops** — remote, up to 12 people, tailored to the client's codebase, never a generic deck:

- *Event Modelling in Practice* — 2 days — **$8,500**
- *Event Sourcing with Chronicle* — 2 days — **$8,500**
- *Full-Stack Cratis: Arc, Components and the Typed Boundary* — 2 days — **$8,500**
- *Foundations* (any single topic) — 1 day — **$5,000**
- On-site: **+ $3,500** plus travel.

**Public workshop** — run one open-enrolment cohort per quarter at **$1,400/seat**, capped at fifteen. It fills the top of the funnel, generates testimonials, produces recorded material, and creates artificial scarcity. It is the highest-ROI marketing a two-person company can run.

### 6.4 The Studio question

Studio is the SaaS and the eventual recurring-revenue engine, and it is at v0.75 and "coming soon."

**Do not price it yet. Do not put a pricing page up.** Instead:

- **Studio Early Access** — free, invite-gated, capped at ~25 teams, with a stated commitment: *free for the duration of early access, and a founding price locked for the first year.*
- Prioritise Early Access invitations for support-plan customers and workshop attendees. This makes the support plan more valuable and gives Studio a warm, qualified, already-trained first cohort.
- When it launches: per-editor pricing, generous free tier for a single modeller, and a hard rule — **the models are exportable and the `.play` format is open.** Studio must never become the lock-in that Pillar 4 promises Cratis isn't.

### 6.5 What to say no to

State the boundary publicly. It is already drafted in the docs and it is excellent:

> *You want a general .NET or React consultancy.* We work on the model, the stack, and the architecture around them.

Saying no in public is one of the strongest signals of institutional confidence available to a small firm.

---

## 7. The credibility problem — projecting a company, honestly

### 7.1 The rule

**Never claim headcount you don't have.** One discovered exaggeration destroys the trust that everything else is built on, and in a community of engineers it will be discovered.

Institutional weight comes from **operational maturity**, not from implying a floor of employees. A company that publishes an LTS policy, a security disclosure process, a governance model and a public roadmap reads as an institution regardless of size. A company with fifty people and none of those reads as a risk.

### 7.2 The twelve signals, in priority order

1. **"We", always.** Product and company copy is first-person plural, permanently. Personal voice belongs in blog posts, talks and Discord — where it is an asset.
2. **A named Core Team.** This is the highest-leverage move available, and JasperFX has proven it: they list Erik Shafer, Anne Erdtsieck and Jaedyn Tonee as "Critter Stack Core Team" — community contributors, not employees, and it works completely. **Recruit three to five recognised community members as Cratis Core Team.** Give them a title, a bio, a photo, a private channel, early access, and a genuine voice in the roadmap. Cost: near zero. Effect: transforms the perceived shape of the company.
3. **Written terms.** Support plan T&Cs, an SLA definition, incident severity definitions, a wind-down clause. Procurement needs a document, not a promise.
4. **A versioning and LTS policy.** Which versions are supported, for how long, what a breaking change means, what the upgrade commitment is. Nothing signals durability more cheaply.
5. **A public roadmap** with dates you are willing to miss publicly and explain. *(You already have `roadmap.mdx` — surface it prominently.)*
6. **Governance and security pages.** *(Already written. Link them from the footer of every page.)*
7. **Legal identity in the footer.** Company name, organisation number, VAT, registered address. It converts "two guys" into "a registered Norwegian company" in one line.
8. **Release cadence, visible.** A changelog with regular dated entries is proof of life that no amount of copy can substitute for.
9. **A showcase.** Three named production users with a paragraph each is worth more than every adjective on the site. *(`showcase.mdx` exists — fill it, and ask directly. People say yes far more often than founders expect.)*
10. **Prompter as staffing.** A docs assistant that answers in seconds on Discord, with citations, and admits when it doesn't know, is *support presence*. Frame it that way explicitly: *"There is always someone on the Discord."*
11. **Consistent design system.** Nothing exposes a small operation faster than a website, a docs site and a GitHub org that look like three different companies. One type scale, one palette, one logo lockup, everywhere.
12. **Speaking and writing cadence.** Two conference talks and one substantial article per quarter. In this market the founders' visibility *is* the marketing budget, and Einar's existing standing in the .NET community is an asset that should be deployed deliberately rather than incidentally.

### 7.3 Handling the objection head-on

Put this in the FAQ, verbatim, and don't flinch:

> **You're a small team. What happens if you stop?**
>
> Fair question, and the honest answer is better than the reassuring one.
>
> Cratis is MIT licensed and developed in the open on GitHub. Chronicle's boundary is gRPC and protobuf, the storage schemas are documented, and the clients for .NET, TypeScript, Kotlin and Elixir are all open source. There is no licence server, no phone-home, and no proprietary format holding your data. If we stopped tomorrow, you would keep everything you are running and the right to fork it.
>
> That is a stronger position than most teams have with most vendors, and it is deliberate. Support plans additionally include a ninety-day wind-down with handover documentation.
>
> We are small, and we intend to stay small enough that you can always reach the person who wrote the code.

The last sentence turns the weakness into the promise. That is the whole trick.

---

## 8. Verbal identity

### 8.1 Voice

The docs voice is already the best asset Cratis has. It is codified in `.ai/rules/writing-cratis-docs.md`, it is consistent, and it is genuinely distinctive. **The task is not to invent a voice. It is to stop the marketing site from breaking it.**

**Cratis sounds like:** a senior engineer who has been burned, respects your time, and would rather be useful than impressive.

| We are | We are not |
| --- | --- |
| Specific | Superlative |
| Opinionated | Dogmatic |
| Plain | Simplistic |
| Warm | Chummy |
| Confident about limits | Defensive |
| Concrete | Aspirational |

### 8.2 Rules

1. **Pain → relief.** Name the problem the reader recognises before naming the thing that solves it.
2. **Second person, present tense, active voice.** "You append the event," not "the event is appended."
3. **Show the limit.** Every significant page earns trust by naming where the thing stops working. This is now a Cratis signature. Protect it.
4. **A number beats an adjective.** "2.7–5.6× smaller than JSON" outperforms "optimised for agents" every time.
5. **No unearned superlatives.** Never "best", "revolutionary", "seamless", "cutting-edge", "leverage", "empower", "unlock".
6. **One idea per sentence.** The docs already do this. Keep it.
7. **Metaphor must pay its rent.** "Chronicle records what happened" earns its keep. Curtains, applause, standing ovations and "taking centre stage" do not — cut them all.
8. **Never say "simply" or "just".** They are a small insult delivered at scale.

### 8.3 Lines already written that should be reused everywhere

These are exceptional and are currently buried in docs pages and READMEs:

- *"Nothing in that list is a thing you keep in sync. The build does."*
- *"Give it a vague codebase and it produces vague code, faster."*
- *"A convention you can break silently isn't a convention — it's a suggestion."*
- *"You find the holes on a whiteboard, not in production."*
- *"The compiler tells you what to fix instead of production telling your users."*
- *"An observer that has stopped consuming looks exactly like an observer with nothing to do."*
- *"Surprises belong to birthdays, not in code."*
- *"It captures metadata, not data. The story, not anyone's private lines."*
- *"It performs, it doesn't print."*
- *"You don't want to write a query. You want to look."*
- *"The source proves it. Synopsis makes it readable."*

Build a maintained `lines.md`. Reuse relentlessly. Consistency of phrasing across surfaces is what makes a small company sound like an established one.

### 8.4 Terminology discipline

| Always | Never |
| --- | --- |
| the Cratis Stack | the Cratis ecosystem / suite / platform-of-platforms |
| Arc — the full-stack CQRS framework | Arc (standing alone, off-site) |
| Cratis Studio | Studio (standing alone, off-site) |
| event sourcing (lowercase) | Event Sourcing (mid-sentence caps) |
| read model, event store, vertical slice | inconsistent casing or hyphenation |
| we | I (in product and company copy) |
| advisory hours | support hours (implies break/fix only) |

---

## 9. Visual identity direction

*Direction, not execution. Brief a designer from this.*

### 9.1 The trap

The theatre metaphor invites literal illustration — masks, curtains, spotlights, clapperboards. **Avoid all of it.** It reads as kitsch, it ages badly, it will look like a community project, and it directly undercuts the enterprise credibility the support plans depend on.

### 9.2 The direction: *editorial, not theatrical*

Take the metaphor's **typographic heritage** rather than its props. Playbills, title cards, printed scripts, programme notes, credits. Restrained, confident, print-literate.

- **Type.** A high-contrast serif or a distinctive display face for headlines — this is where the "playbill" reference lives, and it will immediately separate Cratis from the wall of Inter-on-white that every developer tool currently looks like. A clean neutral sans for body. A well-chosen mono for code — code is a first-class visual element, not an afterthought.
- **Colour.** A deep, near-black "stage" surface as a signature environment, with **one** warm accent (a stage-light amber or a signal orange) used sparingly and always meaningfully. Resist a second accent. Two-person companies look bigger with fewer colours.
- **Layout.** Generous whitespace, strong left-aligned type, wide measure for code, and real editorial rhythm. Let the writing be the design.
- **Diagrams.** The Mermaid diagrams throughout the docs are a genuine asset — nearly every explanatory page has one. Style them into a single consistent diagram language and treat it as a brand element. **Cratis explains itself in pictures. That should be visible.**
- **Photography.** Almost none. Two real photographs of two real people, well shot, on the About page. No stock. No illustrated blobs. No 3D isometric servers.
- **Motion.** One place only: the model becoming the running system. That single animation — canvas → script → running app → event log — is worth more than a whole site of micro-interactions, because it demonstrates the one claim only Cratis can make.

### 9.3 The ensemble as a system

Give each product a single-glyph mark within one geometric system — Chronicle a stacked log, Arc a curve, Studio a frame. Same grid, same weight, same construction. The consistency is the message: **these were designed together.**

---

## 10. Domains and site architecture

### 10.1 The domain question

`cratis.no` as the primary commercial domain has a real drawback: a ccTLD signals *local Norwegian supplier* to an international buyer, and Cratis's market is global. It will subtly cost you enterprise credibility in exactly the segment the support plans target.

**Recommendation, in order of preference:**

1. Acquire `cratis.com` or `cratis.dev` for the company site if obtainable. Keep `cratis.io` for product and docs.
2. If not: use **`cratis.io` as the single home for everything** — product, docs, services, company. One domain, one brand, all the SEO authority compounding in one place. This is the simplest and safest option, and for two people, simple wins.
3. Use `cratis.no` for the Norwegian legal entity and any Norway-specific service pages, 301-redirecting to the main site otherwise.

The JasperFX precedent (company at `jasperfx.net`, products at `martendb.io`) does support a split — but note that it splits **company vs product**, never *half the story on each*. If you keep the split, that is the only line to split on.

### 10.2 The commercial site — recommended IA

If `cratis.no` becomes the company site, this is the structure:

```text
/                    The model is the system.
                     → what Cratis is, the three products, who we are,
                       how to work with us. One screen to comprehension.

/stack               The Cratis Stack — Chronicle, Arc, Studio in one narrative
                     → deep links into cratis.io docs

/services            Overview + the fixed-scope engagement catalogue (§6.3)
  /services/workshops    Workshop catalogue, public cohort dates, booking
  /services/advisory     Architecture Review, Model Sprint, First Slice, Prologue Discovery

/support             The plan table, the continuity clause, terms, FAQ, buy

/why-cratis          The competitive argument, honestly made
                     → incl. "When Cratis isn't the right fit"

/about               Two founders. The Core Team. The values. The legal entity.

/trust               Security, disclosure, governance, LTS & versioning policy,
                     roadmap, licence, sub-processors
                     → the page that wins enterprise reviews

/customers           Showcase — three named users, one paragraph each

/blog                Two posts a month. Engineering-led, not marketing-led.

/contact             Book a Fit Review. Real calendar. Real names.
```

**The single highest-value page on that list is `/trust`.** It costs a weekend, it is almost entirely already written across existing docs, and it is the page that converts a cautious enterprise architect. Almost no small vendor has one. Build it early.

---

## 11. What to fix first — 90 days

### Days 1–14 · Decide and lock

- [ ] Ratify the brand line and the category line. Write them down. Stop rewording them.
- [ ] Collapse the public product surface to **Chronicle, Arc, Studio**. Update the docs nav, the GitHub org profile, and every README header accordingly.
- [ ] Fold Screenplay + Stage + Prologue under Studio; fold Components + AuthProxy under Arc.
- [ ] Archive `VerticalSlices`.
- [ ] Write the **continuity clause** and the **"you're a small team"** FAQ answer.
- [ ] Resolve the domain question.

### Days 15–45 · Build the commercial surface

- [ ] Ship `/support` with the three-tier table, pricing, and the continuity clause above the fold.
- [ ] Ship `/services` with the seven fixed-scope engagements, priced publicly. **Public pricing is a small company's biggest credibility multiplier** — it removes the "can we afford to even ask?" barrier that kills inbound.
- [ ] Ship `/trust` by assembling the existing security, governance and roadmap pages plus a new LTS/versioning policy.
- [ ] Write support plan T&Cs and severity definitions.
- [ ] Add legal entity details to the global footer.
- [ ] Invite three to five community members to become the **Cratis Core Team**. Announce it.

### Days 46–90 · Prove it

- [ ] Fill `/customers` with three named production users. Ask directly; offer to write the paragraph for them.
- [ ] Ship the single motion piece: canvas → script → running app → event log. This is the demo, the conference slide, the social clip and the homepage hero, all at once.
- [ ] Announce **Studio Early Access**, capped and invite-gated, with support-plan and workshop customers first in line.
- [ ] Schedule and sell the **first public workshop cohort**. Fifteen seats. It funds itself, produces testimonials, and creates the recorded material you'll reuse for a year.
- [ ] Publish the flagship article: *"Give it a vague codebase and it produces vague code, faster."* This is the piece that carries the whole Cratis thesis, it is timely, and it will travel.
- [ ] Build and maintain `lines.md`.

---

## 12. Competitive battlecards

### vs. Marten / Wolverine (JasperFX)

**Concede immediately and sincerely.** Marten has eleven years, 15.7M downloads and a superb reputation. Attacking it makes Cratis look small and will alienate the exact community you need. Say so out loud — it builds enormous credibility and costs nothing.

**Then reframe the question.** The comparison isn't Chronicle vs Marten. It's *"do you want excellent parts, or do you want the model?"*

| They give you | Cratis gives you |
| --- | --- |
| Event store + messaging, best in class | Event store + CQRS + **frontend contract + edge + modelling surface** |
| .NET only | .NET first, plus TypeScript, Kotlin and Elixir clients over an open gRPC boundary |
| Postgres / SQL Server / SQLite | Mongo / Postgres / SQL Server / SQLite |
| A backend | **A full stack, typed end to end, where drift is a build error** |
| Design lives in your head | Design lives in Studio — and **Stage runs it** |
| Clean code that AI happens to like | Analyzers, skills and an MCP server that AI is *made* to use |

**When to say "use Marten":** backend-only, Postgres-committed, no frontend contract problem, no modelling surface needed, and the team wants the largest possible community. Say it plainly. It will win you more deals than it loses.

### vs. AxonIQ

| | AxonIQ | Cratis |
| --- | --- | --- |
| Runtime | Java | .NET (+ TS / Kotlin / Elixir clients) |
| Storage | Axon Server | Four backends, your choice |
| Licence | Commercial required for production | **MIT** |
| Frontend | Not addressed | **Typed C# → TypeScript → React** |
| Brownfield | Discovery — private preview | **Prologue — shipping** |
| Model → system | Dev Agent **generates** code (drifts from day one) | Stage **runs** the model (cannot drift) |
| Buying | Sales-led, negotiation | **Public pricing, self-serve** |
| Getting help | Support portal | **The person who wrote it, on Discord** |

**The line:** *"Axon is the right answer if you're on the JVM in a regulated enterprise with a procurement department. If you're on .NET and you'd rather have the model than the meeting, that's us."*

**Where to be careful:** do not claim their scale, their uptime record, or their compliance posture. Fifteen years and Fortune 100 logos are real proof and you don't have an equivalent. Compete on shape and on access, never on scale.

---

## 13. The one-paragraph version

*If everything else is forgotten, keep this.*

> **Cratis is the event-sourced application platform for .NET, built on one idea: the model should be the system.** You design the domain where the whole team can see it, record what happened as immutable facts instead of overwriting the answer, and carry one typed contract from C# through to React — so drift becomes a build error and the conventions are somewhere a compiler and an AI agent can both read them. It is MIT licensed, runs on the database you already have, and speaks an open protocol from four languages. And it is built by two people who would rather tell you it's the wrong fit than sell you a year of it.

---

*Prepared as strategy, not as final copy. Section 4 pillars and §12 battlecards are the working documents; everything else supports them. The companion file `MESSAGING.md` contains ready-to-use copy blocks.*
