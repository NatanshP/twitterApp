import React from 'react'
// import moment from 'moment'
// import abbreviateNumber from '../../helpers/convertNumber'
// import processMsg from '../../helpers/processMsg'
// import { Link } from 'react-router-dom'
import './style.scss'

// const insertProps = (to) => {
//   return {
//     to: `/search/${to}`
//   }
// }

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
    <div className='tweet-cont'>
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
