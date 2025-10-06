import './style.css'

const appRoot = document.querySelector<HTMLDivElement>('#app')!

appRoot.innerHTML = `
  <div class="min-h-screen flex flex-col">
    <header class="px-6 py-4 shadow-sm bg-surface">
      <h1 class="text-2xl font-bold text-primary">TaskBuddy</h1>
    </header>
    <main class="flex-1 p-6 bg-background">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <section class="bg-white rounded-md shadow-sm p-4">
            <h2 class="font-semibold mb-2">To Do</h2>
            <div id="col-todo" class="space-y-2"></div>
          </section>
          <section class="bg-white rounded-md shadow-sm p-4">
            <h2 class="font-semibold mb-2">In Progress</h2>
            <div id="col-inprogress" class="space-y-2"></div>
          </section>
          <section class="bg-white rounded-md shadow-sm p-4">
            <h2 class="font-semibold mb-2">Done</h2>
            <div id="col-done" class="space-y-2"></div>
          </section>
        </div>
      </div>
    </main>
  </div>
`
