import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({ sushis, next4Sushis, eatenSushis, eatSushi }) => {
  return (
    <Fragment>
      <div className='belt'>
        {
          sushis.map(sushi =>
            <Sushi
              sushi={sushi}
              eaten={eatenSushis.includes(sushi)}
              handleClick={() => eatSushi(sushi)}
            />
          )
        }
        <MoreButton next4Sushis={next4Sushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
