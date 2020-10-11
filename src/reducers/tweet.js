const initialState = {
}

export const tweet = (state = initialState, { type, payload }) => {
  const reducers = {
    ADD_TWEET_DATA () {
      return payload || {}
    }
  }
  if (reducers[type]) {
    return reducers[type]()
  } else {
    return state
  }
}
