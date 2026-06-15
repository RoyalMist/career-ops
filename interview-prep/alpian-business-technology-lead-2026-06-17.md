# Interview Intel: Alpian - Business Technology Lead

**URL:** https://alpian.intranet.digital/external/en/companies/15f3e2c7-b10a-4288-bc71-3b543102a3f2/jobs/f00bd1d2-9dbd-4369-b7da-095098d19a36  
**Legitimacy:** High Confidence  
**Report:** [119](../reports/119-alpian-business-technology-lead-2026-06-04.md)  
**Interview:** Wednesday 2026-06-17, 13:30, Teams  
**Panel:** Luca Magnoni, CTO; Damien Chambon, Cloud & AI/Data Director; Sergii Kuku, Engineering Director  
**Prepared:** 2026-06-15  
**Sources:** Alpian 2025 results, evaluation report, application responses, CV, story bank, interview invitation  
**Audiences covered:** panel-mixed, hiring-manager, peer-tech

## 1. Interview Goal

This panel is not a recruiter screen. They already know the broad fit. The objective is to decide whether you can operate inside Alpian's environment: regulated digital banking, compliance workflows, cloud/data/AI, production delivery, and cross-functional adoption.

Your target positioning:

> I am a regulated-fintech technology leader who can turn operational pain points into production-safe automation: discover the workflow, translate it into implementable specifications, align business and engineering, preserve auditability, and measure operational impact.

Do not frame yourself as "ex-CTO looking for a smaller role." Frame yourself as:

> I am interested in a high-leverage role close to real banking operations, where AI and automation improve measurable workflows rather than becoming a slide-deck transformation.

## 2. Company Signals To Use

- Alpian published 2025 results on 2026-05-08 and describes itself as a FINMA-licensed Swiss digital bank majority-owned by Fideuram - Intesa Sanpaolo Private Banking. Source: https://www.alpian.com/blog/news/press-release-alpian-s-2025-annual-results
- Alpian says client base grew 65%, invested assets grew 127%, gross banking commissions more than tripled, and net loss fell year on year. Source: same Alpian results page.
- Alpian completed the Radicant portfolio migration in April 2026 and says it has surpassed 40,000 clients and CHF 289M in client assets including Pillar 3a. Source: same Alpian results page.
- Alpian lists 2026 priorities including client growth, deeper client relationships/recurring revenues, expanding AI to improve operational efficiency and client services, and broadening pension offering. Source: same Alpian results page.

How to use this:

> What interests me is that Alpian is now in a scaling phase, not only a launch phase. The combination of Radicant migration, client growth, product expansion, and explicit AI efficiency priorities makes operational technology a real business lever.

## 3. Audience Map

| Interviewer | Likely lens | What to prove |
|---|---|---|
| Luca Magnoni, CTO | Technology strategy, architecture, production risk, role fit | You can bridge business and engineering without creating architecture theatre. |
| Damien Chambon, Cloud & AI/Data Director | Cloud/data/AI, automation patterns, compliance-safe AI | You understand data flows, governance, human-in-the-loop design, and production adoption. |
| Sergii Kuku, Engineering Director | Delivery, engineering collaboration, specifications, operational ownership | You will make engineering more effective, not dump vague business requirements on teams. |

## 4. Opening Narrative - 90 Seconds

Use this if they ask "tell us about yourself" or "why Alpian":

> My background is at the intersection of regulated financial technology, product and engineering delivery, and practical AI adoption. At FlowBank, I led the technology organization of a FINMA-regulated neobank, owning roadmap, budget, target architecture, AWS transition, CRM/core banking initiatives, and a real-time data platform connecting trading, compliance, finance, marketing and quant teams. At SCRYPT, I implemented Claude Enterprise through Slack with Linear, email and calendars to make cross-functional work more structured and actionable. Before that, at UBP, I worked directly on audit, IAM, GDPR and control remediation, and at Ripple/Metaco I led engineering for a regulated institutional custody platform.
>
> What attracts me to Alpian is that the role starts from real banking operations: Compliance, KYC, transaction monitoring, operational controls, and production delivery. That is the right place for AI and automation in a bank. I can help identify use cases, structure them into implementable solutions, work with engineers and business owners, and keep auditability and adoption at the center.

