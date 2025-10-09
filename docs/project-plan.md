# TaskBuddy Project Plan

## Roles & Responsibilities

- **Product Manager (Sarvesh)**
  - Creates and manages project documentation.
  - Defines branching strategy and workflow.
  - Reviews and merges pull requests.
  - Ensures project deadlines.

- **Frontend Developer (Sarvesh)**
  - Builds user interface using HTML, CSS, JS.
  - Connects with backend APIs.

- **Tester (Sarvesh)**
  - Writes test cases.
  - Validates frontend & backend features.
  - Reports bugs.

- **UI/UX Designer (Bhushan)**
  - Designs wireframes and prototypes.
  - Provides assets (colors, icons, styles).

- **Backend Developer (Bhushan)**
  - Implements server logic and APIs.
  - Connects to database.

---

## Branch Strategy
- `main` → stable version  
- `develop` → active integration  
- `frontend/*` → frontend features  
- `uiux/*` → UI/UX design changes  
- `backend/*` → backend APIs  
- `tester/*` → testing features  

### V2 Addendum
- Use `frontend/v2/*`, `backend/v2/*`, `docs/v2/*` branches
- CODEOWNERS: backend → Bhushan; frontend/docs → Sarvesh
- CI must pass before merge to `develop`

---

## Task Breakdown
1. **UI/UX (Bhushan)**
   - Create wireframe for Homepage.
   - Deliver CSS/Style guide.

2. **Frontend (Sarvesh)**
   - Build Homepage layout.
   - Add Task creation form.

3. **Backend (Bhushan)**
   - Create basic Express.js server.
   - Implement “Add Task” API.

4. **Tester (Sarvesh)**
   - Write sample test cases for Task API.
   - Test UI form validation.

---

## Workflow Example
- UI/UX commits design → Frontend pulls and implements → Backend provides API → Tester validates → PM merges into `develop`.
