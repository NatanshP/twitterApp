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
      },
      match
    } = props
    const [loadedData, setLoadedData] = useState()
    const [, dispatch] = useStore()
    useEffect(() => dispatch({
      type: 'ADD_ROUTE_DATA',
      payload: { ...location, ...match, query: qs.parse(query) }
    }), [query, JSON.stringify(match.params)])
    useEffect(() => {
      dispatch(getData(undefined, { ...props, location: { ...location, query: qs.parse(query) } })).then(dta => setLoadedData(dta))
    }, [query, JSON.stringify(query)])

    return <Comp {...props} dataFetched={loadedData} />
  })
}

export default pageWrapper