## 5. Your Four Core Stories

### Story 1 - FlowBank: regulated digital bank technology transformation

Use for: technology strategy, banking context, cloud/data architecture, executive stakeholders.

- Situation: FINMA-regulated neobank needed a viable technology direction.
- Action: Led ~40-person technology department, built roadmap/budget/execution indicators, initiated AWS transition, built target architecture and data platform connecting trading, compliance, finance, marketing and quant.
- Result: Created an executable technology direction, not just a strategy document.
- Alpian angle: "I know the tension between banking regulation, business urgency, legacy/process constraints, and delivery capacity."

### Story 2 - SCRYPT: AI operating system

Use for: AI adoption, automation, change management, soft skills.

- Situation: Work was fragmented across Slack, email, meetings and informal follow-up.
- Action: Implemented Claude Enterprise through Slack with Linear, email and calendar integrations; introduced Linear company-wide; reorganized delivery/L3 ownership.
- Result: Clearer priorities, better follow-through, improved visibility and practical daily AI adoption.
- Alpian angle: "AI adoption works when it is embedded into the workflow and linked to ownership."

### Story 3 - UBP: control and audit mindset

Use for: compliance, KYC/controls, risk, auditability, governance.

- Situation: Banking IT/security audits across governance, IAM, GDPR and operational controls.
- Action: Planned audits, used data analysis, wrote reports in French/English, discussed remediation with departments and leadership.
- Result: Found an application-role bug affecting 0.5% of users.
- Alpian angle: "I do not treat controls as bureaucracy. They are design requirements and evidence requirements."

### Story 4 - Ripple/Metaco: engineering operating model

Use for: engineering collaboration, production quality, technical leadership, L3/support, cross-functional delivery.

- Situation: Security-sensitive institutional custody platform across multiple teams.
- Action: Led up to 50 people, organized squads, created L3 support squad, drove architecture, monitoring, QA, releases and technical debt control.
- Result: Better ownership, delivery focus and operating discipline.
- Alpian angle: "I know how to work with engineers in a high-trust financial platform without compromising roadmap delivery."

## 6. Likely Questions And Answer Angles

All questions below are inferred from the JD, panel composition and interview objectives, not sourced candidate reports.

### "How would you identify AI opportunities in Compliance?"

Answer structure:

1. Start with workflow discovery, not model selection.
2. Map case volumes, manual decision points, rework, SLA pain, audit evidence and exception paths.
3. Separate use cases by risk:
   - low-risk summarization and evidence preparation,
   - medium-risk triage and prioritization,
   - high-risk recommendations requiring explicit human approval.
4. Design for auditability: prompt/version history, input/output capture, human decision log, policy references, access controls, rollback.
5. Measure: time to prepare case, time to decision, false positives reduced, control evidence quality, adoption rate, error/rework rate.

Sound bite:

> In Compliance, I would not start with "where can we put an LLM?" I would start with where analysts lose time, where evidence is hard to assemble, and where decisions need better traceability.

### "Design an AI-assisted KYC or transaction monitoring workflow."

Whiteboard answer:

- Inputs: customer profile, onboarding documents, transaction history, risk rules, policies, sanctions/PEP/adverse media providers, prior case notes.
- Processing: deterministic rules stay deterministic; AI assists with summarization, classification, missing-evidence detection, policy retrieval and draft rationale.
- Human-in-the-loop: analyst approves/rejects/edits; no autonomous adverse decision.
- Controls: RBAC, data minimization, model/prompt versioning, audit logs, traceable policy citations, reviewer sign-off.
- Data platform: clean event model, case state transitions, feedback loop from analyst decisions, dashboards for SLA and quality.
- Production safety: pilot with shadow mode, limited scope, quality sampling, rollback path.

Avoid saying:

> "The AI decides whether the client is suspicious."

Say:

