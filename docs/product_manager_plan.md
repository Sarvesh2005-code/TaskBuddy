# TaskBuddy — Product Manager Plan

## Overview
Project: TaskBuddy
Type: Web Application (Task management board)

TaskBuddy helps users create, edit, and track tasks across three columns: To Do, Doing, and Done. It aims to be responsive, fast, and simple for individuals and small teams.

## Goals
- Deliver a working MVP with CRUD APIs and a responsive React frontend.
- Ensure persistent storage (JSON file for MVP, easy DB migration later).
- Provide clear documentation and testing artifacts.

## Scope (MVP)
- Create, read, update, delete tasks
- Task board with three columns (To Do, Doing, Done)
- API: GET /tasks, POST /tasks, PUT /tasks/:id, DELETE /tasks/:id
- Responsive UI using React + TailwindCSS

## Team & Roles
- Product Manager: Sarvesh — requirements, roadmap, reviews
- Frontend: Sarvesh — React + Tailwind components
- Backend: Bhushan — Node.js + Express APIs
- UI/UX: Bhushan — wireframes and assets
- Tester: Sarvesh — API and UI tests

## Deliverables
- `docs/product_manager_plan.md` (this file)
- `README.md` - project overview and quickstart
- `docs/roadmap.md` - milestone timeline
- `docs/task-backlog.md` - backlog and assignments
- `docs/milestones.md` - sprint breakdown
- `docs/qa-checklist.md` - QA and testing checklist
- `docs/pm-handover.md` - final handover summary

## Acceptance Criteria
- Backend runs on `http://localhost:5000` and implements CRUD routes
- Frontend connects to backend and displays tasks in three columns
- Tasks persist across server restarts (JSON file or DB)
- Mobile responsive layout verified on typical breakpoints

## Risks & Mitigations
- Risk: JSON file concurrency issues — Mitigation: serialize writes, consider moving to a DB if usage increases.
- Risk: CORS misconfiguration — Mitigation: restrict CORS to frontend origin in dev and prod.
- Risk: Scope creep — Mitigation: freeze MVP feature list; add enhancements to backlog.

## Communication & Workflow
- Branching: `main` (stable), `develop` (integration), `frontend/*`, `backend/*`, `uiux/*`, `tester/*`.
- PR reviews required for merging into `develop`.
- Use issues for tasks; label with `frontend`, `backend`, `bug`, `enhancement`.
### V2 Collaboration Rules
- Branch naming: `frontend/v2/*`, `backend/v2/*`, `docs/v2/*`
- CODEOWNERS enforce review from role owner
- CI gates: FE build, BE sanity-check

## Plan of Action (next 7 days)
1. Backend: basic Express server with CRUD (2 days)
2. Frontend: Vite + React + Tailwind scaffolding (1 day)
3. Frontend components: Header, TaskBoard, TaskCard, AddTaskForm (2 days)
4. Integration and polish (1 day)
5. Testing and docs (1 day)

## Development v2 — Collaboration-Focused Update

Scope: Keep MVP simple (no auth), focus on GitHub collaboration and UI refresh.

- Collaboration
  - Branch naming: `frontend/v2/*`, `backend/v2/*`, `docs/v2/*`
  - CODEOWNERS: `/backend/**` → Bhushan; `/taskbuddy-frontend/**`, `/docs/**` → Sarvesh
  - CONTRIBUTING: commit prefixes, PR review rules, CI must pass
- CI
  - Frontend: install and build Vite app
  - Backend: install and sanity-check server source; no server startup in CI
- Frontend (localStorage-first)
  - Refactor to minimal components: Header, AddTaskForm, Column, TaskCard
  - Add priority filter and clear-completed for Done column
  - Preserve native drag-and-drop, keep performance simple
- Backend (lightweight)
  - Add `/version` endpoint returning `{ version: "v2" }`

Roles for v2
- Product Manager: Sarvesh — docs, workflow, CI, reviews
- UI/UX + Backend: Bhushan — design refresh notes, `/version` endpoint
- Frontend: Sarvesh — componentization, filters, clear-completed


---

Created by Product Manager — Sarvesh
