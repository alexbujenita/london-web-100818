import React from 'react'

import Painting from './Painting'

const PaintingList = props =>
  <ul>
    {
      props.paintings.map(painting => <Painting painting={painting} />)
    }
  </ul>

export default PaintingList
