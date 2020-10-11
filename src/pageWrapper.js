import React, { useEffect, useState } from 'react'
import useStore from './customHooks/useStore'
import qs from 'query-string'

import { withRouter } from 'react-router'

const pageWrapper = ({ getData = () => Promise.resolve() }) => (Comp) => {
  return withRouter((props) => {
    const {
      location,
      location: {
        search: query
      }
    } = props
    const [loadedData, setLoadedData] = useState()
    const [, dispatch] = useStore()
    useEffect(() => dispatch({
      type: 'ADD_ROUTE_DATA',
      payload: { ...location, query: qs.parse(query) }
    }), [])
    useEffect(() => {
      dispatch(getData(undefined, { ...props, location: { ...location, query: qs.parse(query) } })).then(dta => setLoadedData(dta))
    }, [query, location])

    return <Comp {...props} dataFetched={loadedData} />
  })
}

export default pageWrapper
