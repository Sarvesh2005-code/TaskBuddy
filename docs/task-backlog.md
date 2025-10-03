# TaskBuddy — Task Backlog

This backlog lists prioritized tasks for the MVP with owners, estimates, priority, and acceptance criteria.

## Sprint 1 — MVP Build (priority: High)

1. Backend: Scaffold Express server
   - Owner: Bhushan
   - Estimate: 1 day
   - Priority: High
   - Acceptance: Server starts on port 5000; health check route `/health` returns 200

2. Backend: Implement CRUD routes for tasks
   - Owner: Bhushan
   - Estimate: 1 day
   - Priority: High
   - Acceptance: GET /tasks, POST /tasks, PUT /tasks/:id, DELETE /tasks/:id work with JSON file persistence

3. Frontend: Scaffold Vite + React + Tailwind
   - Owner: Sarvesh
   - Estimate: 0.5 day
   - Priority: High
   - Acceptance: Frontend dev server runs; layout loads

4. Frontend: Header, TaskBoard, TaskCard, AddTaskForm
   - Owner: Sarvesh
   - Estimate: 2 days
   - Priority: High
   - Acceptance: Tasks display in three columns; user can add a task via form

5. Integration: Connect frontend to backend
   - Owner: Sarvesh & Bhushan
   - Estimate: 1 day
   - Priority: High
   - Acceptance: Create, edit, delete operations update frontend and persist on backend

## Sprint 2 — QA & Polish (priority: Medium)

6. Testing: Unit tests for backend routes
   - Owner: Sarvesh
   - Estimate: 0.5 day
   - Priority: Medium
   - Acceptance: Tests for GET/POST/PUT/DELETE pass locally

7. UI: Responsive adjustments and accessibility checks
   - Owner: Bhushan
   - Estimate: 0.5 day
   - Priority: Medium
   - Acceptance: Page is usable at 320px, 768px, 1024px widths

8. Docs: Finalize README and PM artifacts
   - Owner: Sarvesh
   - Estimate: 0.5 day
   - Priority: Medium
   - Acceptance: README contains quickstart and contribution guidance

## Backlog (nice-to-have)
- Drag & drop tasks between columns (owner: Sarvesh, estimate: 2 days)
- Add due dates and priorities (owner: Bhushan, estimate: 1 day)
- Authentication (owner: TBD, estimate: 3 days)

