---
id: 0001
title: Create Project Constitution for Humanoid Robotics Book
stage: constitution
date: 2025-12-05
surface: agent
model: gemini
feature: none
branch: master
user: ammadkhan
command: /sp.constitution Project: Physical AI & Humanoid Robotics — AI/Spec-Driven Book Creation (Docusaurus + GitHub Pages)
labels: ["constitution", "setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
- .specify/templates/plan-template.md
- .specify/templates/spec-template.md
- .specify/templates/tasks-template.md
tests:
- none
---

## Prompt

/sp.constitution Project: Physical AI & Humanoid Robotics — AI/Spec-Driven Book Creation (Docusaurus + GitHub Pages)

Core Principles

Technical accuracy grounded in verified robotics, AI, and engineering sources

Conceptual clarity for a global audience with beginner-to-intermediate STEM background

Practical applicability for students who want to build real humanoid robotics systems

Reproducibility: all examples, formulas, and code must be testable and technically correct

Pedagogical progression: concepts must be introduced from simple → advanced in a structured learning path

Ethical responsibility: safety, risk management, and responsible AI/robotics practices must be emphasized

Key Standards
1. Source & Accuracy Standards

All factual claims, definitions, and technical explanations must be traceable to primary or highly reputable sources

Minimum 40% peer-reviewed research (journals such as Nature Robotics, IEEE Transactions, ACM, MDPI Robotics)

Remaining sources can include:

Robotics textbooks

Manufacturer datasheets (e.g., actuators, sensors, microcontrollers)

Reputable educational resources (MIT, Stanford, CMU, ETH Zürich)

Industry documentation (ROS, OpenAI Gym, NVIDIA Isaac, Boston Dynamics research)

2. Writing & Structure Standards

Tone: authoritative, educational, and technically correct

Writing clarity: Flesch-Kincaid Grade 9–11 (global readability)

All diagrams/code must be explained in plain English

Consistent terminology across chapters (AI, control systems, kinematics, sensors, etc.)

All formulas must include variable explanations

3. Citations & Formatting

Citation format: APA 7th edition

Every chapter must include references section

Images/diagrams must have attribution if reused

No AI-generated hallucinated citations—verification required

Constraints

Total book length: 15,000–25,000 words

Minimum 25 credible sources (10+ peer-reviewed)

Book structure must follow Docusaurus documentation format

Must be deployable to GitHub Pages through automated workflow

File output must include:

Markdown files for each chapter

Sidebar.js configuration

Static assets (images, diagrams, charts)

Safety section mandatory: covering robotics risks, mechanical safety, and AI alignment for physical systems

Success Criteria

All factual claims and equations verified against primary or reputable sources

No hallucinated references; all citations must resolve to real materials

Zero plagiarism (must pass plagiarism checking before publishing)

Smooth Docusaurus build & deployment to GitHub Pages

Chapters are logically structured, readable, and experimentally reproducible

The final book provides:

Real-world robotics knowledge

Hands-on, testable examples

Clear learning progression

Accurate and safe guidance for humanoid robotics and Physical AI

## Response snapshot

I have updated the project constitution and related templates.
- Created the constitution in `.specify/memory/constitution.md` with version 1.0.0.
- Updated `.specify/templates/plan-template.md` with constitution checks.
- Updated `.specify/templates/spec-template.md` with a constitution alignment note.
- Updated `.specify/templates/tasks-template.md` with guidance for constitution-aligned tasks.

## Outcome

- ✅ Impact: The project now has a clear constitution that will guide development. The templates have been updated to reflect the new constitution.
- 🧪 Tests: No tests were run.
- 📁 Files: 
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
  - .specify/templates/spec-template.md
  - .specify/templates/tasks-template.md
- 🔁 Next prompts: The user can now start creating features that align with the new constitution.
- 🧠 Reflection: The process of updating the constitution and propagating the changes to the templates was successful. The use of the `replace` tool was effective for updating the templates.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): None
- Next experiment (smallest change to try): None