
const initialState = {
  hello: 'world'
}

export const explore = (state = initialState, { type, payload }) => {
  const reducers = {
    ADD_EXPLORE_DATA () {
      const { list, ...rest } = payload
      return {
        ...state,
        list: [...(state.list || []), ...list],
        ...rest
      }
    }
  }
  if (reducers[type]) {
    return reducers[type]()
  } else {
    return state
  }
}
