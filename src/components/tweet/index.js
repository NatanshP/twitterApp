import React, { useCallback } from 'react'
import moment from 'moment'
import abbreviateNumber from '../../helpers/convertNumber'
import processMsg from '../../helpers/processMsg'
import { Link, useHistory } from 'react-router-dom'
import useStore from '../../customHooks/useStore'
import cs from 'classnames'
import './style.scss'
import getSearchString from '../../helpers/getSearchString'

const insertProps = (to) => {
  return {
    to: getSearchString(to),
    onClick: (e) => { e.stopPropagation() }
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
    comments = [],
    inFocus,
    id
  } = props
  const history = useHistory()
  const [store] = useStore()
  const stopPropagation = useCallback((e) => e.stopPropagation(), [])
  const {
    params: {
      id: routeId
    } = {}
  } = store.route
  return (
    <div
      className={cs('tweet-cont', { 'in-focus': inFocus })} onClick={() => {
        if (parseInt(routeId, 10) !== id) {
          history.push(`/tweet/${id}`)
        }
      }}
    >
      <div className='left-column'>
        <div className='profile-pic'>
          <img src={profilePic} alt='profile-pic' />
        </div>
        {inFocus && (
          <div className='name-cont'>
            <div className='name'>{name}</div>
            <div className='username'>{username}</div>
          </div>)}
      </div>
      <div className='right-column'>
        {!inFocus && (
          <div className='name-cont'>
            <div className='name'>{name}</div>
            <div className='username'>{username}</div>
            <div className='time'>
              {moment(new Date(timestamp).toISOString()).fromNow()}
            </div>
          </div>)}
        <div className='msg-cont'>{processMsg(message, Link, insertProps)}</div>
        <div className='action-buttons'>
          <div className='comment btn' onClick={stopPropagation}><i className='icon icon-chat' />{!!comments.length && abbreviateNumber(comments.length)}</div>
          <div className='retweet btn' onClick={stopPropagation}><i className='icon icon-retweet-1' />{!!retweets && abbreviateNumber(retweets)} </div>
          <div className='like btn' onClick={stopPropagation}><i className='icon icon-heart' /> {!!likes && abbreviateNumber(likes)} </div>
          {!inFocus && <div />}
        </div>
      </div>
    </div>
  )
}
