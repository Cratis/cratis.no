# Cratis — Messaging Deck

Ready-to-use copy. Companion to `BRAND.md`.
Everything here is drafted in the Cratis voice (§8 of BRAND.md) and is meant to be pasted, then trimmed — never expanded.

---

## 1. The elevator ladder

**Five words**
> The model is the system.

**One sentence**
> Cratis is the event-sourced application platform for .NET — model your domain, and the model becomes the running system.

**Three sentences (the standard intro)**
> Cratis is the event-sourced application platform for .NET. You model the domain where the whole team can see it, record what happened as immutable facts, and carry one typed contract from C# to React — so drift becomes a build error instead of a production incident. It's MIT licensed, runs on the database you already have, and it's built by the two people who answer your questions.

**Thirty seconds (spoken)**
> Most teams have an architecture diagram that stopped being true in month three, and a database row that's forgotten how it got that way. Cratis closes that gap. You model the domain on a shared canvas, Chronicle records what actually happened as facts, and Arc carries one typed contract all the way to the React screen. Rename a property in C# and the frontend stops compiling until you fix it.
>
> The part people find hardest to believe is Stage: it doesn't generate code from the model, it *runs* the model. So the two can't drift.
>
> It matters more now than it did two years ago, because assistants write a growing share of the code — and an assistant is only as good as the structure it's working inside.

---

## 2. Homepage

### Hero

> # The model is the system
>
> Event-sourced .NET, modelled end to end — from the canvas, to the running app, to the history behind it.
>
> `[ Get started ]`  `[ Why Cratis ]`
>
> MIT licensed · MongoDB, PostgreSQL, SQL Server or SQLite · .NET, TypeScript, Kotlin and Elixir clients

### Under the hero — three commands

> **Three commands to a full-stack app.**
>
> ```bash
> dotnet new install Cratis.Templates
> dotnet new cratis -n MyApp --allow-scripts Yes
> cd MyApp && docker compose up -d && dotnet run
> ```
>
> Chronicle, Arc and a React frontend, wired together. Nothing to bolt on afterwards.

### Section — the problem

> ## Your architecture is in a diagram. Your truth is in a row
>
> The design lives on a whiteboard that stopped being accurate in month three. The behaviour lives across four folders in four layers. The state lives in a row that has forgotten how it got that way.
>
> Every one of those gaps is a place where what you meant and what runs quietly diverge.
>
> Then you point an assistant at it. It doesn't fail loudly — it guesses, plausibly, at speed.
>
> **Give it a vague codebase and it produces vague code, faster.**

### Section — the answer

> ## One model, all the way down
>
> **Model it where everyone can see it.** Commands, events and read models on a shared canvas — not a sketch you translate afterwards, but the slice, drawn.
>
> **Record what happened, not what's left.** Chronicle stores immutable facts and derives read models from them. Audit isn't a feature you add later; it's what the storage layer already is.
>
> **Carry one contract to the screen.** Arc generates the TypeScript your React app calls. Rename a property in C#, and the frontend stops compiling until you fix it.
>
> **Give the agent the same rails.** Analyzers, `.ai` skills and an MCP server into the live store — so an assistant builds with the grain of the framework instead of guessing at it.
>
> Nothing in that list is a thing *you* keep in sync. The build does.

### Section — the products

> ## Three products, one grain
>
> **Chronicle** — *the event store.*
> Records what happened. Projections, reducers, reactors, constraints and replay over MongoDB, PostgreSQL, SQL Server or SQLite. gRPC at the boundary, with .NET, TypeScript, Kotlin and Elixir clients.
>
> **Arc** — *the full-stack CQRS framework.*
> Turns behaviour into a typed application. Commands and queries become HTTP endpoints and generated TypeScript proxies, with identity, tenancy, authorization and React components included.
>
> **Studio** — *the modelling surface.*
> Where the model is designed — and run. Model on the canvas, write it as a Screenplay script, and let Stage perform it live. Bring an existing system in with Prologue.
>
> Use them together, or use one on its own. Chronicle never knows Arc exists.

### Section — who we are

> ## Built by the people who answer your questions
>
> We're small. That's deliberate, and it's the point: the person replying in Discord is the person who wrote the line you're asking about. No account manager, no tier-one triage, no discovery call before you get a straight answer.
>
> We publish what we're building. We say when something isn't ready. And we'll tell you when Cratis is the wrong fit — which is worth more to both of us than a year of a licence you regret.
>
> `[ Work with us ]`  `[ Support plans ]`  `[ Join the Discord ]`

### Closing

