import React, { Component } from 'react'
import paintings from './paintings-data'
// import {name} from './paintings-data'

import Title from './Title'
import PaintingList from './PaintingList'
import Search from './Search'

console.log(paintings)
// console.log('name: ', name)
// PaintingList({stuff: 'cool'})

class App extends Component {
  state = {
    searchInput: '',
    paintings: paintings
  }

  updateSearch = newSearchInput => {
    // this.state.searchInput = 'something else' // << NO! X
    this.setState({ searchInput: newSearchInput }) // YES! :)
  }

  getFilteredPaintings = () =>
    this.state.paintings.filter(painting =>
      painting.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
    )

  deletePainting = id => {
    const paintings = this.state.paintings.filter(painting => painting.id !== id)
    this.setState({ paintings })
  }

  render () {
    const {updateSearch, getFilteredPaintings, deletePainting} = this
    return (
      <div className='App'>
        <Title />
        <Search handleChange={updateSearch} />
        <PaintingList
          paintings={getFilteredPaintings()}
          deletePainting={deletePainting}
        />
      </div>
    )
  }
}

export default App
