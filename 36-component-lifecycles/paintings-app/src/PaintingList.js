import React from 'react'

import Painting from './Painting'

const PaintingList = ({paintings, deletePainting}) =>
  <div id='painting-list'>
    {
      paintings.map(painting =>
        <Painting
          key={painting.id}
          painting={painting}
          deletePainting={deletePainting}
        />
      )
    }
  </div>

export default PaintingList