> ## Start where it makes sense
>
> **Just looking?** The getting-started walkthrough takes one event through a projection and a reactor.
> **Already have a system?** Prologue captures what it actually does and interprets it into an event model.
> **Not sure it fits?** Book a Fit Review. Ninety minutes, free, and we'll tell you honestly if the answer is no.

---

## 3. Product one-liners

*Lock these. Use them verbatim everywhere — docs, READMEs, package descriptions, social bios, conference slides.*

| Product | Locked descriptor | The line |
| --- | --- | --- |
| **Chronicle** | the event store | Records what happened, so you can always ask how you got here. |
| **Arc** | the full-stack CQRS framework | One slice of C#, typed all the way to the screen. |
| **Studio** | the modelling surface | Model it together. Then watch it run. |
| **Screenplay** | the modelling language | A whole bounded context, in one script. |
| **Stage** | the runtime | It performs, it doesn't print. |
| **Prologue** | the on-ramp | Captures what your existing system actually does. |
| **Components** | the React library | Your model, rendered — forms, tables and dialogs from the proxies you already have. |
| **AuthProxy** | the edge gateway | Authenticate once. Resolve the tenant. Pass on trusted context. |
| **CLI** | the terminal window | You don't want to write a query. You want to look. |
| **Narrator** | the reader | Follow the story your events tell, inside VS Code. |
| **Lens** | the viewfinder | Become any user, step into any tenant. |
| **Synopsis** | the behaviour report | The source proves it. Synopsis makes it readable. |
| **Prompter** | the docs assistant | The line you forgot, whispered from offstage. |

---

## 4. The ensemble page

*Cratis has a genuine, coherent metaphor across ten products and no single page that presents it. This is that page. It is a strong, shareable asset — the kind of thing that gets posted.*

> # The cast
>
> Cratis names its products after telling a story — because that is what an information system is. Something happened. Something recorded it. Something has to be able to tell you about it later.
>
> **Prologue** — what came before the curtain rose.
> Captures what your existing system actually does — its HTTP commands, its database changes, its telemetry — and interprets that into an event model.
>
> **Studio** — the storyboard.
> Where the team maps out what happens: the commands people issue, the events those produce, the read models people look at. On one canvas, in real time.
>
> **Screenplay** — the script.
> One declarative `.play` file describing a whole bounded context. Declarative first, with an escape hatch into real code where you need it.
>
> **Stage** — the performance.
> Hands the script to the cast and lets them perform it — a live, running Cratis application. No code generation, no compilation. **The model is the application.**
>
> **Arc** — the plot.
> The shape the story takes: commands in, events out, queries back — typed all the way to the screen.
>
> **Chronicle** — the record.
> What happened, in order, immutably. Not a summary. The facts.
>
> **Narrator** — reading it back.
> Browse the streams, namespaces and observers, and follow the story your events tell.
>
> **Lens** — the viewfinder.
> Frames the scene from someone else's point of view: become any user, step into any tenant.
>
> **Synopsis** — the programme notes.
> Turns the executable examples scattered through a repository into the clearest account of what the system actually promises.
>
> **Prompter** — offstage, with the line you forgot.
> Answers Cratis questions on Discord in seconds, grounded in the docs, with citations — and says so plainly when it doesn't know.
>
> The metaphor isn't decoration. The file extension is `.play`. Stage really does perform. And the whole pipeline reads as a sentence: *Prologue captures the backstory, Studio storyboards it, Screenplay writes it down, Stage performs it, Chronicle records it, Narrator reads it back, Synopsis tells you what it promised.*

---

## 5. Support plans page

### Hero

> # Depend on it with someone behind you
>
> Cratis is MIT licensed and always will be. A support plan isn't access to the software — it's an ongoing relationship with the people who build it, and a written answer to the questions your architecture review will ask.

### Above the table — the continuity clause

> ## First, the question you were going to ask anyway
>
> **What happens if we stop?**
>
> Everything you depend on is MIT licensed and published on GitHub. Chronicle's kernel boundary is gRPC and protobuf. The storage schemas are documented. The clients for .NET, TypeScript, Kotlin and Elixir are all open source. There is no licence server, no phone-home, and no proprietary format holding your data.
>
> If Cratis ceased to operate tomorrow, you would keep the source, the protocol, the schemas, the tooling, and the right to fork — with nothing to renew and nothing to migrate off.
>
> Every support plan additionally guarantees a ninety-day wind-down with handover documentation.
>
> We think that makes us a lower-lock-in choice than most vendors ten times our size. It's certainly a more honest one.

### Under the table

