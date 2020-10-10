import { createContext } from 'react'
import { explore } from './reducers/explore'

export function reducer (state, action = {}) { // combine reducers
  const reducerList = {
    explore
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
