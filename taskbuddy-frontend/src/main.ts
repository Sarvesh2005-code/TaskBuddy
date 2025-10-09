import './style.css'

const appRoot = document.querySelector<HTMLDivElement>('#app')!

appRoot.innerHTML = `
  <div class="min-h-screen flex flex-col">
    <header class="px-6 py-4 shadow-sm bg-surface">
      <h1 class="text-2xl font-bold text-primary">TaskBuddy</h1>
    </header>
    <main class="flex-1 p-6 bg-background">
      <div class="max-w-6xl mx-auto">
        <form id="add-task-form" class="mb-6 bg-white rounded-md shadow-sm p-4 grid grid-cols-1 md:grid-cols-4 gap-3">
          <input id="title" type="text" placeholder="Task title" class="border rounded-md px-3 py-2 col-span-1 md:col-span-1" required />
          <input id="description" type="text" placeholder="Description" class="border rounded-md px-3 py-2 col-span-1 md:col-span-2" />
          <select id="priority" class="border rounded-md px-3 py-2 col-span-1">
            <option>Low</option>
            <option selected>Medium</option>
            <option>High</option>
          </select>
          <button type="submit" class="bg-primary text-white rounded-md px-4 py-2 md:col-span-1">Add Task</button>
        </form>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <section class="bg-white rounded-md shadow-sm p-4">
            <h2 class="font-semibold mb-2">To Do</h2>
            <div id="col-todo" class="space-y-2 min-h-24 border border-transparent rounded" data-status="todo"></div>
          </section>
          <section class="bg-white rounded-md shadow-sm p-4">
            <h2 class="font-semibold mb-2">In Progress</h2>
            <div id="col-inprogress" class="space-y-2 min-h-24 border border-transparent rounded" data-status="inprogress"></div>
          </section>
          <section class="bg-white rounded-md shadow-sm p-4">
            <h2 class="font-semibold mb-2">Done</h2>
            <div id="col-done" class="space-y-2 min-h-24 border border-transparent rounded" data-status="done"></div>
          </section>
        </div>
      </div>
    </main>
  </div>
`

type Task = {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'todo' | 'inprogress' | 'done';
}

const STORAGE_KEY = 'taskbuddy_tasks_v1'

let currentFilter: 'All' | 'Low' | 'Medium' | 'High' = 'All'

function readTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Task[]) : []
  } catch {
    return []
  }
}

function writeTasks(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

function createId() {
  return Math.random().toString(36).slice(2, 10)
}

function render() {
  const tasks = readTasks()
  const visible = tasks.filter((t) => currentFilter === 'All' || t.priority === currentFilter)
  const columns: Record<Task['status'], HTMLElement> = {
    todo: document.getElementById('col-todo') as HTMLElement,
    inprogress: document.getElementById('col-inprogress') as HTMLElement,
    done: document.getElementById('col-done') as HTMLElement,
  }
  ;(['todo', 'inprogress', 'done'] as Task['status'][]).forEach((s) => (columns[s].innerHTML = ''))

  for (const task of visible) {
    const el = document.createElement('div')
    el.className = 'p-3 rounded-md border shadow-sm bg-white cursor-move'
    el.draggable = true
    el.dataset.id = task.id
    el.innerHTML = `
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="font-medium">${escapeHtml(task.title)}</div>
          ${task.description ? `<div class="text-sm text-gray-600">${escapeHtml(task.description)}</div>` : ''}
          <div class="mt-1 text-xs"><span class="px-2 py-0.5 rounded bg-surface">${task.priority}</span></div>
        </div>
        <div class="flex gap-2">
          <button data-action="edit" class="text-primary text-sm">Edit</button>
          <button data-action="delete" class="text-red-600 text-sm">Delete</button>
        </div>
      </div>
    `

    // drag events
    el.addEventListener('dragstart', (e) => {
      e.dataTransfer?.setData('text/plain', task.id)
      ;(e.target as HTMLElement).classList.add('opacity-70')
    })
    el.addEventListener('dragend', (e) => {
      ;(e.target as HTMLElement).classList.remove('opacity-70')
    })

    // actions
    el.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.dataset.action === 'delete') {
        const next = readTasks().filter((t) => t.id !== task.id)
        writeTasks(next)
        render()
      }
      if (target.dataset.action === 'edit') {
        const title = prompt('Edit title', task.title) ?? task.title
        const description = prompt('Edit description', task.description) ?? task.description
        const next = readTasks().map((t) => (t.id === task.id ? { ...t, title, description } : t))
        writeTasks(next)
        render()
      }
    })

    columns[task.status].appendChild(el)
  }

  // wire droppable columns
  Object.values(columns).forEach((col) => {
    col.addEventListener('dragover', (e) => {
      e.preventDefault()
      col.classList.add('border-primary')
    })
    col.addEventListener('dragleave', () => col.classList.remove('border-primary'))
    col.addEventListener('drop', (e) => {
      e.preventDefault()
      col.classList.remove('border-primary')
      const id = e.dataTransfer?.getData('text/plain')
      if (!id) return
      const status = col.dataset.status as Task['status']
      const next = readTasks().map((t) => (t.id === id ? { ...t, status } : t))
      writeTasks(next)
      render()
    })
  })
}

function escapeHtml(str: string) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

// form handlers
const form = document.getElementById('add-task-form') as HTMLFormElement
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const title = (document.getElementById('title') as HTMLInputElement).value.trim()
  const description = (document.getElementById('description') as HTMLInputElement).value.trim()
  const priority = (document.getElementById('priority') as HTMLSelectElement).value as Task['priority']
  if (!title) return
  const newTask: Task = { id: createId(), title, description, priority, status: 'todo' }
  const next = [newTask, ...readTasks()]
  writeTasks(next)
  ;(e.target as HTMLFormElement).reset()
  render()
})

// seed example if empty
if (readTasks().length === 0) {
  writeTasks([
    { id: createId(), title: 'Design Homepage', description: 'Wireframes and mockups', priority: 'Medium', status: 'todo' },
    { id: createId(), title: 'Implement API', description: 'Build CRUD routes', priority: 'High', status: 'inprogress' },
    { id: createId(), title: 'Setup Project', description: 'Init repo and docs', priority: 'Low', status: 'done' },
  ])
}

// filter controls
const headerEl = document.querySelector('header') as HTMLElement
if (headerEl) {
  const controls = document.createElement('div')
  controls.className = 'mt-3 flex items-center gap-3'
  controls.innerHTML = `
    <label class="text-sm">Filter:</label>
    <select id="priority-filter" class="border rounded-md px-2 py-1">
      <option>All</option>
      <option>Low</option>
      <option selected>Medium</option>
      <option>High</option>
    </select>
    <button id="clear-completed" class="ml-2 text-sm px-3 py-1 rounded bg-red-600 text-white">Clear Completed</button>
  `
  headerEl.appendChild(controls)

  const filterSelect = document.getElementById('priority-filter') as HTMLSelectElement
  filterSelect.value = currentFilter
  filterSelect.addEventListener('change', () => {
    currentFilter = filterSelect.value as typeof currentFilter
    render()
  })

  const clearBtn = document.getElementById('clear-completed') as HTMLButtonElement
  clearBtn.addEventListener('click', () => {
    const next = readTasks().filter((t) => t.status !== 'done')
    writeTasks(next)
    render()
  })
}

render()
