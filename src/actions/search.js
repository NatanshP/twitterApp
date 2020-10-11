import { searchApi } from '../apis'
let getPaginatedData
export const getData = (page = 1, extraData) => (dispatch, store) => {
  const {
    location: {
      query: {
        q
      } = {}
    }
  } = extraData
  getPaginatedData = searchApi(q)
  return getPaginatedData(page).then(dta => {
    dispatch({
      type: 'REPLACE_SEARCH_DATA',
      payload: dta
    })
    return dta
  })
}

export const loadMore = (page = 1) => (dispatch, store) => {
  return getPaginatedData(page).then(dta => {
    dispatch({
      type: 'ADD_SEARCH_DATA',
      payload: dta
    })
    return dta
  })
}
