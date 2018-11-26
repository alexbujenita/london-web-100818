// get existing elements from the html
const formEl = document.querySelector('#create-task-form')
const taskInputEl = document.querySelector('#new-task-description')
const prioritySelectEl = document.querySelector('#priority')
const tasksEl = document.querySelector('#tasks')
const sortBySelectEl = document.querySelector('#sort-by')

// values for sorting by priority
// by convention, constants are usually WRITTEN_LIKE_THIS
// this lets readers know that these are constants
// and we don't expect them to change
const PRIORITY_VALUES = {
  low: 1,
  medium: 2,
  high: 3
}

// an object where we'll store all the data
// our app needs to keep track of in order to function
const state = {
  tasks: [],
  sortBy: ''
}

// add a single task
const addTask = task => {
  state.tasks.push(task)
}

// add multiple tasks
const addTasks = tasks => {
  tasks.forEach(task => addTask(task))
}

// render a single task
const renderTask = task => {
  const taskEl = document.createElement('li')
  taskEl.className = `task ${task.priority}`
  taskEl.innerText = task.text
  tasksEl.appendChild(taskEl)
}

// render multiple tasks
const renderTasks = tasks => {
  tasks.forEach(task => renderTask(task))
}

// clear the current list and add many tasks
const updateList = () => {
  tasksEl.innerHTML = ''
  renderTasks(state.tasks)
}

// listener for the form submission
const submitFormListener = event => {
  event.preventDefault()
  const task = {
    text: taskInputEl.value,
    priority: prioritySelectEl.value
  }
  createTask(task)
    .then(newTask => {
      addTask(newTask)
      renderTask(newTask)
      sortTasks()
    })
  formEl.reset()
}

// listen to form submission
formEl.addEventListener('submit', submitFormListener)

// sort all tasks based on current criteria selected
const sortTasks = () => {
  switch (state.sortBy) {
    case 'asc':
      state.tasks.sort((a, b) => 
        PRIORITY_VALUES[a.priority] - PRIORITY_VALUES[b.priority]
      )
      break
    case 'desc':
      state.tasks.sort((a, b) => 
	      PRIORITY_VALUES[b.priority] - PRIORITY_VALUES[a.priority]
      )
      break
    default:
      break
  }
  updateList()
}

// sort button listener
sortBySelectEl.addEventListener('change', () => {
  state.sortBy = sortBySelectEl.value
  sortTasks()
})

// get tasks from server, add them to state
// and put them on the page
getTasks()
	.then(tasks => {
		addTasks(tasks)
		updateList()
	})
