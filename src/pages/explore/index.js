import React from 'react'
import pageWrapper from '../../pageWrapper'
import getData from '../../actions/explore'
import useStore from '../../customHooks/useStore'
import InfiniteList from '../../components/infiniteList'
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
      <div className='left-column'>left</div>
      <div className='middle-column'>
        <InfiniteList
          list={list} hasMorePages={hasMorePages} page={page} component={() => {
            return <div>test div</div>
          }}
          loadMore={getData}
        />
      </div>
      <div className='right-column'>right</div>
    </div>
  )
}

export default pageWrapper({ getData })(Explore)
