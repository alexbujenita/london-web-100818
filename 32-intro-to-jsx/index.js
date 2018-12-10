// Intro to JSX

// a simple React element
// createElement takes 3 arguments: type of element, props and children
const TitleElement = React.createElement('h1', null, 'Welcome to React!')
// JSX Equivalent: <h1>Welcome to React!</h1>

const App = props =>
  React.createElement('div', {className: 'container'}, [
    Navbar({
      color: 'blue',
      title: 'React is awesome!',
      subtitle: 'It really is!',
      icon: 'react'
    }),
    // Title({text: 'Welcome to React!'}),
    // we can instantiate new components using JSX like so:
    <Title text='Welcome to Something else!!' />,
    // note how props are passed in JSX as opposed to regular JS
    Article({
      header: 'Wild Nikochu appeared.',
      subheader: "It's super effective!",
      imgSrc: 'https://avatars2.githubusercontent.com/u/16916098?s=460&v=4',
      content: 'Nikochu fainted.'
    }),
    Article({
      header: 'Wild Nikochu appeared (again!).',
      subheader: "It's super effective!",
      imgSrc: 'https://avatars2.githubusercontent.com/u/16916098?s=460&v=4',
      content: 'Nikochu fainted.'
    })
  ])


// a title Component, which is a function that accepts props
// and returns a React element
const Title = props => 
  <h1 className='title' id='top-title'>{props.text}</h1>
  // React.createElement('h1', {className: 'title', id: 'top-title'}, props.text)

// another component
// remember functions can only return a single thing,
// so we can wrap all of our elements in a div to make this work
const Article = props =>
  React.createElement('div', null, [
    React.createElement('h2', null, props.header),
    React.createElement('h3', null, props.subheader),
    React.createElement('img', {src: props.imgSrc}),
    React.createElement('p', null, props.content)
  ])

// Article({
//   header: 'Wild Nikochu appeared.',
//   subheader: "It's super effective!",
//   imgSrc: 'https://avatars2.githubusercontent.com/u/16916098?s=460&v=4',
//   content: 'Nikochu fainted.'
// })

// 'https://avatars2.githubusercontent.com/u/16916098?s=460&v=4'
// React.createElement(type, props, children)

// <div>
//   <h2>Header</h2>
//   <h3>Sub-headline</h3>
//   <img src='nice-image.png'/>
//   <p>Content</p>
// </div>


// Activity - write the HTML below using React.createElement

// <div class="ui inverted orange menu">
//   <a class='item'>
//     <h2 class="ui header">
//       <i class="paw icon"></i>
//       <div class="content">
//         ZooKeepr
//       </div>
//       <div class="sub header">
//         Keep track of your animals
//       </div>
//     </h2>
//   </a>
// </div>

const Navbar = props =>
  React.createElement('div', {className: `ui inverted ${props.color} menu`},
    React.createElement('a', {className: 'item'},
      React.createElement('h2', {className: 'ui header'}, [
        React.createElement('i', {className: `${props.icon} icon`}),
        React.createElement('div', {className: 'content'}, props.title),
        React.createElement('div', {className: 'sub header'}, props.subtitle)
      ])
    )
  )

ReactDOM.render(
  // what to render
  App(),
  // where to render it
  document.querySelector('#root')
)
