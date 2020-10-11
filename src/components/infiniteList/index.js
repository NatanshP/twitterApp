import React, { useRef, useState, useEffect, useCallback } from 'react'
import useStore from '../../customHooks/useStore'
import './style.scss'

export default function InfiniteList (props) {
  const { list = [], component: Component, hasMorePages, loadMore, page } = props
  const [loading, setLoading] = useState(false)
  const [, dispatch] = useStore()
  const loaderRef = useRef()
  const handleObserver = useCallback((entities, observer) => {
    if (entities && entities[0].isIntersecting && !loading && hasMorePages) {
      setLoading(true)
      dispatch(loadMore(page + 1)).then(() => { // pages in dependencies will trigger infinite reload
        setLoading(false)
      })
    }
  }, [loading, hasMorePages])
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    let observer = new IntersectionObserver( // eslint-disable-line
      handleObserver,
      options
    )
    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }
    return () => loaderRef.current && observer.unobserve(loaderRef.current)
  }, [handleObserver])

  const content = list.map((item, index) => {
    return <Component key={item.id} {...item} />
  })
  if (hasMorePages) {
    content.push(
      <div ref={loaderRef} key='loader'>
        <div>loading...</div>
      </div>
    )
  }

  return <div>{content}</div>
}
