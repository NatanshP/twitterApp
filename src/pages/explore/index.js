import React, { useState, useEffect } from 'react'
import pageWrapper from '../../pageWrapper'
import { getTweetsData as getData, getTrendsData, getPeopleData } from '../../actions/explore'
import useStore from '../../customHooks/useStore'
import InfiniteList from '../../components/infiniteList'
import Tweet from '../../components/tweet'
import People from '../../components/people'
import Trend from '../../components/trend'
import Layout from '../../components/layout'
import SearchBar from '../../components/searchBar'

import './style.scss'

function Explore ({ dataFetched, history }) {
  const [store, dispatch] = useStore()
  const [currentView, setCurrentView] = useState('tweets')
  const {
    [currentView]: {
      list,
      hasMorePages,
      page
    }
  } = store.explore

  const getDataMap = { tweets: getData, trends: getTrendsData, people: getPeopleData }
  const ComponentMap = { tweets: Tweet, trends: Trend, people: People }
  const fetchData = getDataMap[currentView]
  const Component = ComponentMap[currentView]
  useEffect(() => {
    dispatch(getTrendsData())
    dispatch(getPeopleData())
  }, [])
  if (!dataFetched) {
    return <div>Loading .....</div>
  }
  const middleCol = () => (
    <>
      <div className='header-home'>Home</div>
      <InfiniteList
        list={list} hasMorePages={hasMorePages} page={page} component={Component}
        loadMore={fetchData}
      />
    </>
  )

  const rightCol = () => (
    <div className='right-col'>
      <div className='search-cont'>
        <SearchBar history={history} />
      </div>
      <div className='window-switch-cont'>
        <div className='sw-cont-heading'>What's Happening</div>
        {['tweets', 'trends', 'people'].map((to) => (
          <div key={to} className='window-switch' onClick={() => setCurrentView(to)}>{to.toUpperCase()}</div>
        ))}
      </div>
    </div>
  )

  const leftCol = () => (
    <div className='left-col'>
      <div className='icon-cont'>
        <div className='icon-twitter' />
      </div>
    </div>
  )

  return (
    <div className='explore'>
      <Layout
        leftCol={leftCol()}
        middleCol={middleCol()}
        rightCol={rightCol()}
      />
    </div>
  )
}

export default pageWrapper({ getData })(Explore)
