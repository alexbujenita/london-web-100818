import React from 'react'

import Painting from './Painting'

const PaintingList = ({paintings, selectPainting}) =>
  <div id='painting-list'>
    {
      paintings.map(painting =>
        <Painting
          key={painting.id}
          painting={painting}
          handleClick={() => selectPainting(painting)}
        />
      )
    }
  </div>

export default PaintingList
