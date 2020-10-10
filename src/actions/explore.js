import { getTweetsData as tweetsApi, peopleApi, trendsApi } from '../apis'
export const getTweetsData = (page = 1) => (dispatch) => {
  return tweetsApi(page).then(dta => {
    dispatch({
      type: 'ADD_TWEETS_DATA',
      payload: dta
    })
    return dta
  })
}

export const getTrendsData = (page = 1) => (dispatch) => {
  return trendsApi(page).then(dta => {
    dispatch({
      type: 'ADD_TRENDS_DATA',
      payload: dta
    })
    return dta
  })
}

export const getPeopleData = (page = 1) => (dispatch) => {
  return peopleApi(page).then(dta => {
    dispatch({
      type: 'ADD_PEOPLE_DATA',
      payload: dta
    })
    return dta
  })
}
