import React from 'react'

import Painting from './Painting'

const PaintingList = ({paintings, deletePainting}) =>
  <ul>
    {
      paintings.map(painting => <Painting painting={painting} deletePainting={deletePainting} />)
    }
  </ul>

export default PaintingList
