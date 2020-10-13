import React from 'react'
import pageWrapper from '../../pageWrapper'
import { getData } from '../../actions/tweet'
import useStore from '../../customHooks/useStore'
import Tweet from '../../components/tweet'
import Layout from '../../components/layout'
import LeftColumn from '../../components/leftColumn'

import './style.scss'

function TweetPage ({ dataFetched, history }) {
  const [store] = useStore()

  const { comments = [] } = store.tweet

  if (!dataFetched) {
    return null
  }

  const middleCol = (
    <>
      <div className='header-home'>
        Tweet
      </div>
      <div>
        <Tweet {...store.tweet} inFocus />
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

  const rightCol = (
    <div className='right-col' />
  )

  return (

    <Layout
      leftCol={<LeftColumn />}
      middleCol={middleCol}
      rightCol={rightCol}
      page='tweet'
    />

  )
}

export default pageWrapper({ getData, scrollToTop: true })(TweetPage)
