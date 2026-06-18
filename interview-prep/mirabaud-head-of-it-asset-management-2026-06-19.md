# Interview Intel: Mirabaud - Head of IT, Asset Management

**URL:** local:_base/refused/mirabaud/head of it.md  
**Legitimacy:** Proceed with Caution  
**Report:** [reports/018-mirabaud-2026-05-01.md](../reports/018-mirabaud-2026-05-01.md)  
**Researched:** 2026-06-18  
**Interview:** Friday 2026-06-19, 14:00, 29 boulevard Georges-Favon  
**Interviewers:** Raphaël Ducret, COO Mirabaud Asset Management; Pierre Antoni, current Head of IT, retiring soon  
**Sources:** 0 Glassdoor reviews found, 0 Blind posts found, 4 other sources  
**Audiences covered:** hiring-manager, peer-tech, panel-mixed  

## Executive Read

This is not a broad "sell me your CV" screen. Treat it as a continuity and trust interview:

- Raphaël Ducret will likely test whether you can turn IT into a business-enabling function for Asset Management, not only run infrastructure.
- Pierre Antoni will likely test whether you understand the real operational load, legacy constraints, vendor dependencies, user expectations, and retirement handover risk.
- The strongest positioning is: **"I have already owned this blend of run, transformation, infrastructure, budget, governance, and regulated business stakeholders in Geneva financial institutions."**

Your best proof points:

- **FlowBank:** full technology department, approx. 40 people, roadmap, annual budget, Executive Committee, AWS transition, CRM, Core Banking, real-time data platform.
- **Pictet Asset Management:** security-constrained asset-management environment, EKS, Helm, Terraform, SRE leadership, internal React training.
- **UBP:** IT/security audits, risk posture, remediation, IAM bug affecting 0.5% of users, French/English reporting to leadership.
- **Ripple / Metaco:** 50-person regulated platform engineering organization, L3/support squad, operational model, client delivery for institutional finance.
- **SCRYPT / Wonderful / Bazzile:** pragmatic AI adoption and automation, but keep this secondary unless they open the topic.

## Sources And Evidence

