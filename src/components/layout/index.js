import React from 'react'
import cs from 'classnames'
import './style.scss'

export default function Layout ({ leftCol, middleCol, rightCol, page }) {
  return (
    <div className={cs('page-cont', page)}>
      <div className='layout-left-column'>{leftCol}</div>
      <div className='layout-middle-column'>{middleCol}</div>
      <div className='layout-right-column'>{rightCol}</div>
    </div>
  )
}
