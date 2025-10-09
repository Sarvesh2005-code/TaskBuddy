# TaskBuddy UI/UX Design Documentation

## Design Philosophy
TaskBuddy embraces a minimalist exotic theme, combining clean layouts with sophisticated colors inspired by nature. The design prioritizes:
- Clarity and readability
- Subtle animations for feedback
- Consistent spacing and typography
- Accessibility and responsive design

## Color Palette
- Primary (Deep Teal #006D77): Headers and primary actions
- Secondary (Sage #83C5BE): Supporting elements
- Accent (Coral #E29578): Highlights and important actions
- Background (Sand #FFDDD2): Main background
- Surface (Pearl #EDF6F9): Cards and containers
- Text (Deep Gray #006466): Main text color

## Components

### Header
- Minimalist design with app name
- Subtle shadow for depth
- Future: Add user profile and settings

### Task Board
- Three-column layout (To Do, Doing, Done)
- Responsive grid system
- Column headers with subtle borders
- Future: Add drag-and-drop support

### Task Cards
- Clean white background
- Soft shadows on hover
- Title and description layout
- Future: Add priority indicators and due dates

### Add Task Form
- Centered modal design
- Clear input fields
- Validation feedback
- Future: Add rich text editor for descriptions

## Responsive Design
- Mobile: Single column, stacked layout
- Tablet: Two columns when space permits
- Desktop: Full three-column layout

## Accessibility
- WCAG 2.1 compliant color contrast
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly headings

## Future Enhancements
1. Dark theme support
2. Custom task card colors
3. Compact/expanded view options
4. Progress indicators
5. Priority badges

## V2 Design Refresh (Guidelines)
- Spacing: Increase container padding to improve readability on desktop (16–24px)
- Typography: Maintain Inter; use 700 for headings, 500 for key labels
- Colors: Continue Minimalist Exotic palette; emphasize `--color-primary` for actions
- States: Define hover/active/focus overlays using subtle elevation and border emphasis
- Components:
  - Header: sticky, subtle shadow
  - AddTaskForm: 4-column responsive grid; clean validation states
  - Columns: clear droppable affordance (border highlight on drag over)
  - TaskCard: concise content hierarchy; action buttons visible on hover
- Responsiveness: Single column at < 640px; two columns at >= 768px; three at >= 1024px

---
Created by: bhushanzod
Date: October 3, 2025