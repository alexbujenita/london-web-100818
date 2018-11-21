// this we already have on the page, so we save it for later use
const root = document.querySelector('#root')

// // these things we create
// const divEl = document.createElement('div')
// const imageEl = document.createElement('img')
// const title = document.createElement('h1')

// // we can modify the nodes programmatically
// divEl.classList.add('character')
// imageEl.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxs5xCq5FuDczmiahSCi2ruPauZiHYRzCzTNVRqvRh5X1Z2vh3qQ'
// title.innerText = 'Sirius Black'

// // we now put stuff on the page
// divEl.appendChild(imageEl)
// divEl.appendChild(title)
// root.appendChild(divEl)


// pure innerHTML approach
// root.innerHTML = `
// <div id="root">
//   <div class='character'>
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxs5xCq5FuDczmiahSCi2ruPauZiHYRzCzTNVRqvRh5X1Z2vh3qQ">
//     <h1>Sirius Black</h1>
//   </div>
// </div>
// `

// hybrid approach
const divEl = document.createElement('div')
divEl.className = 'character'
divEl.innerHTML = `
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxs5xCq5FuDczmiahSCi2ruPauZiHYRzCzTNVRqvRh5X1Z2vh3qQ">
<h1>Sirius Black</h1>
`

const divEl2 = document.createElement('div')
divEl2.className = 'character'
divEl2.innerHTML = `
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxs5xCq5FuDczmiahSCi2ruPauZiHYRzCzTNVRqvRh5X1Z2vh3qQ">
<h1>Serious Bloke</h1>
`

root.appendChild(divEl)
root.appendChild(divEl2)

divEl2.querySelector('h1')
