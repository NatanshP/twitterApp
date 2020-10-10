import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default function Trend (props) {
  const {
    value
  } = props
  return (
    <div className='tweet-cont'>
      <Link className='trend' to={`/search/${value}`}>{value}</Link>
    </div>
  )
}
