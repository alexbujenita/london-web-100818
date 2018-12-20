import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Header from './components/Header'
import SignInForm from './components/SignInForm'
import Inventory from './components/Inventory'
import HomePage from './components/HomePage'
import PageNotFound from './components/PageNotFound'

import './App.css'
import API from './API';

class App extends Component {
  state = {
    username: ''
  }

  signin = username => {
    localStorage.setItem('username', username)
    this.setState({ username })
  }

  signout = () => {
    localStorage.removeItem('username')
    this.setState({ username: '' })
    this.props.history.push('/signin')
  }

  componentDidMount () {
    const username = localStorage.username
    if (username) {
      API.validate(username)
        .then(resp => {
          if (!resp.error) {
            this.signin(username)
            this.props.history.push('/inventory')
          } else {
            alert(resp.error)
          }
        })
    } else {
      this.props.history.push('/signin')
    }
  }

  render() {
    const { signin, signout } = this
    const { username } = this.state
    return (
      <div className="App">
        <Header username={username} signout={signout} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={props => <SignInForm {...props} signin={signin} />} />
          <Route path='/inventory' component={props => <Inventory {...props} username={username} />} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
