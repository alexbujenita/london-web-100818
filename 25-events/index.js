// get everything that I need from the page
const formEl = document.querySelector('#form')
const inputEl = document.querySelector('#todo-input')
const todoListEl = document.querySelector('#todo-list')

// lovely comment adding function right here
const addTodo = todo => {
  const commentEl = document.createElement('li')
  commentEl.className = 'list-item'
  commentEl.innerText = todo

  todoListEl.appendChild(commentEl)
}

// listen to that form, when it submits
// stop it from refreshing the page
// and put a comment on the page
formEl.addEventListener('submit', event => {
  event.preventDefault()
  const commentText = inputEl.value
  addTodo(commentText)
  inputEl.value = ''
})

// global listener that deletes a todo item when double-clicked
document.addEventListener('dblclick', event => {
  if (event.target.className === 'list-item') {
    event.target.remove()
  }
})

// gloal listener that toggles the 'completed' class
// on a todo item when clicked
document.addEventListener('click', event => {
  console.log("I'm the document")
  if (event.target.classList.contains('list-item')) {
    event.target.classList.toggle('completed')
  }
})

/* event bubbling */
// evens bubbble up when triggered
// from the deepest child all the way to the top
document.querySelector('#parent').addEventListener('click', event => {
  console.log("I'm the parent")
})
document.querySelector('#child').addEventListener('click', event => {
  console.log("I'm the child")
})
document.querySelector('#grandchild').addEventListener('click', event => {
  // event.stopPropagation() // use this to prevent events from bubbling
  console.log("I'm the grandchild")
})
