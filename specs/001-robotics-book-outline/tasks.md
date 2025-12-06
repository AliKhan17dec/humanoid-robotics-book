# Tasks: Physical AI & Humanoid Robotics Book

**Input**: Design documents from `/specs/001-robotics-book-outline/`

## Phase 1: Setup (Shared Infrastructure)

- [X] T001 Initialize Docusaurus project in the `docs/` directory.
- [X] T002 Configure `docusaurus.config.js` with the book title, tagline, and theme.
- [X] T003 [P] Create the basic directory structure for the book inside `docs/` as per `plan.md`.

---

## Phase 2: Foundational (Blocking Prerequisites)

- [X] T004 [P] Conduct research on Simulation Engine Choice (Gazebo vs. Isaac Sim vs. Unity) and document the decision in `research.md`.
- [X] T005 [P] Conduct research on Hardware Approach (Local vs. Cloud vs. Hybrid) and document the decision in `research.md`.
- [X] T006 [P] Conduct research on Example Robot Selection (Unitree Go2 vs. G1 vs. Hiwonder) and document the decision in `research.md`.
- [X] T007 [P] Conduct research on Navigation Stack (Nav2 vs. Isaac Navigation) and document the decision in `research.md`.
- [X] T008 [P] Conduct research on VLA Pipeline (Whisper+LLM vs. VLM vs. RL) and document the decision in `research.md`.
- [X] T009 Create the central glossary file at `docs/glossary.mdx`.

---

## Phase 3: User Story 1 - Understand the Robotic Nervous System (ROS 2) 🎯 MVP

**Goal**: Teach ROS 2 as the software nervous system for humanoids.
**Independent Test**: The user can complete the exercises in the ROS 2 module and successfully run the example code.

### Implementation for User Story 1

- [X] T010 [US1] Write the chapter "What is Physical AI & Why ROS 2 matters" in `docs/module1-ros2/01-intro.mdx`.
- [X] T011 [US1] Write the chapter "ROS 2 architecture" in `docs/module1-ros2/02-architecture.mdx`.
- [X] T012 [US1] Create code examples for ROS 2 nodes, topics, services, and actions in a new `code/module1` directory.
- [X] T013 [US1] Write the chapter "ROS 2 packages in Python (rclpy)" in `docs/module1-ros2/03-rclpy.mdx`.
- [X] T014 [US1] Write the chapter "URDF for humanoids" in `docs/module1-ros2/04-urdf.mdx`.
- [X] T015 [US1] Create diagrams for ROS 2 architecture and add them to the chapters.
- [X] T016 [US1] Create a mini-project for Module 1 that involves creating a simple ROS 2 package.
- [X] T017 [US1] Create an assessment for Module 1 in `docs/module1-ros2/05-assessment.mdx`.

---

## Phase 4: User Story 2 - Build a Digital Twin (Gazebo & Unity)

**Goal**: Build simulation environments for humanoid robots.
**Independent Test**: The user can create a simple simulation environment and spawn a robot in it.

### Implementation for User Story 2

- [X] T018 [US2] Write the chapter "Why robot simulation matters" in `docs/module2-digital-twin/01-intro.mdx`.
- [X] T019 [US2] Write the chapter "Setting up Gazebo + Extensions" in `docs/module2-digital-twin/02-gazebo.mdx`.
- [X] T020 [US2] Create code examples for spawning robots in Gazebo in the `code/module2` directory.
- [X] T021 [US2] Write the chapter "Creating environments in Unity" in `docs/module2-digital-twin/03-unity.mdx`.
- [X] T022 [US2] Create diagrams for simulation concepts and add them to the chapters.
- [X] T023 [US2] Create a mini-project for Module 2 that involves creating a custom simulation world.
- [X] T024 [US2] Create an assessment for Module 2 in `docs/module2-digital-twin/04-assessment.mdx`.

---

## Phase 5: User Story 3 - Implement the AI-Robot Brain (NVIDIA Isaac)

**Goal**: Teach perception, navigation, training, and sim-to-real.
**Independent Test**: The user can run a simple perception or navigation example using Isaac ROS.

### Implementation for User Story 3

- [X] T025 [US3] Write the chapter "Isaac Sim basics" in `docs/module3-nvidia-isaac/01-intro.mdx`.
- [X] T026 [US3] Write the chapter "Isaac ROS pipelines" in `docs/module3-nvidia-isaac/02-isaac-ros.mdx`.
- [X] T027 [US3] Create code examples for Isaac Sim and Isaac ROS in the `code/module3` directory.
- [X] T028 [US3] Write the chapter "VSLAM + Navigation (Nav2)" in `docs/module3-nvidia-isaac/03-navigation.mdx`.
- [X] T029 [US3] Create diagrams for perception and navigation pipelines.
- [X] T030 [US3] Create a mini-project for Module 3 that involves training a simple perception model.
- [X] T031 [US3] Create an assessment for Module 3 in `docs/module3-nvidia-isaac/04-assessment.mdx`.

---

## Phase 6: User Story 4 - Create Vision-Language-Action Systems (VLA)

**Goal**: Use LLMs + vision + robotics to build natural human-robot interactions.
**Independent Test**: The user can run the capstone project and see the humanoid robot respond to a voice command.

### Implementation for User Story 4

- [X] T032 [US4] Write the chapter "Voice-to-Action (Whisper → Intent)" in `docs/module4-vla/01-whisper.mdx`.
- [X] T033 [US4] Write the chapter "Natural-language planners for robots" in `docs/module4-vla/02-planners.mdx`.
- [X] T034 [US4] Create code examples for VLA systems in the `code/module4` directory.
- [X] T035 [US4] Create diagrams for VLA pipelines.
- [X] T036 [US4] Create the capstone project that integrates all modules in `docs/capstone/index.mdx`.
- [X] T037 [US4] Create an assessment for Module 4 in `docs/module4-vla/03-assessment.mdx`.

---

## Phase 7: Polish & Cross-Cutting Concerns

- [X] T038 [P] Write the main introduction for the book in `docs/intro.mdx`.
- [X] T039 [P] Write the appendices for hardware and setup in `docs/appendices/`.
- [ ] T040 Review all chapters for technical accuracy, clarity, and consistency.
- [ ] T041 Test all code examples to ensure they run correctly.
- [X] T042 Set up GitHub Actions to automatically build and deploy the book to GitHub Pages.
- [X] T043 Populate and verify the central glossary at `docs/glossary.mdx`.
- [X] T044 [P] Create the `sidebar.js` file for Docusaurus.

---

## Dependencies & Execution Order

- **Phase 1 & 2**: Must be completed before any user story implementation.
- **User Stories (Phase 3-6)**: Can be implemented in parallel after Phase 2 is complete, but are presented here in priority order.
- **Phase 7**: Should be done after all user stories are complete.
