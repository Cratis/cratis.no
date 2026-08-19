# POLICIES.md — Versioning, support and commercial terms

**Status: DRAFT — requires founder decisions before publication.**

This document contains the artefacts `/trust` and `/support` depend on. It is written against **verified current practice** (audited 2026-08-19 across all eleven product repositories), and it separates clearly what is **true today** from what would have to be **created**.

Nothing here should be published until §0 is resolved.

---

## 0. Read this first — the problem the audit found

The support plan in `BRAND.md` §6.2 promises **"LTS branch & backports"** at Professional and Enterprise tiers.

**No LTS branch has ever existed.** The audit checked all eleven repos for `release/*`, `maint*`, `lts`, `support/*`, `backport`, and `N.x` patterns:

- Chronicle: none. Fundamentals, Components, CLI, Specifications, Templates, Screenplay, Stage, Prologue, AuthProxy: none.
- Arc: exactly one — `origin/release/20.62.x` — with 2 commits, abandoned, `main` now 316 commits ahead, and no `v20.x` tag dated after `v21.0.0` shipped.

Both publish workflows are hard-restricted to `branches: [main]`. **No older major has ever received a fix after its successor shipped.**

There is also no `CHANGELOG.md` in any repo, no cross-major upgrade guide, and no written support window.

### 0.1 And the release cadence compounds it

| Product | Current | Majors shipped | Over |
| --- | --- | --- | --- |
| Chronicle | v16.36.2 | 6 majors (v11→v16) | ~17 months |
| Arc | v21.19.3 | 6 majors (v16→v21) | ~14 months |
| Fundamentals | v7.18.0 | 2 majors (v5→v7) | ~15 months |

Chronicle went from `v16.0.0` to `v16.36.2` in **six weeks**.

**The mechanism:** `cratis/release-action` bumps the version from a **GitHub PR label** — `major`/`minor`/`patch` — and `verify-semver-label.yml` makes one mandatory on every PR to `main`. One merged PR labelled `major` ships a major release that day. No batching, no release train.

### 0.2 Why this matters commercially

To an evaluating architect, "Arc v21, six majors this year, no changelog, no migration guide, no supported-version statement" reads as **an unstable dependency** — regardless of how good the software is.

That impression is largely a **communication artefact, not an engineering one.** v21 does not mean twenty-one generations of redesign. It means roughly twenty-one breaking changes have ever shipped, each honestly labelled the day it landed. That is *more* disciplined than a project that batches breaking changes silently into a "minor". But nobody can tell that from the outside, and the version number actively works against you.

### 0.3 The decision that blocks publication

**You cannot sell "LTS branch & backports" until you can perform it.** Three options:

| Option | What it means | Cost | Recommendation |
| --- | --- | --- | --- |
| **A. Build it** | Create a real maintenance branch per supported major, backport security and critical fixes, publish the window | Ongoing engineering on every supported line. At six majors a year, unbounded. | Only viable **with** option C |
| **B. Drop the promise** | Remove "LTS branch & backports" from the plan table; sell advisory and response times only | Free. Weakens Professional/Enterprise. | Honest, but leaves the objection unanswered |
| **C. Slow the majors, then build it** | Batch breaking changes into a quarterly major; then a maintenance line is affordable | Process change: hold `major`-labelled PRs for a release train | **Recommended.** Makes A affordable and fixes the perception problem at its source |

**My recommendation: C, then A.** Move to a **quarterly major cadence** with maintenance on the current and previous major. That is four majors a year instead of six-plus, two supported lines instead of an unbounded set, and it makes every other commitment in this document deliverable.

Until that is decided, `/support` should ship with the LTS row **removed** rather than promised.

**→ Einar and Sindre: this is the single most consequential decision in the brand work. Everything in §1 and §2 below is drafted assuming C is adopted. If it isn't, say so and I'll rewrite them against B.**

---

## 1. Versioning and support policy

*Draft for `/trust#versioning`. Assumes decision C.*

