import React, { useEffect, useState } from 'react'
import useStore from './customHooks/useStore'
// import useStore from '../../customHooks/useStore'

import { withRouter } from 'react-router'

const pageWrapper = ({ getData = () => Promise.resolve() }) => (Comp) => {
  return withRouter((props) => {
    const [loadedData, setLoadedData] = useState()
    const [, dispatch] = useStore()
    useEffect(() => {
      dispatch(getData()).then(dta => setLoadedData(dta))
    }, [])

    return <Comp {...props} dataFetched={loadedData} />
  })
}

export default pageWrapper
