import React from 'react'
import pageWrapper from '../../pageWrapper'
import { loadMore, getData } from '../../actions/search'
import useStore from '../../customHooks/useStore'
import InfiniteList from '../../components/infiniteList'
import Tweet from '../../components/tweet'
import Layout from '../../components/layout'
import SearchBar from '../../components/searchBar'
import LeftColumn from '../../components/leftColumn'

import './style.scss'

function SearchPage ({ dataFetched }) {
  const [store] = useStore()

  const {
    search: {
      list,
      hasMorePages,
      page
    },
    route: {
      query: {
        q
      } = {}
    }
  } = store

  if (!dataFetched) {
    return null
  }
  const middleCol = (
    <>
      <div className='header-home'>
        <SearchBar value={q} />
      </div>
      <InfiniteList
        list={list} hasMorePages={hasMorePages} page={page} component={Tweet}
        loadMore={loadMore}
      />
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
      page='search'
    />
  )
}

export default pageWrapper({ getData, scrollToTop: true })(SearchPage)
