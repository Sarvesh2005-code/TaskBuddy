# TaskBuddy

TaskBuddy is a lightweight task management web app (MVP) that helps users create, edit, delete, and track tasks across three columns: To Do, Doing, and Done. This repository currently contains project documentation and planning artifacts; application code (frontend/backend) can be added under `/frontend` and `/backend`.

---
**Tester Note (Sarvesh):** This is a test change made on the tester branch for workflow validation.
---

## Roles
- **Sarvesh** — Product Manager, Frontend, Tester
- **Bhushan** — UI/UX Designer, Backend

## Tech stack (planned)
- Frontend: React (Vite) + TailwindCSS
- Backend: Node.js + Express
- Storage: JSON file (MVP)

## Quickstart (development)
These are example steps; update paths if you scaffold `frontend/` and `backend/` folders.

1. Install Node.js (v18+ recommended).
2. Backend (if added):
   - cd backend; npm install; npm run dev
   - Server will listen on http://localhost:5000
3. Frontend (if added):
   - cd frontend; npm install; npm run dev
   - Visit the Vite dev server URL (usually http://localhost:5173)

## Branching & workflow
- `main` — stable releases
- `develop` — integration branch
- `frontend/*`, `backend/*`, `uiux/*`, `tester/*` — feature branches

### V2 Collaboration Flow
- Branches: `frontend/v2/*`, `backend/v2/*`, `docs/v2/*`
- PRs target `develop` and require one reviewer from the other role
- Conventional commit prefixes: `Frontend[Name]`, `Backend[Name]`, `Docs[Name]`, `Testing[Name]`
- Keep scope simple (no auth); focus on localStorage FE and small BE utilities

PRs should target `develop`. Tag PRs with `feature`, `fix`, `docs`, or `test` and request at least one reviewer.

## Project docs
- `docs/product_manager_plan.md` — PM plan & acceptance criteria
- `docs/project-plan.md` — project plan and roles

## License
MIT (add `LICENSE` file to declare)
