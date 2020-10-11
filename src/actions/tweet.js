import { getTweetById } from '../apis'
export const getData = (page = 1, extraData) => (dispatch, store) => {
  const {
    match: {
      params: {
        id
      } = {}
    }
  } = extraData
  return getTweetById(id).then(dta => {
    dispatch({
      type: 'ADD_TWEET_DATA',
      payload: dta
    })
    return dta
  })
}
