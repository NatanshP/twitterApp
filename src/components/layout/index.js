import React from 'react'

import './style.scss'

export default function Layout ({ leftCol, middleCol, rightCol }) {
  return (
    <div className='page-cont'>
      <div className='layout-left-column'>{leftCol}</div>
      <div className='layout-middle-column'>{middleCol}</div>
      <div className='layout-right-column'>{rightCol}</div>
    </div>
  )
}
