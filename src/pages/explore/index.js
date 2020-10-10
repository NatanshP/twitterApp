import React from 'react'
import pageWrapper from '../../pageWrapper'
import getData from '../../actions/explore'
import useStore from '../../customHooks/useStore'
import InfiniteList from '../../components/infiniteList'
import Tweet from '../../components/tweet'
import './style.scss'

function Explore ({ dataFetched }) {
  const [store] = useStore()
  const {
    list,
    hasMorePages,
    page
  } = store.explore

  if (!dataFetched) {
    return <div>Loading .....</div>
  }

  return (
    <div className='page-cont'>
      <div className='layout-left-column'>left</div>
      <div className='layout-middle-column'>
        <div className='header-home'>Home</div>
        <InfiniteList
          list={list} hasMorePages={hasMorePages} page={page} component={Tweet}
          loadMore={getData}
        />
      </div>
      <div className='layout-right-column'>right</div>
    </div>
  )
}

export default pageWrapper({ getData })(Explore)