> **What "advisory hours" means.** Not break/fix. Architecture questions, model reviews, consistency boundary decisions, tenancy design, migration paths, performance work, and second opinions before you commit to something expensive to change.
>
> **What a critical incident means.** A production-blocking issue where Cratis is not behaving as documented.
>
> **What isn't in a plan.** General .NET or React consultancy, and feature development for your product. For scoped work, see [Advisory](/services/advisory/).
>
> **Not ready for a plan?** The Discord is free, public, and usually faster. That's not a consolation prize — it's where most questions get answered.

---

## 6. Services page

### Hero

> # Get the model right the first time
>
> The first slices set the pattern everything after them copies. Consistency boundaries are cheap to change now and expensive to change later.
>
> Every engagement is fixed in scope, fixed in price, and named in outcome. You'll know what you're getting and what it costs before you commit to anything.

### The catalogue intro

> Start with a **Fit Review** — ninety minutes, free, and we'll tell you plainly whether we can help. If the answer is no, we'll tell you what we'd do instead.

### When we're not the right fit

> ## When we're not the right fit
>
> Being direct about the limits saves everyone a meeting.
>
> **The question can be answered in public.** The Discord is free, open, and usually faster.
> **You want a general .NET or React consultancy.** We work on the model, the stack, and the architecture around them.
> **You want us to build your product.** We'll build the first slice with your team, and teach them the pattern. We won't be your development department.
> **You found a vulnerability.** Use responsible disclosure instead.

---

## 7. Workshops page

### Hero

> # The syntax is learnable in a week. The modelling is the part worth teaching
>
> Most teams don't struggle with Cratis. They struggle with deciding what an event is, where a consistency boundary belongs, and which read models are worth having.
>
> Our workshops are built around your codebase and your domain — not a generic deck we run for everyone.

### Format

> Remote, up to twelve people, two days by default. We work through your domain, not a toy one. You leave with an event model your team agrees on and the first slices specified — not just notes.
>
> On-site is available. So is a one-day Foundations format when two days is more than the calendar allows.

### Public cohorts

> ## Public workshops
>
> Once a quarter we run an open cohort — fifteen seats, mixed teams, same format. It's the cheapest way to find out whether event modelling changes how your team thinks, before committing a whole team's calendar to it.

---

## 8. About page

### Opening

> # Two people, and the software we'd want to inherit
>
> Cratis started from a straightforward frustration: the tools were good, but you spent your life keeping them in sync with each other. The event store didn't know about the command boundary. The command boundary didn't know about the frontend. The frontend didn't know about anything, and the model that was supposed to tie it all together lived on a whiteboard.
>
> So we built the thing where the pieces agree.

### The size question, addressed directly

> ## We're small. Here's what that actually means
>
> **What you get.** The person answering your question wrote the code. No triage tier, no account manager, no ticket that gets escalated to someone who has to read the source for the first time.
>
> **What we do about the rest.** Everything is MIT and public. There's a published roadmap, a versioning and LTS policy, a security disclosure process, and a written continuity clause in every support plan. Not because we plan to disappear — because you shouldn't have to take our word for it.
>
> **What we won't do.** Pretend to be bigger than we are. You can count us, and you should be able to.

### Values

> ## What we build towards
>
> **Empathy.** Understanding who we're building for — an API consumer, a teammate, an end user — is the whole job.
> **Simplicity.** The internals can be complex. The surface you touch shouldn't be.
> **Readability.** Code is read far more than it's written. We're not trying to save keystrokes.
> **Predictability.** *Surprises belong to birthdays, not in code.*
> **Testability.** Specs are how a system explains itself to the next person.
> **Automation.** If a computer can do it, make it do it.

---

## 9. Objection handling

**"Isn't event sourcing overkill?"**
> Often, yes — and we say so in the docs. It's the right default for systems driven by processes, decisions and handoffs over time, where "how did we get here?" will eventually be a real question. For a settings screen or a reference table, it's pure cost. Arc runs perfectly well over EF Core or MongoDB when that's the honest answer.

**"We already use Marten."**
> Marten is excellent, and Jeremy has been doing this for longer than we have. If you're backend-only, committed to Postgres, and don't have a frontend contract problem or a modelling gap, stay where you are.
>
> Teams come to us when the gaps they're feeling are the ones between the layers — the hand-written API client, the DTOs mirrored in two languages, the design that lives in someone's head. That's the part we built.

**"You're two people."**
> We are. Everything is MIT, on GitHub, over an open protocol, on a database you already run. There's no licence server and nothing proprietary holding your data. Support plans include a written ninety-day wind-down.
>
> We're small, and we intend to stay small enough that you can always reach the person who wrote the code.

