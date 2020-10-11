const initialState = {
}

export const search = (state = initialState, { type, payload }) => {
  const reducers = {
    ADD_SEARCH_DATA () {
      const { list, ...rest } = payload
      return {
        ...state,
        list: [...(state.list || []), ...list],
        ...rest
      }
    },
    REPLACE_SEARCH_DATA () {
      return payload
    }
  }
  if (reducers[type]) {
    return reducers[type]()
  } else {
    return state
  }
}
