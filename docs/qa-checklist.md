# QA Checklist — TaskBuddy

Use this checklist during testing and before merging PRs.

## Backend
- [ ] Server starts on `http://localhost:5000`
- [ ] GET /tasks returns 200 and valid JSON array
- [ ] POST /tasks creates a task and returns 201
- [ ] PUT /tasks/:id updates a task
- [ ] DELETE /tasks/:id removes a task
- [ ] Data persists across server restarts

## Frontend
- [ ] Dev server starts
- [ ] TaskBoard displays tasks in correct columns
- [ ] Add Task form validates inputs
- [ ] Edit and Delete actions work
- [ ] Frontend handles backend errors gracefully
- [ ] Priority filter toggles list correctly (All/Low/Medium/High)
- [ ] Clear-completed removes only Done tasks

## General
- [ ] Responsive at 320px, 768px, 1024px
- [ ] No console errors in dev tools
- [ ] Basic accessibility checks (labels, button roles)
