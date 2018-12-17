import React from 'react'
import { Link } from 'react-router-dom'

const Painting = ({ painting }) =>
  <Link to={`/paintings/${painting.id}`}>
    <div className='painting'>
      <h1>{painting.title}</h1>
      <p>{painting.artist.name}</p>
      <img src={painting.image} alt='' />
    </div>
  </Link>

export default Painting