> "The AI prepares and structures the evidence; accountable humans make regulated decisions."

### "How do you translate business requirements into implementable specifications?"

Use BCP/FlowBank/Bazzile/Ripple:

- Start from the operational outcome and constraints.
- Write acceptance criteria in business language and technical terms.
- Identify data sources, system boundaries, failure modes, ownership, security controls and release path.
- Validate with engineering before committing dates.
- Create metrics before building.

Sound bite:

> A good specification is not a long document. It is a shared decision record: what problem we solve, what we will not solve now, what data we use, what controls apply, how we know it works, and who owns it in production.

### "How do you work with engineers when you are not the line manager?"

Use Ripple/Metaco + SCRYPT:

- Bring clarity, not authority theatre.
- Involve engineers early in problem framing.
- Separate discovery from delivery commitment.
- Let engineers challenge feasibility and risk.
- Make trade-offs explicit for business stakeholders.
- Protect engineering from vague urgency while keeping accountability.

Sound bite:

> My job is to reduce ambiguity before it hits engineering, and then keep enough context flowing so engineers can make good technical trade-offs.

### "Where have you transformed a business with AI or automation?"

Use the SCRYPT answer already prepared:

- Business problem: fragmented execution across Slack/email/meetings.
- Action: Claude Enterprise integrated with Slack, Linear, email, calendars; Linear company-wide; delivery and L3 squads.
- Result: clearer priorities, better follow-through, visible ownership, practical AI embedded in daily work.
- Alpian bridge: apply same pattern to Compliance/KYC/transaction monitoring by automating evidence preparation, triage and workflow visibility.

### "How do you make sure AI is safe in a regulated bank?"

Answer:

- Classify use cases by decision risk.
- Keep high-impact decisions human-owned.
- Make data access explicit and minimal.
- Keep complete audit trail.
- Test on historical cases before production.
- Monitor drift, hallucination, rework and user overrides.
- Involve Compliance, Risk, Legal and Security early.

Sound bite:

> In regulated banking, the architecture is not only APIs and models. It is also responsibility, evidence and reversibility.

### "This role is less senior than CTO/Head of Engineering. Why do you want it?"

Do not overexplain. Use this:

> I have held broader leadership roles, but what matters to me here is leverage and fit. This role is close to real operational workflows in a licensed digital bank, with AI, data, cloud and production delivery all connected. That is a place where my experience can create value quickly. I am not optimizing for title alone; I am optimizing for the quality of the mandate, the people, and the ability to turn technology into measurable banking outcomes.

### "What would your first 90 days look like?"

30 days:

- Understand Compliance/KYC/transaction monitoring workflows.
- Map stakeholders, systems, data flows, pain points and current metrics.
- Build trust with engineering, product, compliance, risk and operations.
- Identify 5-10 candidate automation opportunities.

60 days:

- Prioritize 2-3 use cases by value, risk and delivery feasibility.
- Write solution specs with controls, ownership, metrics and release path.
- Define AI/data governance pattern for pilots.
- Deliver one narrow proof or shadow-mode workflow.

90 days:

- Move one pilot toward production or controlled rollout.
- Establish dashboard for operational impact.
- Create repeatable intake/prioritization model for further automation.
- Document what should scale and what should be stopped.

## 7. Questions To Ask Them

### To Luca Magnoni, CTO

- Where do you want this role to sit between business ownership, product ownership and engineering delivery?
- What are the top two technology bottlenecks preventing Alpian from scaling operationally?
- What would make you say after six months: "this hire changed the way we deliver technology to the business"?

### To Damien Chambon, Cloud & AI/Data Director

- What is Alpian's current AI posture: internal productivity, compliance operations, client services, advisory, or all of the above?
- Which data domains are mature enough today to support automation, and where is data quality still the blocker?
- How do you currently balance experimentation with model/data governance in production banking workflows?

### To Sergii Kuku, Engineering Director

- What type of specifications help your engineering teams move faster, and what type creates friction?
- Where do business requests usually lose clarity before reaching engineering?
- What is the current production ownership model for business technology changes: product, engineering, operations, or shared?

