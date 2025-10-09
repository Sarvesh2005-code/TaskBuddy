# TaskBuddy Roadmap

This roadmap captures the high-level milestones and expected timeline for the TaskBuddy MVP. Dates are suggested and should be adjusted to the team's availability.

## Milestones

Milestone 1 — Backend MVP (2 days)
- Implement Express.js server
- CRUD API: GET /tasks, POST /tasks, PUT /tasks/:id, DELETE /tasks/:id
- JSON-backed persistent storage

Milestone 2 — Frontend Scaffold & Core Components (3 days)
- Initialize Vite + React + Tailwind
- Implement Header, TaskBoard, TaskCard, AddTaskForm
- Basic styling and responsive layout

Milestone 3 — Integration & Polishing (2 days)
- Connect frontend to backend
- Verify CRUD flows end-to-end
- Add validation and error handling

Milestone 4 — Testing & QA (1-2 days)
- Unit tests for backend routes
- Manual QA across desktop and mobile
- Fix critical bugs

Milestone 5 — Documentation & Handover (1 day)
- Finalize README and PM artifacts
- Prepare `docs/pm-handover.md` for stakeholders

## v2 Roadmap — Collaboration & UI Refresh

- Milestone v2.1 — Collaboration Foundations (0.5 day)
  - CODEOWNERS, CONTRIBUTING, labels, PR template update
  - CI: FE build + BE sanity check
- Milestone v2.2 — UI/UX Design Refresh (0.5 day)
  - Update design doc with spacing, color usage, states
  - Plan component structure (no breaking scope)
- Milestone v2.3 — Frontend Enhancements (1 day)
  - Componentize board; add priority filter and clear-completed
  - Keep localStorage and native DnD
- Milestone v2.4 — Backend Minor Update (0.25 day)
  - Add `/version` endpoint `{ version: "v2" }`

## Suggested timeline (example)
- Week 1: Milestone 1 & 2
- Week 2: Milestone 3, Milestone 4, Milestone 5

## Success Metrics
- Backend APIs fully implemented and tested
- Frontend reflects real-time task state and persists changes
- MVP is responsive and performant on common devices

