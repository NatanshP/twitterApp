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
import { Link } from 'react-router-dom'
import getSearchString from '../../helpers/getSearchString'
import cs from 'classnames'
import './style.scss'

function Explore ({ dataFetched }) {
  const [store, dispatch] = useStore()
  const [currentView, setCurrentView] = useState('tweets')
  const {
    [currentView]: {
      list,
      hasMorePages,
      page
    },
    trends: {
      list: trendsList
    }
  } = store.explore

  const getDataMap = { tweets: getData, trends: getTrendsData, people: getPeopleData }
  const ComponentMap = { tweets: Tweet, trends: Trend, people: People }
  const fetchData = useCallback(getDataMap[currentView], [currentView])
  const Component = ComponentMap[currentView]
  useEffect(() => {
    dispatch(getTrendsData())
    dispatch(getPeopleData())
  }, [])
  if (!dataFetched) {
    return null
  }
  const middleCol = (
    <>
      <div className='header-home'>
        <div className='home-text'>Home</div>
        <div className='tab-switch-cont'>
          {/* tabs switches */}
          {['tweets', 'trends', 'people'].map((to) => (
            <div
              key={to}
              className={cs('tab-switch', { highlight: currentView === to })}
              onClick={() => {
                window.scrollTo(0, 0)
                setCurrentView(to)
              }}
            >
              {to.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
      <InfiniteList
        list={list} hasMorePages={hasMorePages} page={page} component={Component}
        loadMore={fetchData}
        key={currentView}
      />
    </>
  )

  // right col with trends list and search bar
  const rightCol = (
    <div className='right-col'>
      <div className='search-cont'>
        <SearchBar />
      </div>
      <div className='window-switch-cont'>
        <div className='sw-cont-heading'>What's Happening</div>
        {trendsList.slice(0, 5).map(({ value, id }) => (
          <Link key={id} to={getSearchString(value)} className='window-switch'>
            <div>
              {value.toUpperCase()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <Layout
      leftCol={<LeftColumn />}
      middleCol={middleCol}
      rightCol={rightCol}
      page='explore'
    />
  )
}

export default pageWrapper({ getData, scrollToTop: true })(Explore)
