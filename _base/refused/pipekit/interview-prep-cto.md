# Pipekit — CTO Interview Prep

**Role:** Head of Engineering
**Interviewer:** J.P. Zivalich — Co-founder & CTO
**When:** Wed 2026-04-29 afternoon · 30 minutes
**Goal of the call:** First filter. He's checking technical credibility, leadership style fit, and whether you "get" pre-PMF reality. 30 min is short — be tight, concrete, low-ego.

---

## 1. Pipekit in 60 seconds

- **What they sell:** the **enterprise control plane for Argo Workflows** — unified deployments, multi-cluster management, enterprise-grade RBAC, governance, modern UI, "bring your own clusters." A single pane of glass for platform teams running Argo at scale.
- **Open core model:** they are **the primary maintainers of the OSS Argo Workflows project** (~40% of active maintainers on staff) and sell the proprietary control plane on top.
- **Customers (logos they wave):** Bloomberg, Intuit, CrowdStrike, Centrica Energy, Adobe, NVIDIA. Bloomberg's AI group (~300 engineers) uses Argo via Hera (Python SDK).
- **Stage:** YC S21 · founded 2020 · ~9 employees · pre-PMF (their own JD wording). HQ leans US (J.P. is Atlanta-based). Onboarding "in 1–2 weeks," free 30-day trial.
- **Co-founders:**
  - **Caelan Urquhart** — CEO. Background: Kite, Expo, McKinsey (community / marketing / ops / finance).
  - **J.P. Zivalich** — CTO, your interviewer. Ex-Docker engineer (2017–2019), maintained Docker Hub's CI / auto-build for hundreds of thousands of users. Heavy Go background. Member of `argoproj` on GitHub (JPZ13).

**Read that as:** a small, technical, OSS-native company selling into very large enterprise customers, with a CTO who has shipped dev-infrastructure to massive scale before and cares deeply about distributed systems, K8s, and Go.

---

## 2. The technology — Argo Workflows

- **What it is:** Kubernetes-native workflow engine. Workflows are defined as K8s CRDs, executed as pods. Supports both **DAG** and **step-based** templates with massive parallelism.
- **CNCF status:** **Graduated** Dec 2022 (top tier, alongside Kubernetes, Prometheus, etc.).
- **Where it shines:** ML training pipelines, CI/CD, data processing, anything that's already on K8s and benefits from parallel pods. "Modern data and AI systems" — JD language — is the wedge.
- **Other major maintainers:** Intuit (the original author), BlackRock, RedHat, Codefresh, Akuity, Pipekit.
- **Health caveat (be aware, do NOT lead with):** the 2025 pracdata "State of Workflow Orchestration" report flagged Argo Workflows as having **fewer active contributors** vs. Dagster (~27k commits in 2024) and Prefect. The JD's line about "advancing the project — pushing performance, scalability, reliability" suggests they feel this. Useful subtext for OSS-strategy questions.

### Competitive landscape (one-liners)

| Tool | Positioning | Why Argo wins / loses |
|---|---|---|
| **Temporal** | Durable execution for long-running microservices | Wins on stateful business logic. Argo wins on K8s-native parallel batch / ML. |
| **Prefect** | Python-native, dynamic workflows | Wins for Python-only data teams. Argo wins on K8s-native scale and language-agnostic containers. |
| **Dagster** | Data-asset / lineage focused | Wins on data engineering ergonomics. Argo wins on raw K8s parallelism. |
| **Flyte** | K8s-native, type-safe, Lyft-born, ML focus | Closest direct competitor. Argo wins on simpler model + larger CNCF community. |
| **Airflow** | Legacy task-centric DAG, Python | Loses on K8s-nativeness, scaling. Argo replaces it for K8s shops. |

### Pipekit's enterprise wedge (what the control plane adds over OSS)

