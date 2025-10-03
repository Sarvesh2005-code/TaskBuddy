TaskBuddy – Product Manager Plan & PDR

1. Project Overview
Project Name: TaskBuddy
Project Type: Web Application – Task Management Tool
Project Description:
TaskBuddy is a modern task management tool designed to help users organize their daily tasks in a visually clear and interactive manner. Tasks can be created, updated, deleted, and tracked across three columns: To Do, Doing, and Done. The platform is responsive, allowing seamless use on desktop and mobile devices.
Goals:

Enable users to manage tasks efficiently
Provide a real-time dynamic task board
Ensure persistent task storage via backend API
Create a scalable and modular architecture for future enhancements

Target Users:

Students
Professionals
Teams looking for lightweight task management

Technology Stack:

Frontend: React (Vite) + TailwindCSS
Backend: Node.js + Express
Storage: JSON file (future-proof for database integration)
API Communication: RESTful API using Axios


2. Product Design & Requirements (PDR)
2.1 Functional Requirements

Task Management:

Create new tasks with title and description
Edit existing tasks
Delete tasks
Change task status: To Do → Doing → Done


Task Board:

Display tasks in three columns based on status
Dynamically update frontend when backend changes occur


API Endpoints:

GET /tasks → Fetch all tasks
POST /tasks → Create a task
PUT /tasks/:id → Update task
DELETE /tasks/:id → Delete task




2.2 Non-Functional Requirements

Performance: Fast loading times and smooth UI interactions
Responsiveness: Works seamlessly on desktop, tablet, and mobile
Scalability: Easy to migrate JSON storage to a database
Security: Enable CORS only for frontend origin
Maintainability: Modular code structure for frontend and backend


2.3 User Interface / UX Design

Header: Displays app name and navigation
Task Board: Three columns (To Do, Doing, Done)
Task Cards: Show title, description, status, edit/delete buttons
Add Task Form: Input fields for title + description with submit button
Responsive Layout: Grid for desktop, stacked columns for mobile

Color Palette & Styles:

Header: Blue (#3B82F6)
Task Columns: Gray (#E5E7EB)
Task Cards: White (#FFFFFF) with shadows and rounded corners
Buttons: Blue (#3B82F6) for primary, Red (#EF4444) for delete


2.4 Optional Testing

Unit tests for backend API routes
Verify CRUD operations using Postman or automated tests
Ensure frontend reflects changes correctly


3. Detailed Project Plan (Role-Based)
3.1 Product Manager (You)
Responsibilities:

Define project scope and client requirements
Create PDR and project roadmap
Assign tasks to developers/designers/testers
Track progress and ensure deliverables
Ensure client satisfaction

Deliverables:

PDR document
Project roadmap & timeline
Feature list and milestone plan


3.2 Frontend Developer
Responsibilities:

Setup React project using Vite
Implement TailwindCSS for styling
Build UI components:

Header
TaskBoard
TaskCard
AddTaskForm


Integrate frontend with backend API
Ensure responsive design

Deliverables:

Fully functional frontend
Clean, modular, reusable React components
API integration code
Mobile and desktop-friendly UI

Commit Examples:

feature: setup React project with TailwindCSS
feature: create header component
feature: add task card component
feature: integrate frontend with backend API


3.3 Backend Developer
Responsibilities:

Setup Node.js + Express server
Implement API routes for CRUD operations
Handle data storage using JSON file
Enable CORS for frontend communication
Ensure proper error handling

Deliverables:

Backend server ready at http://localhost:5000
Fully functional API: GET, POST, PUT, DELETE /tasks
Persistent task storage

Commit Examples:

feature: setup express server with CORS
feature: implement task CRUD API
feature: add JSON file storage for tasks


3.4 QA / Tester
Responsibilities:

Test backend API using Postman or automated scripts
Test frontend UI components
Ensure all features work across devices and browsers
Report bugs and suggest fixes

Deliverables:

Test cases and reports
Verified working CRUD operations
Verified responsive UI

Commit Examples:

test: add backend API test cases
test: verify frontend task CRUD functionality


3.5 Documentation Specialist
Responsibilities:

Write README.md with:

Project overview
Features
Setup instructions
Tech stack


Maintain PM plan & PDR
Prepare documentation for client delivery

Deliverables:

README.md
docs/product_manager_plan.md

Commit Examples:

docs: add README with project overview
docs: add product manager plan and PDR


4. Project Timeline / Milestones



Milestone                             Task                           Duration

Milestone 1                 Backend Setup & API                       2 days              

Milestone 2                 Frontend Setup & Components               3 days              

Milestone 3                 Frontend-Backend Integration              2 days                  

Milestone 4                 Testing & Bug Fixes                       1-2 days            

Milestone 5                 Documentation & Final Delivery            1 day               



Total Estimated Duration: 9–10 days

5. Commit Strategy

Pattern: <type>: <short description>
Types: feature, fix, docs, test
Example Commits:

feature: setup express server with CORS
feature: add task card component
docs: add product manager plan and PDR




6. Optional Enhancements (Future Scope)

Add user authentication (login/signup)
Drag & drop tasks between columns
Store tasks in a database (PostgreSQL / MongoDB)
Add due dates, priorities, and notifications
Dark mode UI


7. File to Commit This PDR
File: docs/product_manager_plan.md
Commit Command:
git add docs/product_manager_plan.md
git commit -m "docs: add product manager plan and PDR"
