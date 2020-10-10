import React, { useReducer } from 'react'
import './App.css'
import Routes from './routes'
import { StoreContext, reducer, modifyDispatch } from './store'

export default function App () {
  const [store, dispatch] = useReducer(reducer, {}, reducer)
  const newDispatcher = modifyDispatch(dispatch, store)
  return (
    <StoreContext.Provider value={[store, newDispatcher]}>
      <Routes />
    </StoreContext.Provider>
  )
}
