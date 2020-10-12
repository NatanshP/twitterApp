import React from 'react'
import './style.scss'

export default function People (props) {
  const {
    name,
    profilePic,
    username
  } = props
  if (!username) {
    return null
  }
  return (
    <div className='people-cont'>
      <div className='left-column'>
        <div className='profile-pic'>
          <img src={profilePic} alt={username} />
        </div>
      </div>
      <div className='right-column'>
        <div className='name-cont'>
          <div className='name'>{name}</div>
          <div className='username'>{username}</div>
        </div>
      </div>
    </div>
  )
}
