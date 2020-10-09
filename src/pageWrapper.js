import React, { useEffect, useState } from 'react'

const pageWrapper = ({ getData = () => Promise.resolve() }) => (Comp) => {
  return (props) => {
    const [loadedData, setLoadedData] = useState()
    useEffect(() => {
      // setLoadedData
      getData().then(dta => setLoadedData(dta))
    }, [])

    return <Comp {...props} dataFetched={loadedData} />
  }
}

export default pageWrapper
