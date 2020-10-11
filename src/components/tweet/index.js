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
  const {
    author: {
      name,
      profilePic,
      username
    },
    message = '',
    likes = 0,
    retweets = 0,
    timestamp,
    comments = []
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
            {moment(new Date(timestamp).toISOString()).fromNow()}
          </div>
        </div>
        <div className='msg-cont'>{processMsg(message, Link, insertProps)}</div>
        <div className='action-buttons'>
          <div className='comment btn'><i className='icon icon-chat' />{!!comments.length && abbreviateNumber(comments.length)}</div>
          <div className='retweet btn'><i className='icon icon-retweet-1' />{!!retweets && abbreviateNumber(retweets)} </div>
          <div className='like btn'><i className='icon icon-heart' /> {!!likes && abbreviateNumber(likes)} </div>
          <div />
        </div>
      </div>
    </div>
  )
}