- Multi-cluster management (a single Argo install per cluster doesn't scale across orgs)
- Enterprise RBAC + governance + audit
- Unified logging across clusters
- Self-serve developer UX so platform teams don't become a bottleneck
- "BYOC" — customers keep compute / data on their own infra

---

## 3. The role, decoded

The JD has four pillars. Memorise these — he'll likely test each.

1. **Engineering productivity & execution** — turn a small team into a "high-impact, low-friction execution engine." Lightweight planning, DRI per initiative, faster decisions.
2. **Org growth** — full ownership of hiring, onboarding, performance, levelling, interview loops. Calibrated bar. Build for where they're going, not where they've been.
3. **Working with Product & Founders** — partner on priorities, push back on execution risk, bring engineering perspective rather than just executing tickets.
4. **Open source strategy** — co-own with founders, be a senior technical voice externally (community, partners, key users).

**First-90-days success metrics (their words):**

- Visible plan, low thrash, weekly progress
- Every initiative has a DRI; fewer escalations / handoffs
- Lightweight planning + tracking that increases throughput
- Explicit standards for code quality, reviews, reliability — followed
- Calibrated hiring bar with active pipeline and repeatable interview/onboarding loops
- Founders trust engineering execution without daily intervention
- PM ↔ Eng produces realistic scopes and faster decisions

**Anti-patterns they explicitly reject:**

| Don't sound like | Lean into |
|---|---|
| "I'd run a maturity assessment / framework" | "First two weeks: 1:1s with every engineer, sit with Product, ride along on customer calls." |
| "We need OKRs / SAFe / proper agile" | "Weekly plan, DRI per initiative, ship Friday demo." |
| "I prefer purely management" | "I still read PRs, jump on incidents, can debug Go." |
| "Wait for stable roadmap" | "Comfortable replanning weekly; pre-PMF means priorities should evolve." |
| "Decisions need more data" | "Decide with what we have, course-correct fast." |

---

## 4. Why you fit (your evidence)

| Their requirement | Your evidence |
|---|---|
| Pre-PMF, small team, ship-weekly, zero bureaucracy | **Bazile** — co-founder/CTO from zero to production, weekly cadence, OSS stack, 99.95% uptime |
| Manager of managers, scaling org | **Ripple** — led up to 50 engineers across Geneva + SF, scaled 40→50, restructured into autonomous squads |
| Lightweight execution systems | **Ripple** — weekly planning, crisp milestones, DRI per initiative, fewer escalations (uses their exact framing) |
| Hiring loops, levelling, calibrated bar | **Ripple** — owned end-to-end: scoping, levelling, interview loops, close strategy |
| Technical credibility | **Go** (Argo's language), **Rust**, **Elixir**; Pictet SRE on K8s + Terraform + Go; BCP technical leader on Go + K8s |
| K8s-native distributed systems | **FlowBank** real-time event-driven Kafka platform on K8s; **Pictet** SRE on K8s; **Ripple** mission-critical K8s platform |
| OSS / open-core comfort | **Bazile** OSS stack throughout; multi-language polyglot; comfortable in Go ecosystem (Argo's home) |
| Engineering ↔ Product ↔ Founders partnership | **Ripple** — partnered with Product to shape roadmap; **FlowBank** — directly with ExCo on portfolio sequencing |
| Pragmatic, low-ego, decisive, direct | Cultural / behavioural — show, don't tell |
| External technical voice | **Bazile** — direct user discovery; **Ripple** — technical voice with enterprise customers; weaker on conference / community presence — see Q&A |

---

## 5. Likely questions + sharp answers

### Q1. "Tell me about yourself" (60-second pitch)

> "15+ years engineering, last 10 in leadership. The two experiences that match Pipekit best: I co-founded **Bazile** in 2020 — built it zero-to-production with a small team, OSS stack throughout, weekly ship cadence, kept 99.95% uptime. And at **Ripple Custody** I scaled an org to 50 engineers across Geneva and SF, manager of managers, running mission-critical K8s platforms for institutional customers. I'm hands-on enough to read Go PRs, opinionated about lightweight execution, and I've done the pre-PMF replanning-every-week reality. That's why this role caught my eye."

**(60 seconds, then stop. Let him drive.)**

### Q2. "Walk me through how you scaled the Ripple team from 40 to 50."

Hit these points: scoped roles by what was actually broken (not org-chart filling); levelled them properly so we didn't end up with senior-heavy teams; structured loop (screen → take-home or system design → deep tech → values/leadership → close); calibration meetings every Friday; closed candidates by selling the mission and the customers. Throughput up, satisfaction at 96%. Key insight: **the bottleneck was rarely "more headcount," it was clearer ownership** — restructured into autonomous squads first, then hired into the gaps.

### Q3. "How do you balance speed and quality pre-PMF?"

> "Speed always wins until customers feel pain. Pre-PMF, the quality bar is: doesn't break the customer demo, doesn't lose data, doesn't paint us into a corner we can't refactor out of in two weeks. Everything else can be ugly. At Bazile I had no QA, no staging — code review + observability + reversibility. At Ripple I had institutional customers so the bar was higher, but the mechanism was the same: clear ownership, fast feedback loops, quality gates only where they matter."

### Q4. "How would you approach our open-source strategy?"

The honest version, since this is their differentiation:

> "I'd start by *listening*. You and Caelan have been steering Argo Workflows for years — I'd want to understand the strategy you've already converged on before I shape anything. What I bring is the operational side: making sure 40% of the maintainer footprint isn't bottlenecked on a few people, that maintainer time is allocated explicitly between upstream and the control plane, and that we have a calendar for community engagement — RFCs, ArgoCon, KubeCon, blog cadence — instead of it happening reactively. Open source is a flywheel for hiring, lead-gen, and credibility — but only if you're disciplined about how engineers spend the time."

### Q5. "Tell me about a hard people decision."

Have one ready. Pick a real story: someone underperforming you put on a plan and parted ways with respectfully, OR a star performer you had to redirect because they were creating culture damage. Lead with the decision, not the deliberation. End with what you learned and how it shows up in your operating norms now.

### Q6. "How do you partner with a PM and Founders?"

> "Three things. One — I bring engineering perspective into priority calls, not just feasibility estimates. If the sequencing is wrong I'll say so. Two — once we agree, I own delivery; founders shouldn't have to nag. Three — I escalate early, with options. The worst pattern is engineering going dark and surfacing surprises in week six. At Ripple this looked like weekly product+eng syncs, written status, and a shared definition of 'done' that included customer-visible outcomes."

### Q7. "What's your hiring bar / how do you interview?"

Cover: (1) **role scoping first** — what's actually broken? (2) **structured loop** — screen, technical (system design or take-home, never both), values/leadership conversation, founder/CTO close; (3) **calibration** — same loop run by 3+ engineers, debrief, no solo veto / solo approve; (4) **bar**: would I ship with this person tomorrow without supervising them? If no, no hire. Mention you've done this end-to-end at Ripple.

### Q8. "Where are you weakest as a leader?"

Pick a real one, not a fake. Two safe truthful options for you:
- **OSS community presence:** "I've shipped on OSS stacks for 15 years but I'm not yet a recognised face at conferences or in maintainer communities. That's something I'd grow into — and frankly, taking this role would be an accelerant." (turns weakness into excitement for the role)
- **Bias to action over deliberation:** "I lean toward shipping. On the rare occasion that hurts, it's when a decision really did need a 24-hour pause. I've learned to flag that explicitly to my staff so they push back on me."

### Q9. "Why Pipekit, why now?"

> "Three things click. One — the product is **infrastructure-grade open-core**, which is the kind of business I find most interesting and where my K8s + Go background actually compounds. Two — pre-PMF small team is the reality I just lived at Bazile, and the leverage at this stage is huge. Three — your enterprise customer list (Bloomberg, Intuit, CrowdStrike) means the technical bar is real, not theatre. I want to spend the next chapter pushing a Kubernetes-native platform forward, with a CTO who's been in the trenches."

### Q10. "Have you worked with Argo Workflows / Argo CD specifically?"

If you haven't shipped Argo personally — **don't fake it**. Be straight:

> "Argo CD I've touched in passing — at Pictet our SRE team ran K8s with GitOps tooling, but I didn't personally maintain it. Argo Workflows I know conceptually — DAG and step templates, K8s-native, the parallelism is the differentiator vs. Airflow. I haven't operated it in production. What I bring is K8s + Go fluency and the operator mindset: I can ramp on a Go codebase in days and I've supported mission-critical distributed systems for institutional customers. If specific Argo expertise is the bar, I can't fake it. If 'engineering leader who can ramp fast on Go infra' is the bar, that's me."

(This is risky but honest. He'll respect it more than bluffing.)

### Q11. "How do you handle ambiguity / incomplete information?"

> "Decide with what's in front of me, document the assumption, set a checkpoint to revisit. The cost of waiting is usually higher than the cost of a partial reversal. The exception is irreversible decisions — hiring, firing, public commitments — where I'll spend the time."

---

## 6. Questions you should ask him

Pick 3–4 from these, prioritised. The first two are non-negotiable.

1. **"What's actually broken in engineering today, in your view? What would you most want a Head of Eng to fix in the first 30 days?"** → Tells you the real problem. Pre-PMF + JD complaints suggest there's a current pain point.
2. **"How do you and Caelan divide engineering vs. product authority? Where does the new Head of Engineering plug into that?"** → Critical. Founder dynamics make or break this role.
3. **"How do you currently allocate engineering time between upstream Argo and the proprietary control plane? Is the split the right one for this stage?"** → Shows you're thinking strategically about open-core economics.
4. **"What's the runway picture? Are you planning to raise next, or get to default-alive on revenue?"** → Pre-PMF + 9 people + only public funding is YC seed → you need to know.
5. **"What does success look like at 90 days, and what are the leading indicators between now and then?"** → Lets him commit publicly to a definition you can deliver against.
6. **"Who are the engineers I'd be inheriting? Where are they geographically, what's the seniority distribution, and how much management experience exists on the team today?"** → Practical. Influences whether this is a manager-of-managers role yet, or you're managing ICs directly first.
7. **"What's the relationship like with the broader Argo community — Intuit, BlackRock, RedHat? Are there tensions to manage?"** → Shows you understand open-core community politics.
8. **"Is the Head of Engineering expected to be in-person somewhere, or remote-friendly? You're Atlanta — am I right?"** → Practical, shows you've done your homework on him.

---

## 7. Watch-outs

- **Don't sound like a banker.** You did 5+ years in financial services. Speak the YC / startup language: ship-weekly, DRI, low ego, scrappy. Drop "Executive Director" framing.
- **Don't lead with process.** If you say "I'd implement Scrum / SAFe / OKRs," you're disqualified. Lead with people, ownership, customers.
- **Don't oversell Argo expertise.** He maintains it; he'll catch you. Be honest about what you've operated vs. read about.
- **Don't ramble.** 30 minutes goes fast. Aim for ~60-second answers, then stop and let him drive.
- **Show energy.** Pre-PMF founders hire for fire. The CTO has been doing this since 2020 — he wants someone who's *excited*, not just *competent*.
- **Lean into Go.** It's the language of Argo. You list it on your CV — be ready to talk about a real Go system you shipped (BCP, Pictet SRE).

---

## 8. Quick-reference stats (numbers to reach for)

- **Bazile:** co-founder/CTO, zero-to-production, 99.95% uptime, OSS stack, weekly ship cadence
- **Ripple Custody:** up to **50 engineers**, **Geneva + SF**, manager of managers, scaled **40 → 50**, **96% team satisfaction**, mission-critical K8s for institutional customers
- **FlowBank:** ~**40 people** in IT, real-time **Kafka** platform on K8s, on-prem → **AWS** migration, presented strategy to **Executive Committee**
- **Career:** **15+ years**, **Go / Rust / Elixir / TypeScript**, polyglot platform engineer turned leader

---

## 9. Last 5 minutes before the call

- Open this doc and Section 5 (Q&A).
- Re-read your CV bullets for Bazile + Ripple — those are 80% of your stories.
- Have a glass of water and a quiet room. 30 minutes will go fast.
- First answer is the impression he keeps. Nail "Tell me about yourself."

---

### Sources

- [Pipekit homepage](https://pipekit.io/) · [About](https://pipekit.io/about) · [Pricing](https://pipekit.io/pricing) · [Services](https://pipekit.io/services) · [Talks & Demos](https://pipekit.io/talks-and-demos) · [Blog](https://pipekit.io/blog)
- [Pipekit on Y Combinator](https://www.ycombinator.com/companies/pipekit)
- [Pipekit on Crunchbase](https://www.crunchbase.com/organization/pipekit)
- [J.P. Zivalich — LinkedIn](https://www.linkedin.com/in/jpzivalich/) · [GitHub: JPZ13](https://github.com/JPZ13)
- [Argo Project — CNCF](https://www.cncf.io/projects/argo/) · [Argo graduation announcement (CNCF, Dec 2022)](https://www.cncf.io/announcements/2022/12/06/the-cloud-native-computing-foundation-announces-argo-has-graduated/)
- [State of Open Source Workflow Orchestration Systems 2025 (pracdata)](https://www.pracdata.io/p/state-of-workflow-orchestration-ecosystem-2025)
- [Argo for ML — Pipekit blog (Bloomberg, Centrica, Dyno Therapeutics)](https://pipekit.io/blog/panel-argo-ml-achieving-scalability-user-experience)