**"Isn't the .NET-only thing limiting?"**
> .NET is the first-class experience, and we're not going to pretend otherwise. But Chronicle's boundary is gRPC and protobuf, and there are shipping clients for TypeScript, Kotlin and Elixir. Your event history isn't locked to one runtime, which is more than most event platforms can say.

**"Why not just build this ourselves?"**
> Plenty of teams do, and the first six months feel great. The bill arrives later — in the projection rebuild nobody planned for, the tenancy model that was added afterwards, the frontend client that four people maintain differently, and the onboarding that takes a month because the conventions only exist in people's heads.

**"What about lock-in?"**
> Fair. Concretely: MIT licence, source on GitHub, gRPC/protobuf at the boundary, documented storage schemas, four database backends, four client languages, and a `.play` format that's specified and exportable. You can leave. We'd rather you didn't want to.

**"How does this actually help with AI?"**
> Three specific things, not a vibe. `.ai` skills and agents that teach Claude Code, Copilot and Codex the conventions. Roslyn analyzers that fail the build when generated code drifts off them. And an MCP server that lets an assistant browse the event log, replay an observer and recover a failed partition against the live store.
>
> The last one is inspect-only by design. To change state you still go through commands and events. History stays honest.

---

## 10. Social and profile copy

**GitHub org bio**
> The event-sourced application platform for .NET. The model is the system.

**Twitter/X and LinkedIn bio**
> The event-sourced application platform for .NET. Model your domain — then watch it run. Chronicle · Arc · Studio. MIT.

**LinkedIn company tagline**
> Event-sourced .NET, modelled end to end.

**LinkedIn "about"**
> Cratis builds the event-sourced application platform for .NET. Chronicle records what happened. Arc turns behaviour into a typed, full-stack application. Studio is where the domain is modelled — and, with Stage, where the model actually runs.
>
> We work with teams on event modelling, adoption, architecture review and training, and we offer support plans for organisations depending on Cratis in production. Everything is MIT licensed and developed in the open.

**Conference talk abstract boilerplate**
> Cratis is an open-source, event-sourced application platform for .NET, built on one idea: the model should be the running system, not a diagram beside it.

---

## 11. The `lines.md` starter

*Maintain this file. Reuse relentlessly. Consistent phrasing across surfaces is what makes a small company sound established.*

**On the model**

- The model is the system.
- The model isn't a sketch you translate — it's the slice, drawn.
- It performs, it doesn't print.
- Build the system you modelled.
- You find the holes on a whiteboard, not in production.

**On coherence**

- The point is not that Cratis has many packages. The point is that the packages agree.
- Nothing in that list is a thing you keep in sync. The build does.
- The compiler tells you what to fix instead of production telling your users.
- A feature is one thing, and it spans the stack.

**On history**

- Events are facts. If you reach for a nullable field on an event, you need a second event.
- There's no precious state to migrate, because the events are the state.
- Audit isn't a feature you add. It's what the storage layer already is.
- Instead of "what does the row look like now?", you ask "what happened, in what order, and why?"

**On AI**

- Give it a vague codebase and it produces vague code, faster.
- An assistant is only as good as the structure it works inside.
- A convention you can break silently isn't a convention — it's a suggestion.
- Operate, not mutate. History stays honest.

**On operating**

- An observer that has stopped consuming looks exactly like an observer with nothing to do.
- You don't want to write a query. You want to look.
- Operability is architecture.

**On the company**

- We'll tell you when we're not the right fit.
- Small enough that you can always reach the person who wrote the code.
- If the answer would help everyone, it belongs in the documentation.

**On craft**

- Surprises belong to birthdays, not in code.
- It should be easy to do things right, and hard to do things wrong.
- We're not trying to save keystrokes.
- APIs should be lovable.

---

## 12. Do-not-say list

Ban these outright. Each one makes Cratis sound like everyone else, and the current voice is far too good to lose.

**Words:** seamless · effortless · revolutionary · cutting-edge · game-changing · best-in-class · world-class · leverage (as a verb) · empower · unlock · supercharge · robust · powerful · simply · just · blazing fast · next-generation

**Claims:** any download or star count until it beats the competition · "trusted by leading companies" without names · "enterprise-grade" without an SLA behind it · anything implying more people than there are · "the only" without a checked fact

**Structures:** a homepage that lists nineteen products · feature grids with no stated problem · testimonials without a name and a company · a pricing page that says "contact us" for every tier

**Metaphor overreach:** curtains · applause · standing ovation · taking centre stage · "the show must go on" · break a leg. The names carry the metaphor. The copy shouldn't perform it.
