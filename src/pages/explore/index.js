import React, { useState, useEffect, useCallback } from 'react'
import pageWrapper from '../../pageWrapper'
import { getTweetsData as getData, getTrendsData, getPeopleData } from '../../actions/explore'
import useStore from '../../customHooks/useStore'
import InfiniteList from '../../components/infiniteList'
import Tweet from '../../components/tweet'
import People from '../../components/people'
import Trend from '../../components/trend'
import Layout from '../../components/layout'
import LeftColumn from '../../components/leftColumn'
import SearchBar from '../../components/searchBar'
import cs from 'classnames'

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
  console.log(store)

  const getDataMap = { tweets: getData, trends: getTrendsData, people: getPeopleData }
  const ComponentMap = { tweets: Tweet, trends: Trend, people: People }
  const fetchData = useCallback(getDataMap[currentView], [currentView])
  const Component = ComponentMap[currentView]
  useEffect(() => {
    dispatch(getTrendsData())
    dispatch(getPeopleData())
  }, [])
  if (!dataFetched) {
    return <div>Loading .....</div>
  }
  const middleCol = (
    <>
      <div className='header-home'>Home</div>
      <InfiniteList
        list={list} hasMorePages={hasMorePages} page={page} component={Component}
        loadMore={fetchData}
        key={currentView}
      />
    </>
  )

  const rightCol = (
    <div className='right-col'>
      <div className='search-cont'>
        <SearchBar history={history} />
      </div>
      <div className='window-switch-cont'>
        <div className='sw-cont-heading'>What's Happening</div>
        {['tweets', 'trends', 'people'].map((to) => (
          <div key={to} className={cs('window-switch', { highlight: currentView === to })} onClick={() => setCurrentView(to)}>{to.toUpperCase()}</div>
        ))}
      </div>
    </div>
  )

  return (
    <div className='explore'>
      <Layout
        leftCol={<LeftColumn />}
        middleCol={middleCol}
        rightCol={rightCol}
      />
    </div>
  )
}

export default pageWrapper({ getData, scrollToTop: true })(Explore)
