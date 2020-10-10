import React from 'react'
import moment from 'moment'
import abbreviateNumber from '../../helpers/convertNumber'
import processMsg from '../../helpers/processMsg'
import { Link } from 'react-router-dom'
import './style.scss'

const insertProps = (to) => {
  return {
    to: `/search/${to}`
  }
}

export default function Tweet (props) {
  console.log(props)
  const {
    author: {
      name,
      profilePic,
      username
    },
    message,
    likes,
    retweets,
    timestamp,
    comments
  } = props
  return (
    <div className='tweet-cont'>
      <div className='left-column'>
        <div className='profile-pic'>
          <img src={profilePic} />
        </div>
      </div>
      <div className='right-column'>
        <div className='name-cont'>
          <div className='name'>{name}</div>
          <div className='username'>{username}</div>
          <div className='time'>
            {moment(timestamp).fromNow()}
          </div>
        </div>
        <div className='msg-cont'>{processMsg(message, Link, insertProps)}</div>
        <div className='action-buttons'>
          <div className='comment'>Comments . {abbreviateNumber(comments.length)}</div>
          <div className='retweet'>Retweet . {abbreviateNumber(retweets)} </div>
          <div className='like'>Like . {abbreviateNumber(likes)} </div>
        </div>
      </div>
    </div>
  )
}
