import React from 'react'
import pageWrapper from '../../pageWrapper'
import getData from '../../actions/explore'
import './style.scss'

function Explore () {
  return (
    <div className='page-cont'>
      <div className='left-column'>left</div>
      <div className='middle-column'>left</div>
      <div className='right-column'>left</div>
    </div>
  )
}

export default pageWrapper({ getData })(Explore)
