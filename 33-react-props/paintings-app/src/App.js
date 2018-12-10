import React, { Component } from 'react'
import paintings from './paintings-data'
// import {name} from './paintings-data'

import Title from './Title'
import PaintingList from './PaintingList'

console.log(paintings)
// console.log('name: ', name)

// PaintingList({stuff: 'cool'})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <PaintingList
          stuff='cool'
          somethingElse={3 + 10}
          paintings={paintings}
        />
      </div>
    )
  }
}

export default App
