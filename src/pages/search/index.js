import React from 'react'
import pageWrapper from '../../pageWrapper'
import { loadMore, getData } from '../../actions/search'
import useStore from '../../customHooks/useStore'
import InfiniteList from '../../components/infiniteList'
import Tweet from '../../components/tweet'
import Layout from '../../components/layout'
import SearchBar from '../../components/searchBar'

import './style.scss'

function SearchPage ({ dataFetched, history }) {
  const [store] = useStore()

  const {
    list,
    hasMorePages,
    page
  } = store.search

  if (!dataFetched) {
    return <div>Loading .....</div>
  }
  const middleCol = () => (
    <>
      <div className='header-home'>
        <SearchBar history={history} />
      </div>
      <InfiniteList
        list={list} hasMorePages={hasMorePages} page={page} component={Tweet}
        loadMore={loadMore}
      />
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
    <div className='search'>
      <Layout
        leftCol={leftCol()}
        middleCol={middleCol()}
        rightCol={rightCol()}
      />
    </div>
  )
}

export default pageWrapper({ getData })(SearchPage)
