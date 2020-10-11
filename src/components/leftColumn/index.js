import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default function LeftCol () {
  return (
    <div className='left-col'>
      <div className='icon-cont'>
        <Link to='/'>
          <div className='icon-twitter' />
        </Link>
      </div>
    </div>
  )
}
