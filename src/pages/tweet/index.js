import React from 'react'
import pageWrapper from '../../pageWrapper'
import { getData } from '../../actions/tweet'
import useStore from '../../customHooks/useStore'
import Tweet from '../../components/tweet'
import Layout from '../../components/layout'

import './style.scss'

function TweetPage ({ dataFetched, history }) {
  const [store] = useStore()

  const { comments = [], ...rest } = store.tweet

  if (!dataFetched) {
    return <div>Loading .....</div>
  }
  const middleCol = () => (
    <>
      <div className='header-home'>
        Tweet
      </div>
      <div>
        <Tweet {...rest} comments={comments} inFocus />
      </div>
      <div>
        {
          comments.map(({ id, ...rest }) => {
            return <Tweet key={id} id={id} {...rest} />
          })
        }
      </div>
    </>
  )

  const rightCol = () => (
    <div className='right-col' />
  )

  const leftCol = () => (
    <div className='left-col'>
      <div className='icon-cont'>
        <div className='icon-twitter' />
      </div>
    </div>
  )

  return (
    <div className='tweet'>
      <Layout
        leftCol={leftCol()}
        middleCol={middleCol()}
        rightCol={rightCol()}
      />
    </div>
  )
}

export default pageWrapper({ getData })(TweetPage)
