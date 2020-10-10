import { getDataByPage } from '../apis'
export default (page = 1) => (dispatch) => {
  return getDataByPage(page).then(dta => {
    dispatch({
      type: 'ADD_EXPLORE_DATA',
      payload: dta
    })
    return dta
  })
}
