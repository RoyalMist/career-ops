# Interview Prep — qiibee Head of AI & Automation

## "Tell us about an agent or automation you built that you're proud of"

### Setup (~15 sec)

At Bazzile, we have a real estate platform built on Elixir/Phoenix. Users browse properties on our mobile app. I wanted to push the experience further — what if a user could simply *talk* to an agent, describe what they're looking for, and get personalised property recommendations in a natural conversation?

### What I built (~45 sec)

I built a full voice-based real estate agent, end-to-end:

- **Speech-to-Text** captures the user's voice input — neighbourhood, budget, number of rooms, must-haves.
- **LLM layer** (Claude) interprets the intent, queries our property database via tool use, ranks results against the user's criteria, and formulates a conversational response.
- **Text-to-Speech** delivers the answer back as natural spoken audio.
- The whole orchestration runs on **Jido**, an Elixir-native agent framework, on top of our Phoenix backend. Elixir's supervision trees mean each conversation is its own isolated process — if one crashes, nothing else is affected. The concurrency model lets us handle STT, LLM calls, and TTS streaming in parallel without blocking.

### Why it matters (~30 sec)

- It taught me the **full agent loop**: perception (voice input) → reasoning (LLM + tool use) → action (property search + voice response). Not just chat — a real autonomous workflow.
- **Latency** was critical — users won't wait 5 seconds for a voice reply. I pipelined the STT→LLM→TTS chain and streamed TTS output as soon as the first tokens arrived.
- **Governance**: the agent must never hallucinate property details. I built guardrails so it only surfaces verified listings from our database.

### Tie back to qiibee (~15 sec)

This is exactly the kind of thing I'd bring to qiibee — taking a real business workflow, identifying where an agent creates leverage, architecting it end-to-end, and shipping it into production with proper guardrails. Whether it's a voice agent for customer support, an automation pipeline for sales, or a multi-agent system across teams.

---

## Key talking points to weave in naturally

- **Hands-on**: "I built this myself" — not managed, not directed, built.
- **Elixir + Jido**: fault tolerance, concurrency, supervision trees — differentiator vs. Python-based agent stacks.
- **Claude ecosystem**: tool use, structured outputs.
- **Production mindset**: latency, guardrails, no hallucinated data.
- **Storytelling**: the answer itself demonstrates the "communication & storytelling" must-have from the job description.

---

## "Have you built multi-agent pipelines using Claude or any other LLM?"

### Answer (~2 min)

Yes — and not limited to Claude. I've built multi-agent systems at three different levels:

**1. Bazzile — Elixir-native multi-agent with Jido (~45 sec)**

At Bazzile, the voice real estate agent I mentioned is actually part of a broader multi-agent pipeline. Jido is LLM-agnostic — each agent in the system can use whichever model fits its task. For example, one agent handles voice transcription, another does intent classification and property search via Claude, and another manages the conversational state and TTS output. Each agent runs as its own supervised Elixir process, communicating through message passing. If one fails, the supervisor restarts it without bringing down the pipeline. This is fundamentally different from Python-based orchestration where you're bolting concurrency onto a language that wasn't designed for it — in Elixir, multi-agent coordination is a natural extension of how the language already works.

**2. Scrypt — Claude Enterprise across the org (~30 sec)**

At Scrypt, I deployed Claude Enterprise as a company-wide multi-agent system. Multiple specialised agents integrated via Slack — one connected to Linear for project management, another to email and calendars, another tracking cross-functional dependencies between tech, sales and marketing. The executive team and all employees had always-on AI agents helping them navigate their workflows. This was less about code and more about designing the right agent boundaries, prompt architecture, and governance across teams.

**3. Ripple — n8n + Ollama for engineering intelligence (~30 sec)**

At Ripple, managing 50 engineers across Geneva and San Francisco, I needed visibility into what was actually happening across teams — not just what Jira tickets said. I built a multi-agent pipeline in n8n using local LLMs running on Ollama (GPT-4 open-source models). One agent aggregated activity from GitLab (commits, MRs, reviews), another pulled from Jira (sprint velocity, blockers, ticket flow), and a third connected to Workday (availability, leave, capacity). A synthesis agent then combined all of this into a unified view. This made roadmap forecasting and capacity planning dramatically easier — I could spot bottlenecks, rebalance squads, and give leadership accurate delivery predictions instead of gut-feel estimates. And because it ran on local models, there were zero data privacy concerns with employee information.

**4. Wonderful — Enterprise AI demos for private banks (~20 sec)**

At Wonderful, I built comprehensive multi-agent demos for private bank prospects — showing how different agents could handle client onboarding, document processing, and compliance checks as a coordinated pipeline. These included voice AI pilots where the agent pipeline spanned speech recognition through to structured output generation.

### Key differentiator to emphasise

The common thread: I'm not locked into one LLM or one framework. I choose the right model for each agent's task — Claude for reasoning-heavy work, smaller or local models for classification and routing, specialised models for voice. The orchestration layer (Jido/Elixir, or Claude Enterprise, or n8n depending on context) is what ties them together. That flexibility is exactly what a Head of AI needs — you're never one vendor update away from being stuck.
