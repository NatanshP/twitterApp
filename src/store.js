import { createContext } from 'react'
import { explore } from './reducers/explore'
import { search } from './reducers/search'
import { route } from './reducers/route'

export function reducer (state, action = {}) { // combine reducers
  const reducerList = {
    explore,
    search,
    route
  }
  const finalState = {}
  Object.keys(reducerList).forEach(key => { finalState[key] = reducerList[key](state[key], action, state) })
  return finalState
}

export function modifyDispatch (dispatch, store) {
  return (toDispatch) => {
    if (typeof toDispatch === 'function') {
      return toDispatch(dispatch, store)
    } else {
      return dispatch(toDispatch)
    }
  }
}

export const StoreContext = createContext({})
