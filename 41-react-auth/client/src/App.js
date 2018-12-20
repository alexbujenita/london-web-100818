import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import SignInForm from './components/SignInForm'
import Inventory from './components/Inventory'
import HomePage from './components/HomePage'
import PageNotFound from './components/PageNotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignInForm} />
          <Route path='/inventory' component={Inventory} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
