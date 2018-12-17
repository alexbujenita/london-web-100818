import React from 'react'
import { Link } from 'react-router-dom'

const PaintingDetails = ({ painting, history }) => {
  if (!painting) {
    setTimeout(() => history.push('/paintings'), 3000)
    return <h1>Painting not found. Redirecting you back to the painting list.</h1>
  }

  return <div className='painting-details'>
    <h2>{painting.title}</h2>
    <h4>{painting.artist.name}</h4>
    {
      painting.artist.birthday &&
        <p>{painting.artist.birthday} - {painting.artist.deathday}</p>
    }
    <img src={painting.image} alt='' />
    {
      painting.dimensions.width &&
        <p>Dimensions: {painting.dimensions.width} x {painting.dimensions.height}</p>
    }
    <br />
    <Link to='/paintings'><button>GO BACK</button></Link>
  </div>
}

export default PaintingDetails
