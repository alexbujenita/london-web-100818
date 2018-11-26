const tasksUrl = 'http://localhost:3000/tasks'

const getTasks = () =>
  fetch(tasksUrl)
    .then(resp => resp.json())

const createTask = task =>
  fetch(tasksUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(task)
  }).then(resp => resp.json())