- Archived JD and evaluation: [Report #018](../reports/018-mirabaud-2026-05-01.md), [_base/refused/mirabaud/head of it.md](../_base/refused/mirabaud/head%20of%20it.md).
- Application narrative: [_base/refused/mirabaud/cover-letter.md](../_base/refused/mirabaud/cover-letter.md).
- Current CV: [cv.md](../cv.md).
- Story bank: [interview-prep/story-bank.md](story-bank.md).
- Public company context: Mirabaud Group is Geneva-based, founded in 1819, active in wealth management, asset management, and brokerage, with CHF 32.3bn AUM and 700 employees reported for 2024: [Wikipedia summary with Mirabaud annual-result reference](https://en.wikipedia.org/wiki/Mirabaud_Group).
- Regulatory context to be aware of, not to volunteer: FINMA announced in September 2024 that Mirabaud & Cie SA had seriously violated financial-market law and ordered further AML, internal-control, and governance measures: [FINMA press release](https://www.finma.ch/en/news/2024/09/20240917-mm-mirabaud/).

## Process Overview

- **Known round:** onsite business and transition interview.
- **Format:** COO of Mirabaud Asset Management plus outgoing Head of IT.
- **Duration:** unknown.
- **Difficulty:** unknown - no useful public Mirabaud interview-review data found.
- **Known quirks:** outgoing incumbent is present, so expect operational realism, not only strategic ambition.
- **Likely objective:** confirm that you can own the IT function end to end while preserving continuity through Pierre Antoni's retirement.

## Audience Map

- **Round now** - onsite interview with COO + current Head of IT - `panel-mixed`
- **Raphaël Ducret** - COO, business owner / senior stakeholder - `hiring-manager`
- **Pierre Antoni** - current Head of IT, transition owner - `peer-tech`

## Your 90-Second Opening In French

> Mon parcours est assez aligné avec ce que vous décrivez pour Mirabaud Asset Management: j'ai déjà tenu des rôles où il fallait à la fois garder l'IT fiable au quotidien, piloter une transformation, gérer le budget, les fournisseurs, la gouvernance et parler avec des métiers financiers exigeants.
>
> Chez FlowBank, j'ai dirigé l'ensemble du département technologie, environ 40 personnes, avec la roadmap, le budget annuel, les indicateurs pour le Comité Exécutif, la migration AWS, le Core Banking, le CRM et une plateforme data temps réel. Chez Pictet Asset Management, j'ai travaillé dans un environnement asset management très contraint côté sécurité et infrastructure. Et chez UBP, j'ai couvert la partie audit IT, risque, contrôle et remédiation.
>
> Ce qui m'intéresse ici, c'est justement le côté très complet du rôle: pas uniquement transformer, pas uniquement faire tourner l'existant, mais créer une fonction IT qui soit robuste, lisible pour le business, gouvernée correctement, et capable d'amener de l'automatisation et de l'IA de manière pragmatique.

## Positioning By Interviewer

### For Raphaël Ducret - COO

Lead with business ownership:

- "Je ne vois pas l'IT comme un centre de tickets. Je la vois comme une fonction de pilotage: priorisation, risques, budget, continuité, et capacité de transformation."
- "Le premier enjeu est de rendre le portefeuille IT lisible: ce qui relève du run, ce qui relève de la transformation, ce qui est risque, ce qui est dette, et ce qui crée de la valeur métier."
- "Je suis habitué à parler à des comités exécutifs en arbitrant budget, risque, capacité et impact business."

Proof points to use:

- FlowBank roadmap, budget, Executive Committee, AWS, Core Banking, CRM.
- Ripple / Metaco operating model and L3 support squad.
- UBP audit and remediation discipline.

Avoid:

- Over-indexing on AI too early.
- Sounding like you want a pure CTO / engineering platform role.
- Criticizing the existing setup before understanding it.

### For Pierre Antoni - Current Head of IT

Lead with respect and transition discipline:

- "Mon objectif ne serait pas d'arriver avec un grand plan abstrait dès la première semaine. Je voudrais d'abord comprendre ce qui marche, ce qui est fragile, ce qui dépend de personnes clés, et où sont les vrais risques opérationnels."
- "Une transition réussie, c'est d'abord capturer les connaissances implicites: fournisseurs, incidents récurrents, processus critiques, personnes clés, décisions historiques, contraintes non écrites."
- "Je ferais rapidement une cartographie des applications, données, infrastructures, fournisseurs, contrats, risques et chantiers en cours."

Proof points to use:

- Pictet Asset Management security-constrained infrastructure work.
- Rolex IAM / software factory / infrastructure coordination.
- UBP IAM audit and risk evidence.
- FlowBank vendor renewals and operational trade-offs.

Avoid:

- Looking like you want to replace everything.
- Dismissing infrastructure/support as "less strategic".
- Talking only about modern cloud/AI patterns without acknowledging legacy and user continuity.

## Likely Questions And Strong Answers

### "Pourquoi ce poste chez Mirabaud Asset Management ?"

**Answer angle:** Geneva, asset management, end-to-end IT ownership, business proximity.

> Ce poste réunit plusieurs choses que j'ai déjà faites séparément: la direction IT complète chez FlowBank, l'environnement asset management chez Pictet, et la gouvernance IT/risk chez UBP. Ce qui m'intéresse chez Mirabaud Asset Management, c'est la proximité avec le business: l'IT doit soutenir directement les équipes d'investissement, les opérations, les données, les contrôles et la transformation. C'est un périmètre assez concret, où l'on voit vite si l'IT crée de la valeur ou seulement de la complexité.

### "Comment aborderiez-vous les 90 premiers jours ?"

**Answer structure: Listen, map, stabilize, prioritize.**

> Je structurerais les 90 premiers jours en trois temps.
>
> D'abord, comprendre: entretiens avec les parties prenantes clés, Pierre, les équipes métier, les fournisseurs, risk/compliance, infrastructure, et revue des incidents, projets, budgets et contrats.
>
> Ensuite, cartographier: applications critiques, flux de données, dépendances, niveaux de service, risques, dette technique, décisions attendues, et séparation run / transformation.
>
> Enfin, prioriser: quelques quick wins visibles, les risques opérationnels à traiter, et une roadmap claire avec budget, capacité, ownership et indicateurs. L'objectif serait de donner au COO une vision pilotable, pas seulement une liste de projets.

### "Comment gérer la transition avec Pierre ?"

> Je traiterais la transition comme un projet critique. Je demanderais à Pierre de m'aider à formaliser trois choses: les systèmes critiques, les relations critiques, et les risques implicites. Les relations critiques incluent fournisseurs, personnes internes qui débloquent les sujets, métiers exigeants, et points de friction récurrents. Je voudrais aussi comprendre les décisions passées: pourquoi certains choix ont été faits, pas seulement ce qui existe aujourd'hui.

### "Quelle est votre expérience Asset Management ?"

> J'ai travaillé chez Pictet Asset Management comme SRE contractor dans un environnement très contraint en matière de sécurité et d'infrastructure. J'ai techniquement mené la mise en place d'un socle de déploiement avec EKS, Helm et Terraform, et j'ai travaillé avec les contraintes d'une organisation asset management. Plus largement, chez FlowBank, j'ai piloté une plateforme data temps réel connectant trading, compliance, finance, marketing et équipes quantitatives. Je comprends que dans l'asset management, la qualité des données, la continuité, les workflows métier et la confiance des utilisateurs sont aussi importants que la technologie elle-même.

### "Comment distinguez-vous run, infrastructure et transformation ?"

> Pour moi, il faut les séparer dans le pilotage, mais pas les opposer. Le run protège la confiance: disponibilité, incidents, support, sécurité, continuité. L'infrastructure donne le socle: réseau, cloud, workplace, identité, données, fournisseurs. La transformation doit être gouvernée comme un portefeuille: valeur métier, risques, dépendances, capacité, budget. Si on mélange tout, les urgences du run mangent la transformation. Si on sépare trop, on crée des projets irréalistes. Le rôle du Head of IT est de garder cette tension visible et arbitrable.

### "Comment piloteriez-vous les fournisseurs ?"

> Je commencerais par clarifier les responsabilités: qui décide, qui opère, qui escalade, quels SLA sont réellement mesurés, et quels contrats portent les risques principaux. Chez FlowBank, j'ai géré les renouvellements fournisseurs, les prestataires externes et les arbitrages capacité / risque / budget. Mon approche est de challenger les fournisseurs sur la qualité opérationnelle et l'alignement stratégique, mais avec des indicateurs factuels: incidents, délais, dette, coûts, satisfaction métier, risques ouverts.

### "Comment abordez-vous l'IA dans un contexte bancaire ?"

> Prudemment et pragmatiquement. Je ne commencerais pas par "mettre de l'IA partout". Je chercherais des cas où l'IA réduit une vraie friction sans créer de risque incontrôlé: assistance documentaire, synthèse, workflow interne, support, automatisation contrôlée, recherche d'information. Chez SCRYPT, j'ai déployé Claude Enterprise intégré à Slack, Linear, email et calendrier pour soutenir le travail exécutif et transverse. Mon principe est simple: valeur mesurable, droits d'accès maîtrisés, humain responsable, auditabilité, et pas de données sensibles dans des flux non maîtrisés.

### "Votre profil est plus senior que 5-8 ans. Pourquoi ce rôle ?"

> C'est vrai que mon expérience dépasse le minimum du poste. Mais ce qui m'intéresse n'est pas seulement le titre, c'est le périmètre réel: owning the IT function for Asset Management, avec stratégie digitale, architecture, données, infrastructure, budget, fournisseurs, gouvernance et transformation. Si le rôle donne une vraie proximité avec le COO et le business, avec de l'autonomie et une capacité d'arbitrage, il correspond très bien à ce que je sais faire.

### "Qu'attendez-vous en termes de rémunération ?"

Use only if asked. Do not lead with a hard number.

> Je suis ouvert à comprendre la structure et la bande prévue pour ce rôle. Pour un mandat de Head of IT avec ownership complet, budget, fournisseurs, transformation et gouvernance dans une institution genevoise, je regarderais surtout le package total et le niveau réel de responsabilité. Mon objectif général est autour de CHF 230k total compensation, avec de la flexibilité si le périmètre, l'autonomie et l'impact sont solides. Quelle est la bande prévue côté Mirabaud ?

If they push lower:

> Je peux être flexible si le rôle a une vraie portée stratégique, mais j'aimerais éviter un décalage entre le niveau de responsabilité et le package. Le point clé pour moi est d'aligner rémunération, autonomie, scope et attentes.

## Story Bank Mapping

| Audience | Likely topic | Best story | Fit | Use it this way |
|---|---|---|---|---|
| COO | IT strategy, budget, business alignment | FlowBank Target Architecture and Budget | strong | Emphasize roadmap, budget, ExCo, data platform, core banking, AWS. |
| COO | Operating model and team accountability | Ripple / Metaco Team Satisfaction and Operating Model | strong | Emphasize squads, L3 support, support/roadmap separation, 90-96% team satisfaction. |
| COO | Regulated transformation | Regulated Agentic Automation | partial | Use only if AI/automation comes up; lead with controls and auditability. |
| Current Head of IT | Infrastructure in asset management | Pictet EKS and Terraform | strong | Emphasize security constraints, standardization, SRE, deployment foundations. |
| Current Head of IT | IAM, security, audit | UBP Identity Access Audit | strong | Emphasize evidence, remediation, risk communication, IAM bug. |
| Current Head of IT | Internal tooling and foundations | Rolex Software Factory | partial | Useful if they discuss legacy tooling, CI/CD, identity, shared standards. |
| Mixed panel | Commodity/financial business systems | Glencore Commodity Trade Rewrite | partial | Use only if asked about business-user workflows or domain ramp-up. |

## Questions To Ask Them

Ask Raphaël Ducret:

1. "Quels sont les deux ou trois sujets IT qui ont le plus d'impact sur la performance ou l'efficacité de Mirabaud Asset Management aujourd'hui ?"
2. "Dans ce rôle, qu'est-ce qui relève vraiment de l'arbitrage business/IT, et qu'est-ce qui est déjà cadré par le groupe ?"
3. "À quoi ressemblerait une première année réussie pour vous ? Stabilité, transformation, coûts, satisfaction métier, gouvernance ?"
4. "Quel niveau d'autonomie attendez-vous du responsable IT par rapport au COO, au groupe, aux fournisseurs et aux équipes infrastructure ?"

Ask Pierre Antoni:

1. "Quels sont les systèmes ou processus où la connaissance implicite est la plus importante aujourd'hui ?"
2. "Quelles sont les dépendances fournisseurs ou groupe qu'il faut comprendre très vite ?"
3. "Quels incidents ou irritants reviennent le plus souvent côté utilisateurs ou métiers ?"
4. "Si vous aviez encore un an dans le poste, quel chantier prioriseriez-vous ?"
5. "Qu'est-ce qui fonctionne bien aujourd'hui et qu'il ne faudrait surtout pas casser ?"

## Asset Management Ramp-Up Resources

Use this as a fast vocabulary and systems map before the interview. The goal is not to sound like a portfolio manager; it is to show that you understand what IT must make reliable for an asset-management business.

### 30-Minute Crash Path

1. **Asset-management operating model:** understand the chain from investment idea -> portfolio construction -> order/execution -> position keeping -> risk/performance -> client/regulatory reporting.
2. **Fund structures:** distinguish UCITS / mutual funds, mandates, ETFs, alternative funds, hedge funds, private markets, and discretionary portfolios.
3. **Core records:** learn IBOR, ABOR and PBOR:
   - **IBOR:** investment book of record, used by portfolio managers and risk teams for positions/exposures.
   - **ABOR:** accounting book of record, used for official accounting, NAV and reconciliation.
   - **PBOR:** performance book of record, used for official performance, attribution and reporting.
4. **Risk and controls:** focus on market risk, liquidity risk, concentration, counterparty risk, benchmark deviation, valuation controls, data lineage, access rights, and audit evidence.
5. **Technology platforms:** understand why systems like Aladdin matter: one consistent data model for portfolio, risk, compliance, trading, operations and accounting workflows.

### BlackRock Aladdin - Why It Matters

Read: [BlackRock Aladdin official overview](https://www.blackrock.com/aladdin)

Key points to retain:

- Aladdin positions itself as a whole-portfolio investment-management technology platform, not just a risk tool.
- It unifies portfolio management, risk/return views, asset allocation, performance, operations and accounting around a common data language.
- BlackRock highlights public and private markets coverage, integrated ecosystem partners, API-first/open innovation, and stable operating-model foundations.
- The product areas listed by BlackRock are exactly the vocabulary to listen for in Mirabaud's setup: order management, trade execution, compliance, operations, data cloud, portfolio risk and attribution, private markets, climate analytics, wealth tools, investment accounting (ABOR), and official performance (PBOR).

Interview use:

> "Je ne sais pas encore quels outils vous utilisez - Aladdin, Bloomberg PORT, SimCorp, MSCI/Barra, un système interne ou une combinaison - mais je voudrais comprendre où se trouve votre golden source: positions, risque, performance, accounting, ordres, reporting et contrôles. C'est souvent là que la qualité IT a le plus d'impact sur un asset manager."

Ask Pierre:

- "Quel est aujourd'hui votre système de référence pour les positions et expositions: IBOR, accounting, performance, ou plusieurs sources reconciliées ?"
- "Est-ce que les équipes d'investissement et opérations regardent la même donnée, ou y a-t-il encore des écarts à réconcilier manuellement ?"
- "Quels outils sont critiques aujourd'hui: PMS/OMS, Bloomberg, Aladdin/SimCorp/MSCI, data warehouse, reporting client, risk engine ?"

### Funds, Hedge Funds And Alternatives

Read:

- [Investor.gov - Hedge Funds](https://www.investor.gov/introduction-investing/investing-basics/glossary/hedge-funds)
- [SEC Investor Bulletin - Hedge Funds PDF](https://www.sec.gov/investor/alerts/ib_hedgefunds.pdf)

Key points to retain:

- Hedge funds pool investor money like mutual funds, but typically have more flexible strategies.
- Common hedge-fund techniques include leverage, short-selling, derivatives and less liquid or more complex positions.
- The IT implications are data, valuation, risk, liquidity, exposure, fees, performance, investor reporting, and controls.
- The operational questions are often more important than the label "hedge fund": How are assets valued? Who validates prices? How is leverage measured? How often can investors redeem? What happens under stress? What data supports performance and fees?

Interview use:

> "Sur les stratégies plus complexes ou alternatives, le sujet IT n'est pas seulement de stocker les positions. Il faut fiabiliser la valorisation, les expositions, la liquidité, les contrôles, le reporting et la traçabilité des décisions. C'est très proche de ce que j'ai vu en banque régulée et en custody institutionnelle."

### What IT Must Make Work In Asset Management

For this role, expect Mirabaud to care about:

- **Portfolio data:** positions, transactions, cash, corporate actions, pricing, benchmarks, exposures.
- **Front office:** portfolio managers, analysts, investment decisions, pre-trade checks, OMS/PMS usability.
- **Middle office:** trade lifecycle, reconciliations, risk, compliance, performance attribution, exceptions.
- **Back office / accounting:** NAV, accounting records, settlement, reporting, external administrators/custodians.
- **Client and regulatory reporting:** factsheets, mandates, performance, risk, ESG/climate metrics, audit trail.
- **Infrastructure and workplace:** secure access, M365/Azure, identity, endpoint stability, data protection, disaster recovery.
- **Vendor governance:** Bloomberg, custodians, fund administrators, risk engines, data vendors, group IT, outsourced infrastructure.

Good phrase:

> "Je veux comprendre la chaîne de valeur complète: de l'idée d'investissement jusqu'au reporting client, en passant par les ordres, les positions, le risque, la performance, l'accounting et les contrôles. Ensuite seulement on peut prioriser correctement l'IT."

### Systems Vocabulary To Recognize

- **PMS:** Portfolio Management System.
- **OMS / EMS:** Order / Execution Management System.
- **IBOR / ABOR / PBOR:** investment, accounting and performance books of record.
- **NAV:** Net Asset Value.
- **AUM:** Assets under management.
- **Benchmark:** reference index or target used to compare performance and risk.
- **Tracking error:** how much a portfolio deviates from its benchmark.
- **Attribution:** explaining performance by asset allocation, selection, factor, currency, sector or other effects.
- **VaR / stress testing:** risk measures and scenario analysis.
- **Mandate / restriction:** investment rules for a client or fund.
- **Reconciliation:** resolving differences between internal records, custodian records, accounting, trading and reporting systems.
- **Golden source:** authoritative source for a data object such as position, price, security master, client, portfolio or benchmark.

### Sharp Domain Questions To Ask

Use one or two, not all:

1. "Où sont aujourd'hui les plus gros frottements dans la chaîne front-to-back: décision d'investissement, ordres, positions, risque, performance, accounting ou reporting ?"
2. "Quelle est la source de vérité pour les positions, les prix et les benchmarks ?"
3. "Quels contrôles sont encore trop manuels aujourd'hui dans les réconciliations ou le reporting ?"
4. "Est-ce que Mirabaud Asset Management a des enjeux private markets, alternatives ou stratégies moins liquides qui changent la façon de gérer la donnée et le risque ?"
5. "Quels outils sont imposés par le groupe, et où l'Asset Management garde-t-il une autonomie de choix ?"

## Topics To Prepare Tonight

- [ ] Re-read the Mirabaud JD and your cover letter. Your best phrasing is already there.
- [ ] Read the Asset Management Ramp-Up Resources section above, especially Aladdin, IBOR/ABOR/PBOR, NAV, risk, performance and reconciliation vocabulary.
- [ ] Prepare a 2-minute FlowBank story: scope, budget, ExCo, AWS, Core Banking, CRM, data platform.
- [ ] Prepare a 90-second Pictet Asset Management story: security constraints, EKS, Helm, Terraform, SRE.
- [ ] Prepare a 90-second UBP story: IT audit, IAM bug, remediation, governance.
- [ ] Prepare a transition plan with Pierre: systems, vendors, incidents, contracts, implicit knowledge.
- [ ] Prepare one AI example, but make it controlled and banking-safe.
- [ ] Decide your salary floor for this specific role before walking in. Profile target is CHF 230k TC, minimum CHF 160k, but scope may justify anchoring high.

## Red Flags To Probe

- Is the role true IT ownership for Asset Management, or mostly coordination under group IT?
- How much of the work is daily support / escalation versus strategy and transformation?
- What budget authority exists?
- Who owns infrastructure decisions: Asset Management IT, group IT, or external providers?
- Is Pierre's knowledge documented, and how much transition time is available?
- Are they hiring because of retirement only, or also because the function needs transformation?
- Are there open audit, risk, cyber, data-quality, or vendor issues?
- Does the role have a real seat with the COO and senior business stakeholders?

## Things Not To Volunteer

- Do not open with compensation.
- Do not volunteer the FINMA enforcement topic. Be prepared if asked about governance/risk, but do not bring reputational issues into the conversation unprompted.
- Do not make Mirabaud sound "small" compared with FlowBank/Ripple. Frame it as a focused, high-trust environment where breadth and pragmatism matter.
- Do not overplay AI. Their JD says AI-related initiatives, but the role buys continuity, governance, budget, architecture, and stakeholder trust first.
- Do not imply you are only interested if the role becomes CTO-shaped. Instead: "scope, autonomy, impact, and business proximity."

## Closing Statement

Use this near the end if the conversation went well:

> Ce qui me plaît dans ce rôle, c'est qu'il demande exactement l'équilibre que j'aime: comprendre le business, garder un environnement IT robuste, structurer le run et la transformation, challenger les fournisseurs, et apporter de l'innovation de manière pragmatique. J'ai déjà porté ces sujets dans des environnements financiers genevois, et je pense pouvoir sécuriser la transition avec Pierre tout en donnant à Mirabaud Asset Management une trajectoire IT très claire pour les prochaines années.

## Follow-Up Draft After The Interview

Subject: Merci pour l'échange - Responsable IT Asset Management

Bonjour Madame Bovat,

Merci encore pour l'organisation de l'entretien avec M. Ducret et M. Antoni.

J'ai apprécié l'échange autour du rôle de responsable IT pour Mirabaud Asset Management, en particulier l'équilibre entre continuité opérationnelle, gouvernance, relation métier, fournisseurs et transformation digitale. La discussion a confirmé mon intérêt pour le poste et pour le type de mandat: une fonction IT proche du business, pragmatique, fiable et capable d'accompagner l'évolution de l'Asset Management.

Je reste bien entendu disponible pour la suite du processus.

Meilleures salutations,

Thibault Fouache
