
const initialState = {
  tweets: {},
  people: {},
  trends: {}
}

export const explore = (state = initialState, { type, payload }) => {
  const reducers = {
    ADD_TWEETS_DATA () {
      const { list, ...rest } = payload
      return {
        ...state,
        tweets: {
          list: [...(state.tweets.list || []), ...list],
          ...rest
        }
      }
    },
    ADD_TRENDS_DATA () {
      const { list, ...rest } = payload
      return {
        ...state,
        trends: {
          list: [...(state.trends.list || []), ...list],
          ...rest
        }
      }
    },
    ADD_PEOPLE_DATA () {
      const { list, ...rest } = payload
      return {
        ...state,
        people: {
          list: [...(state.people.list || []), ...list],
          ...rest
        }
      }
    }
  }
  if (reducers[type]) {
    return reducers[type]()
  } else {
    return state
  }
}
