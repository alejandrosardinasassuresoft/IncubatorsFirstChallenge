# Prompt Notes - Spec Driven Development (SDD)

## Context

Working on **SW Challenge 1: Spec-Driven Development Basics** for a **Personal Task List API**.

Challenge goal:

- Learn and apply **Spec-Driven Development (SDD)**
- Avoid relying heavily on AI-generated implementation
- Use AI mainly for **questions, clarification, and understanding**
- Produce a complete specification package before coding

Required deliverables:

- `vision.md`
- `user-stories.md`
- `data-model.md`
- `openapi.yaml`
- Minimal REST API implementation
- Unit tests
- README documentation

---

## What is Spec-Driven Development (SDD)?

SDD is a development approach where the **specification is written first**, and implementation comes after.

Main principle:

> Define what the system must do before writing code.

Typical flow:

```text
Specification → User Stories → API Contract → Tests → Implementation
```

Difference with other approaches:

| Approach | Focus | First Artifact |
|----------|-------|----------------|
| TDD | Testing | Unit tests |
| BDD | Behavior | Gherkin scenarios |
| SDD | Specification | System contracts/spec |

Key idea:

Implementation should be a consequence of the specification.

---

## Important SDD Principles for This Challenge

### 1. Do not code too early

Avoid jumping directly into implementation.

The challenge evaluates:

> Specification discipline more than coding complexity.

### 2. Implement exactly what is specified

No extra features.

Allowed scope:

- Create task
- Edit task
- Delete task
- Mark task as completed

Avoid adding:

- Authentication
- Categories
- Priorities
- Due dates
- Tags
- Search
- Pagination
- Notifications

Principle:

> "Nothing more than the specification"

---

## Recommended Working Process

### Step 1 — Define Scope

Keep the project intentionally small.

Suggested entity:

```text
Task
- id
- title
- description (optional)
- completed
- createdAt
- updatedAt
```

Suggested endpoints:

```http
POST   /tasks
GET    /tasks
GET    /tasks/{id}
PUT    /tasks/{id}
DELETE /tasks/{id}
PATCH  /tasks/{id}/complete
```

---

### Step 2 — Create Repository Structure

Recommended structure:

```text
personal-task-list/

docs/
 ├── vision.md
 ├── user-stories.md
 ├── data-model.md
 └── openapi.yaml

src/
tests/

README.md
```

Do this before coding.

---

### Step 3 — Write `vision.md`

Purpose:

Define:

- What problem is solved
- Goals
- Non-goals
- Constraints

Example structure:

```md
# Vision Document

## Purpose

Simple API to manage personal tasks.

## Goals

- create tasks
- update tasks
- delete tasks
- mark completed

## Non Goals

- authentication
- reminders
- sharing
- categories

## Constraints

- REST API only
- no authentication
```

---

### Step 4 — Write `user-stories.md`

This is the most important artifact.

Each story should contain:

- User Story
- Acceptance Criteria
- Gherkin scenarios

Example:

```gherkin
Scenario: Create valid task

Given the user provides a valid title
When the task is created
Then the task should be stored
And marked as incomplete
```

Recommended stories:

- US-001 Create task
- US-002 Update task
- US-003 Delete task
- US-004 Complete task
- US-005 List tasks
- US-006 Get task by id

Also include negative scenarios:

```gherkin
Scenario: Update non-existing task
Given task does not exist
When user updates task
Then system returns 404
```

---

### Step 5 — Write `data-model.md`

Define:

- Entities
- Fields
- Types
- Business rules

Example:

| Field | Type | Required |
|--------|------|----------|
| id | uuid | yes |
| title | string | yes |
| description | string | no |
| completed | boolean | yes |

Business rules example:

- title is required
- title cannot be empty
- completed defaults to false

---

### Step 6 — Write `openapi.yaml`

Design API contract only after specs are ready.

Recommended order:

1. Schemas
2. Endpoints
3. Request/Response models
4. Status codes
5. Error responses

Important question:

> Can the API be implemented without inventing behavior?

If not:

The specification is incomplete.

---

### Step 7 — Consistency Review

Before coding, validate consistency.

Checklist:

#### Vision ↔ User Stories

Every goal has a story.

#### User Stories ↔ Data Model

Rules are represented.

#### User Stories ↔ OpenAPI

Every story has endpoint coverage.

#### OpenAPI ↔ Data Model

Fields match exactly.

No inconsistencies allowed.

---

### Step 8 — Start Implementation

Only after specs are finished.

Suggested simple architecture:

```text
Controller
Service
Repository (in-memory)
DTOs
Tests
```

Avoid overengineering.

Focus is SDD, not enterprise architecture.

---

### Step 9 — Implement Following the Spec

Rule:

> Do not improvise.

For every endpoint:

1. Read spec
2. Implement
3. Validate against user story
4. Add test

---

### Step 10 — Tests from Acceptance Criteria

Tests should come from Gherkin scenarios.

Example:

Gherkin:

```gherkin
Given task exists
When user marks task complete
Then task should be completed
```

Test:

```ts
it('should mark task as completed')
```

One test per expected behavior.

---

### Step 11 — README

Include:

- Installation
- Run commands
- Test commands
- Story validation process

Possible mapping:

| Story | Endpoint |
|--------|----------|
| US-001 | POST /tasks |
| US-002 | PUT /tasks/{id} |

---

## Final Recommended Order

Follow this exact order:

```text
1. vision.md
2. user-stories.md
3. data-model.md
4. openapi.yaml
5. consistency review
6. implementation
7. tests
8. README
```

Main learning objective:

> Think like a system designer before acting like a programmer.