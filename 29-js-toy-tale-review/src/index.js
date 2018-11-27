const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const addToyForm = document.querySelector('.add-toy-form')
const nameInput = document.querySelector('#name-input')
const imageInput = document.querySelector('#image-input')
const toyList = document.querySelector('#toy-collection')

let addToy = false

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

// add a single toy
const appendToy = toy => {
  const toyEl = document.createElement('div')
  toyEl.className = 'card'
  toyEl.innerHTML = `
    <h2>${toy.name}</h2>
    <img src='${toy.image}' class="toy-avatar" />
    <p class='likes'>${toy.likes} Likes</p>
    <button class="like-btn">Like <3</button>
  `
  const likesEl = toyEl.querySelector('.likes')
  const likeBtnEl = toyEl.querySelector('.like-btn')
  likeBtnEl.addEventListener('click', () => {
    toy.likes++
    updateToy(toy)
      .then((toyFromServer) => {
        likesEl.innerText = `${toyFromServer.likes} Likes`
      })
      .catch(() => alert('Unable to update likes!'))
    
  })
  toyList.appendChild(toyEl)
}

// add multiple toys
const appendToys = toys => {
  toys.forEach(toy => appendToy(toy))
}

// form submission listener
const formListener = event => {
  event.preventDefault()
  const toy = {
    name: nameInput.value,
    image: imageInput.value,
    likes: 0
  }
  createToy(toy)
    .then(toy => appendToy(toy))
}

// listen to form submission
addToyForm.addEventListener('submit', formListener)
// this happens behind the scenes: formListener(event)

const toyURL = 'http://localhost:3000/toys'

// get toys
const getToys = () =>
  fetch(toyURL)
    .then(resp => resp.json())

// create a new toy on the server
const createToy = toy =>
  fetch(toyURL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(toy)
  }).then(resp => resp.json())

const updateToy = toy =>
  fetch(`${toyURL}/${toy.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(toy)
  }).then(resp => resp.json())

// get the toys and put them on the page on load
getToys()
  .then(appendToys)
