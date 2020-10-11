
const initialState = {
  tweets: {},
  people: {},
  trends: {}
}

export const explore = (state = initialState, { type, payload }) => {
  const getNewData = (key) => {
    const { list, page, ...rest } = payload
    return {
      ...state,
      [key]: page === 1 ? payload : {
        list: [...(state[key].list || []), ...list],
        page,
        ...rest
      }
    }
  }
  const reducers = {
    ADD_TWEETS_DATA () {
      return getNewData('tweets')
    },
    ADD_TRENDS_DATA () {
      return getNewData('trends')
    },
    ADD_PEOPLE_DATA () {
      return getNewData('people')
    }
  }
  if (reducers[type]) {
    return reducers[type]()
  } else {
    return state
  }
}
