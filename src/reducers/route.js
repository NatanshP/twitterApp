const initialState = {
}

export const route = (state = initialState, { type, payload }) => {
  const reducers = {
    ADD_ROUTE_DATA () {
      return payload
    }
  }
  if (reducers[type]) {
    return reducers[type]()
  } else {
    return state
  }
}
