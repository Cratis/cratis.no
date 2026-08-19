# AGENTS.md — cratis.no

You are building **the Cratis company website**. Read this file first, every session.

## What this repo is

`cratis.no` is the **company and commercial site** for Cratis. It is *not* the documentation.

| Site | Purpose | Owns |
| --- | --- | --- |
| **cratis.io** (`../Documentation`) | Product documentation | How to use Chronicle, Arc, Components, CLI. Reference, tutorials, concepts. |
| **cratis.no** (this repo) | Company + commercial | Who we are. What the stack is, at a glance. Support plans. Services. Workshops. Trust. Contact. |

**The dividing rule:** if a page teaches someone *how to use the software*, it belongs on cratis.io. If it helps someone *decide to use it, trust us, or pay us*, it belongs here.

Never duplicate documentation. Link to it.

## The source documents

Read these before writing any copy. They are authoritative.

| File | What it is |
|---|---|
| **`BRAND.md`** | Positioning, brand architecture, messaging pillars, commercial offering, voice rules, competitive battlecards. **The strategy.** |
| **`MESSAGING.md`** | Approved copy blocks, product one-liners, objection handling, the lines bank, the do-not-say list. **The words.** |
| **`SITE.md`** | Purpose, form-factor requirements, design notes, information architecture, content patterns, sequence. **The shape.** |
| **`PAGES.md`** | Every page, section by section, with headlines and content. **The blueprint.** |
| **`POLICIES.md`** | Versioning and LTS policy, support terms. **The commitments.** |

If a request conflicts with these, say so and ask. Do not silently deviate.

## Who owns what

- **Design and styling — Einar.** Do not choose fonts, colours, or layout systems. Do not scaffold a site framework or pick a stack unless explicitly asked. `SITE.md` §3 is *input to* that work, not a specification of it.
- **Copy and content — these documents.** Draft against them, flag gaps, never invent.
- **Facts — the founders.** Prices, dates, customer names, legal details, headcount. Never fill these in.

## Hard rules

### Copy

- **Never invent marketing copy.** Use `MESSAGING.md` and `PAGES.md`. If a slot has no approved copy, draft it, mark it `<!-- DRAFT: needs approval -->`, and flag it in your summary.
- **Obey the do-not-say list** (`MESSAGING.md` §12). No "seamless", "powerful", "robust", "simply", "just", "leverage", "unlock", "empower", "cutting-edge", "enterprise-grade", "blazing fast".
- **Second person, present tense, active voice.** "You append the event," not "the event is appended."
- **We, never I.** Company copy is first-person plural.
- **A number beats an adjective.** "2.7–5.6× smaller than JSON" beats "optimised for agents".
- **Never claim headcount, customers, scale, or downloads that don't exist.** Leave a `<!-- NEEDS FACT: ... -->` marker. Do not estimate.
- **Product names never travel alone.** Always "Arc — the full-stack CQRS framework" and "Cratis Studio". See `MESSAGING.md` §3.
- **Spelling is fixed:** Chronicle, Arc, Studio, Screenplay, Stage, Prologue, Components, AuthProxy, CLI, Narrator, Lens, Synopsis, Prompter.

### Scope

- **This is the company site, not the docs.** If a page teaches someone *how to use the software*, it belongs on cratis.io. If it helps someone *decide to use it, trust us, or pay us*, it belongs here. Never duplicate documentation — link to it.
- **Never verify a link by assuming.** If you cite a cratis.io page, confirm it exists.
- **Honesty sections are not optional.** Every commercial page carries its "when this is the wrong fit" content. That pattern is the brand.

## Before you declare work done

- [ ] No do-not-say words present
- [ ] Every `<!-- NEEDS FACT -->` and `<!-- DRAFT -->` marker listed in your summary
- [ ] Every product name carries its descriptor on first use
- [ ] No invented facts, dates, prices, or names
- [ ] External links verified

## Working style

Report honestly. If a section is weak, say it is weak. If you had to guess, say so loudly. The brand is built on not overstating things — the work on it should follow the same rule.
