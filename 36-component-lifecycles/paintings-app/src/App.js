import React, { Component } from 'react'
// import {name} from './paintings-data'

import Title from './Title'
import PaintingList from './PaintingList'
import Search from './Search'

import API from './API'

class App extends Component {
  state = {
    searchInput: '',
    paintings: [],
    time: new Date()
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
    API.deletePainting(id)
      .then(() => {
        const paintings = this.state.paintings.filter(painting => painting.id !== id)
        this.setState({ paintings })
      })
      .catch(() => alert('Unable to delete. Please try again later.'))
  }

  getPaintings = () => {
    API.getPaintings()
      .then(paintings => this.setState({ paintings }))
  }

  startCountingTime = () => {
    setInterval(
      () => { this.setState({ time: new Date() }) },
      1000
    )
  }

  componentDidMount () {
    this.getPaintings()
    this.startCountingTime()
  }

  render () {
    const {updateSearch, getFilteredPaintings, deletePainting} = this
    const { time } = this.state
    return (
      <div className='app'>
        <Title />
        <div>{ time.toTimeString() }</div>
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
