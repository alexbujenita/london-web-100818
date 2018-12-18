import React, { Component } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'

// Endpoint!
const API = 'http://localhost:3005/sushis'

class App extends Component {
  state = {
    sushis: [],
    eatenSushis: [],
    money: 100,
    currentIndex: 0
  }

  eatSushi = sushi => {
    let { eatenSushis, money } = this.state
    if (eatenSushis.includes(sushi)) return
    if (sushi.price > money) return

    money = money - sushi.price
    eatenSushis = [...eatenSushis, sushi]
    this.setState({ eatenSushis, money })
  }

  getSushis = async () => {
    const sushis = await fetch(API)
      .then(resp => resp.json())

    this.setState({ sushis })
  }

  getCurrentSushis = () => {
    const { sushis, currentIndex } = this.state
    return sushis.slice(currentIndex, currentIndex + 4)
  }

  next4Sushis = () => {
    const { currentIndex, sushis } = this.state
    const nextIndex = currentIndex + 4 >= sushis.length
      ? 0
      : currentIndex + 4
    this.setState({ currentIndex: nextIndex })
  }

  componentDidMount () {
    this.getSushis()
  }

  render () {
    const { getCurrentSushis, next4Sushis, eatSushi } = this
    const { money, eatenSushis } = this.state
    return (
      <div className='app'>
        <SushiContainer
          next4Sushis={next4Sushis}
          sushis={getCurrentSushis()}
          eatenSushis={eatenSushis}
          eatSushi={eatSushi}
        />
        <Table
          money={money}
          eatenSushis={eatenSushis}
        />
      </div>
    )
  }
}

export default App
