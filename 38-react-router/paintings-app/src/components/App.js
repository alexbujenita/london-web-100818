import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Title from './Title'
import PaintingList from './PaintingList'
import PaintingDetails from './PaintingDetails'
import HomePage from './HomePage'

import API from '../API'

class App extends Component {
  state = {
    searchInput: '',
    paintings: []
  }

  updateSearch = newSearchInput => {
    this.setState({ searchInput: newSearchInput }) // YES! :)
  }

  getFilteredPaintings = () =>
    this.state.paintings.filter(painting =>
      painting.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
    )

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
  }

  render () {
    const { getFilteredPaintings } = this
    const { paintings } = this.state
    return (
      <div className='app'>
        <Title />
        <Link to='/'>HOME</Link> - <Link to='/paintings'>PAINTING LIST</Link>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/paintings/:id' component={routerProps => {
            const painting = paintings.find(painting => painting.id === routerProps.match.params.id)
            return (
              <PaintingDetails
                painting={painting}
                {...routerProps}
              />
            )
          }} />
          <Route path='/paintings' component={routerProps =>
            <PaintingList
              paintings={getFilteredPaintings()}
              {...routerProps}
            />
          } />
          <Route component={() => <h1>404 - PAGE NOT FOUND!</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
