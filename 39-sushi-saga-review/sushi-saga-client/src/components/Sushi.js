import React from 'react'
import PropTypes from 'prop-types'

const Sushi = ({ sushi, eaten, handleClick }) => {
  return (
    <div className='sushi'>
      <div className='plate'
        onClick={handleClick}>
        {
          eaten
            ? null
            : <img src={sushi.img_url} width='100%' />
        }
      </div>
      <h4 className='sushi-details'>
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

Sushi.propTypes = {
  sushi: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  eaten: PropTypes.bool.isRequired
}

export default Sushi
