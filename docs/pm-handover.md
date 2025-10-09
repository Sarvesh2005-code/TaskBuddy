# PM Handover — TaskBuddy

Prepared by: Sarvesh (Product Manager)
Date: (update before handover)

## Summary of Deliverables
- `docs/product_manager_plan.md` — PM plan & acceptance criteria
- `README.md` — Project overview and quickstart
- `docs/roadmap.md` — High-level milestones and timeline
- `docs/task-backlog.md` — Prioritized tasks with owners and estimates
- `docs/milestones.md` — Milestone targets and deliverables
- `docs/qa-checklist.md` — QA checklist for testing
- GitHub templates: Issue and PR templates in `.github/ISSUE_TEMPLATE` and `.github/PULL_REQUEST_TEMPLATE.md`
- Basic CI workflow at `.github/workflows/ci.yml`

## How to review and run
1. Clone the repo
2. Look at the `docs/` folder for plans, backlog, and milestones
3. When `backend/` and `frontend/` folders exist:
   - Run backend: `cd backend; npm install; npm run dev`
   - Run frontend: `cd frontend; npm install; npm run dev`

## Outstanding items (recommended next steps)
- v2: Add CODEOWNERS and CONTRIBUTING; keep CI simple (build FE, sanity-check BE)
- v2: UI/UX design refresh doc; Frontend componentization and filters
- v2: Backend `/version` endpoint; remain localStorage-first on FE

## Risks (summary)
- JSON file concurrency and corruption — consider using a simple DB for production (SQLite/Postgres)
- CORS misconfiguration — restrict origin in production
- Scope creep — follow the backlog and defer enhancements to future sprints

## Contacts
- Product Manager: Sarvesh (GitHub: Sarvesh2005-code)
- Backend / UI: Bhushan

## Sign-off
Please review the docs and sign off by commenting on the main issue or opening a PR against `develop` with your approval.

