import React, { useEffect, useState } from 'react'
import useStore from './customHooks/useStore'
import qs from 'query-string'

import { withRouter } from 'react-router'

const pageWrapper = ({ getData = () => Promise.resolve(), scrollToTop }) => (Comp) => {
  return withRouter((props) => {
    const {
      location,
      location: {
        search: query
      },
      match,
      history
    } = props
    const [loadedData, setLoadedData] = useState()
    const [, dispatch] = useStore()
    useEffect(() => {
      scrollToTop && window.scrollTo(0, 0)
    }, [query, JSON.stringify(match.params)])
    useEffect(() => dispatch({
      type: 'ADD_ROUTE_DATA',
      payload: { ...location, ...match, query: qs.parse(query) }
    }), [query, JSON.stringify(match.params)])
    useEffect(() => {
      dispatch(getData(1, { ...props, location: { ...location, query: qs.parse(query) } })).then(dta => {
        if (!dta) {
          history.push('/404')
        }
        setLoadedData(dta)
      })
    }, [query, JSON.stringify(match.params)])

    return <Comp {...props} dataFetched={loadedData} />
  })
}

export default pageWrapper
