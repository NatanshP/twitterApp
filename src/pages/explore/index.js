import React from 'react'
import pageWrapper from '../../pageWrapper'
import getData from '../../actions/explore'
import './style.scss'

function Explore ({ dataFetched }) {

  if (!dataFetched) {
    return <div>Loading .....</div>
  }
  return (
    <div className='page-cont'>
      <div className='left-column'>left</div>
      <div className='middle-column'>middle
      </div>
      <div className='right-column'>right</div>
    </div>
  )
}

export default pageWrapper({ getData })(Explore)
