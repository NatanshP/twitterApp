import React, { useEffect, useState } from 'react'
import useStore from './customHooks/useStore'
import qs from 'query-string'

import { withRouter } from 'react-router'

const pageWrapper = ({ getData = () => Promise.resolve(), scrollToTop }) => (Comp) => {
  return withRouter((props) => {
    const {
      location,
      location: {
        pathname,
        search: query
      },
      match,
      history
    } = props
    const [loadedData, setLoadedData] = useState()
    const [, dispatch] = useStore()
    useEffect(() => {
      scrollToTop && window.scrollTo(0, 0)
      dispatch({
        type: 'ADD_ROUTE_DATA',
        payload: { ...location, ...match, query: qs.parse(query) }
      })
      dispatch(getData(1, { ...props, location: { ...location, query: qs.parse(query) } })).then(dta => {
        if (!dta) {
          history.replace('/404')
        }
        setLoadedData(dta)
      })
    }, [query, pathname])

    return <Comp {...props} dataFetched={loadedData} />
  })
}

export default pageWrapper