> # Versioning and support
>
> ## Semantic versioning, honestly applied
>
> Every Cratis package follows [Semantic Versioning 2.0](https://semver.org). We take the "breaking change means a major" rule literally rather than conveniently.
>
> | Change | Version |
> | --- | --- |
> | A fix that doesn't change a contract | Patch — `16.4.**2**` |
> | New capability, existing code keeps compiling | Minor — `16.**5**.0` |
> | Anything that can break a build or a behaviour | Major — `**17**.0.0` |
>
> Version numbers are decided per pull request and enforced in CI. A change that breaks you gets a major, even when it would be commercially convenient to call it something smaller.
>
> **This is why our major numbers are high.** Arc is past v20 and Chronicle past v15. That is not twenty rewrites — it is twenty breaking changes, each declared the day it shipped, rather than batched quietly into a minor. We would rather the number be honest than flattering.
>
> ## Release cadence
>
> **Majors: quarterly.** Breaking changes are collected and released together on a predictable schedule, so upgrades are something you plan for four times a year rather than something that arrives unannounced.
>
> **Minors and patches: continuously.** New capability and fixes ship as they're ready. They don't break you, so they don't wait.
>
> ## Which versions are supported
>
> | Line | What it gets | For how long |
> | --- | --- | --- |
> | **Current major** | Everything — features, fixes, security | Until the next major, plus the window below |
> | **Previous major** | Security fixes and critical defect fixes | **6 months** after its successor ships |
> | **Older majors** | Nothing. Source remains available under MIT. | — |
>
> "Critical defect" means a production-blocking issue where the software does not behave as documented.
>
> With a quarterly major cadence, that means **at least two supported lines at any time**, and a minimum of six months to plan any upgrade.
>
> ## .NET runtime support
>
> Packages target `net8.0`, `net9.0` and `net10.0`.
>
> We follow Microsoft's own lifecycle: a .NET version stays supported here while Microsoft supports it, and is dropped in the first Cratis major after Microsoft's end-of-support date. We won't drop a runtime you're still receiving Microsoft security updates for.
>
> ## Pre-release packages
>
> Everything on **nuget.org and npm is a stable release.** We don't publish alpha, beta or rc packages to the public registries.
>
> Pull-request builds are published to GitHub Packages and ghcr.io as `1.2.3-pr<number>.<sha>`. They're built in Debug, they're for verifying a fix before it merges, and they are not for production.
>
> ## What we consider a breaking change
>
> Breaking, and therefore a major:
>
> - Removing or renaming a public type, member or parameter
> - Changing a method signature or a default that alters behaviour
> - Changing an event schema, a projection contract, or a storage layout in a way that needs migration
> - Changing a gRPC/protobuf contract incompatibly
> - Raising the minimum runtime or dependency version
> - Changing a convention that existing code depends on for discovery
>
> Not breaking:
>
> - Adding a type, member, or optional parameter
> - Adding an overload
> - Fixing behaviour that contradicted documentation *(we'll call this out in release notes)*
> - Internal changes behind a stable public surface
>
> ## What you get with every major
>
> - Release notes naming every breaking change
> - An upgrade guide with the changes that need a code edit
> - Analyzer diagnostics for renamed and moved APIs where we can provide them
>
> ## Pin your versions
>
> Use explicit package versions and explicit Docker image tags in anything you deploy. Don't track `latest` in production — see [version compatibility](https://cratis.io/compatibility/).

### 1.1 What §1 requires that does not exist yet

| Commitment | Status | Work needed |
| --- | --- | --- |
| Quarterly major cadence | **Does not exist** | Hold `major`-labelled PRs; release train process |
| Maintenance branch per supported major | **Does not exist** | Branch strategy + publish workflow that isn't `main`-only |
| 6-month support window | **Does not exist** | Policy decision + calendar |
| Release notes naming breaking changes | **Partial** — auto-generated from PRs | Curate on majors |
| Upgrade guide per major | **Does not exist** | One document per major going forward |
| .NET lifecycle statement | **Implicit in build files** | Write it down |

**Do not publish §1 until the first four are real.** A published policy you don't keep is worse than no policy — it converts a vague concern into a documented broken promise.

---

## 2. Support plan terms

*Draft for `/legal/terms`. Plain language on purpose — an unreadable contract from a company selling clarity is a bad look.*

> # Support plan terms
>
> Last updated: `<!-- NEEDS FACT: date -->`
> These terms apply to Essential, Professional and Enterprise support plans from `<!-- NEEDS FACT: legal entity -->`.
>
> ## 1. What you're buying
>
> Cratis software is MIT licensed and free. A support plan buys **our time and our commitments**, not the right to use the software.
>
> ## 2. What's included
>
> **Advisory hours.** Architecture questions, model review, consistency-boundary and tenancy design, migration paths, performance work, and second opinions. Used in blocks of 30 minutes, async or on a call.
>
> **Incident response.** Response times per your tier, measured from receipt to a substantive human reply — not an acknowledgement.
>
> **A private channel.** Discord or Slack, with the maintainers in it.
>
> **Roadmap input.** Professional and Enterprise requests are weighed explicitly when we plan. That is not a commitment to build any specific thing.
>
> ## 3. Severity
>
> | Severity | Means | Response |
> | --- | --- | --- |
> | **Critical** | Production blocked; software not behaving as documented | Per tier |
> | **Non-critical** | A question, guidance, or a non-blocking issue | Next business day where committed |
>
> Response times are **business hours**, Monday to Friday, 09:00–17:00 Central European Time, excluding Norwegian public holidays.
>
> A response is not a resolution. We'll tell you what we know, what we're doing, and when you'll next hear from us. Some fixes take longer than a response time.
>
> ## 4. What's not included
>
> - General .NET, React, or infrastructure consultancy
> - Feature development for your product
> - Writing your application code
> - Operating, hosting, or monitoring your systems
> - 24/7 on-call
> - Support for modified builds of Cratis packages
> - Support for versions outside the window in our [versioning policy](/trust#versioning)
>
> Scoped work is available — see [Advisory](/services/).
>
> ## 5. Advisory hours
>
> Allocated annually. **Unused hours don't roll over** `<!-- DECISION NEEDED -->`. Additional hours are available at `<!-- NEEDS FACT: hourly rate -->`.
>
> ## 6. Term, payment and cancellation
>
> Twelve months, invoiced annually in advance, net 30, in `<!-- DECISION NEEDED: USD or EUR -->`.
>
> Either party may decline renewal with 30 days' notice. **We don't auto-renew without telling you** — you'll hear from us 30 days before, and you have to say yes.
>
> If you cancel mid-term, we'll refund unused whole months minus advisory hours already used. We'd rather refund you than keep money you don't think you're getting value for.
>
> ## 7. Continuity
>
> If we stop operating, or stop offering support plans:
>
> 1. We'll tell you at least **90 days** before it takes effect.
> 2. During those 90 days your plan continues in full.
> 3. You'll get handover documentation covering your setup, known issues, and open work.
> 4. We'll refund the unused remainder of your term.
>
> The software itself is unaffected. It is MIT licensed and published on GitHub. Chronicle's boundary is gRPC/protobuf, the storage schemas are documented, and there's no licence server and no phone-home. If we disappeared entirely you would keep everything you're running, and the right to fork it.
>
> Enterprise plans additionally include escrowed release signing keys `<!-- DECISION NEEDED: confirm this is operationally real -->`.
>
> ## 8. Confidentiality
>
> Anything you share stays confidential. We won't name you as a customer without written permission.
>
> We'd rather answer in public — if a question and its answer would help everyone and contains nothing of yours, we'll ask whether we can put it in the docs. You can always say no.
>
> ## 9. Your responsibilities
>
> Give us enough to help: version numbers, configuration, logs, and reproduction steps. Keep to supported versions. Don't share credentials or production data with us — we don't want them, and we'd rather you didn't have to trust us with them.
>
> ## 10. Liability
>
> The software is MIT licensed and provided as-is; the MIT warranty disclaimer applies and is not modified by these terms.
>
> For the support service, our total liability in any twelve-month period is limited to the fees you paid in that period. Neither party is liable for indirect or consequential loss.
>
> `<!-- NEEDS LEGAL REVIEW: §10 must be checked by a Norwegian lawyer before publication -->`
>
> ## 11. Changes
>
> We may update these terms. Your terms are those in effect when your term began, and changes apply at renewal. Material changes come with 30 days' notice.
>
> ## 12. Law
>
> Norwegian law. `<!-- NEEDS FACT: jurisdiction/venue -->`

---

## 3. Decisions needed before anything here is published

| # | Decision | Blocks | Owner |
| --- | --- | --- | --- |
| 1 | **Adopt quarterly majors + maintenance branches?** (§0.3) | Everything | Both |
| 2 | Support window length — 6 months proposed | §1 | Both |
| 3 | Advisory hours roll over? | §2.5, `/support` FAQ | Both |
| 4 | Currency: USD or EUR | §2.6, all pricing | Both |
| 5 | Hourly rate for extra advisory hours | §2.5 | Both |
| 6 | Is key escrow operationally real? | §2.7 | Einar |
| 7 | Legal entity name, org.nr, address, VAT | §2, footer, `/trust` | Both |
| 8 | Business hours and holiday calendar | §2.3 | Both |
| 9 | Lawyer review of §10 and §12 | Publication | Both |
| 10 | Will you commit to an upgrade guide per major? | §1 | Both |

---

## 4. Recommended sequence

**Do not publish `/support` or `/trust` before step 3.**

1. **Decide §0.3.** Everything depends on it.
2. **If C: change the release process.** Hold `major` PRs, define the train, create the first maintenance branch. Prove it once before promising it.
3. **Write one upgrade guide** — Arc v20→v21 or Chronicle v15→v16 — retrospectively. It demonstrates the commitment is real, and it's immediately useful to anyone upgrading.
4. **Publish the versioning policy.**
5. **Lawyer-review the terms, then publish.**
6. **Then open the support plans for sale.**

Steps 2 and 3 are engineering work, not writing. They are the honest cost of selling a support plan — and they are worth doing regardless of whether anyone ever buys one, because the current story actively costs you enterprise adoption.
