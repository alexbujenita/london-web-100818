import React from 'react'

class Painting extends React.Component {

  state = {
    time: new Date()
  }

  startCountingTime = () => {
    this.handle = setInterval(
      () => { this.setState({ time: new Date() }) },
      1000
    )
  }

  stopCountingTime = () => {
    clearInterval(this.handle)
  }

  componentDidMount () {
    this.startCountingTime()
  }

  componentWillUnmount () {
    console.log(`I'm ${this.props.painting.title}. WHY ARE YOU DOING THIS TO ME?!?!?!`)
    this.stopCountingTime()
  }

  render () {
    const { painting, deletePainting } = this.props
    const { time } = this.state
    return (
      <div onClick={() => deletePainting(painting.id)} className='painting'>
        <div>{ time.toTimeString() }</div>
        <h1>{painting.title}</h1>
        <p>{painting.artist.name}</p>
        <img src={painting.image} alt='' />
      </div>
    )
  }
}

export default Painting