### General close

- What is the most important operational workflow you would want me to improve first?
- What risks would you want me to avoid in the first 90 days?
- What does success look like for this role by the end of 2026?

## 8. What To Volunteer / What To Avoid

Volunteer:

- You are already an Alpian client and understand the product from the user side.
- You know Alpian indirectly from the Swiss digital-banking ecosystem and FlowBank context.
- You have operated in FINMA-regulated environments.
- Your AI approach is pragmatic: workflow, adoption, controls, metrics.
- You can speak both to engineers and business stakeholders.

Avoid:

- Do not imply Alpian is a downgrade.
- Do not lead with compensation or 80-90% workload.
- Do not overclaim deep KYC/AML operations ownership. Say you have strong adjacent banking, compliance, audit and data-platform experience, and you know how to partner with domain experts.
- Do not say "AI can automate Compliance" too broadly. Say "AI can improve evidence preparation, triage, workflow visibility and analyst productivity under human accountability."
- Do not criticize FlowBank. Frame lessons professionally.

## 9. Technical Prep Checklist

- [ ] Be ready to draw an AI-assisted KYC/transaction monitoring case workflow.
- [ ] Prepare one concrete control design: audit logs, RBAC, human approval, model/prompt versioning, rollback.
- [ ] Review FlowBank data platform story and how it connected compliance, trading, finance, marketing and quant.
- [ ] Review UBP IAM audit story and the 0.5% user impact bug.
- [ ] Prepare SCRYPT AI operating-system story in 2-minute and 5-minute versions.
- [ ] Prepare an answer on cloud transferability: your strongest proof is AWS/EKS/Terraform, not GCP, but the principles are cloud/data governance and production operations.
- [ ] Prepare an answer on engineering collaboration without direct line authority.
- [ ] Prepare the role-fit answer for "why this role after CTO/Head of Engineering roles?"

## 10. Short Scripts

### Motivation

> Alpian is compelling because it is a real licensed bank, a digital product, and now a scaling business. The role is close to the operational workflows where AI can actually create value: compliance, KYC, transaction monitoring, controls and service efficiency.

### AI philosophy

> I start from the workflow and the control environment. The model is only one component. In banking, the full system includes data quality, access, human approval, audit evidence, monitoring and ownership.

### Working style

> I am direct, structured and pragmatic. I like to make ambiguity explicit, turn it into decisions, and keep business and engineering aligned through small but concrete delivery steps.

### Potential gap: formal KYC/AML depth

> I would not present myself as a career AML specialist. My strength is regulated banking technology, audit/control thinking, data architecture and delivery. I know how to work with Compliance experts and turn their constraints into reliable systems.

### Potential gap: GCP

> My direct large transformation experience is more AWS, EKS, Terraform and regulated fintech platforms. I am cloud-principles driven rather than vendor-dogmatic: identity, network boundaries, data governance, observability, deployment discipline and cost/control models transfer well.

## 11. Final Rehearsal Plan

Before the interview:

1. Rehearse the 90-second opening twice.
2. Rehearse FlowBank, SCRYPT and UBP stories in STAR format.
3. Draw the KYC/transaction-monitoring AI workflow once on paper.
4. Pick three questions to ask if time is short:
   - "What is the first operational workflow you want this role to improve?"
   - "Where is the main bottleneck today: data quality, tooling, process ownership or engineering capacity?"
   - "What does success look like by end of 2026?"

## 12. Source Links

- Alpian 2025 annual results: https://www.alpian.com/blog/news/press-release-alpian-s-2025-annual-results
- Evaluation report: [reports/119-alpian-business-technology-lead-2026-06-04.md](../reports/119-alpian-business-technology-lead-2026-06-04.md)
- Application responses: [output/archived/application-responses-thibault-fouache-alpian-business-technology-lead-2026-06-04.md](../output/archived/application-responses-thibault-fouache-alpian-business-technology-lead-2026-06-04.md)
- Story bank: [interview-prep/story-bank.md](story-bank.md)
