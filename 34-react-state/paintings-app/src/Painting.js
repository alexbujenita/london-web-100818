import React from 'react'

const Painting = ({ painting, deletePainting }) =>
  <li>
    <div onClick={() => deletePainting(painting.id)} className='painting'>
      <h1>{painting.title}</h1>
      <p>{painting.artist.name}</p>
      <img src={painting.image} />
    </div>
  </li>

export default Painting
