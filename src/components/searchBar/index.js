
import React, { useState } from 'react'
import Search from '../search'
import { typeHeadApi } from '../../apis'
import debounce from 'lodash/debounce'

function SearchBar ({ history }) {
  const [suggestionList, setSuggestionList] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const onSearch = (value) => {
    setSearchValue(value)
    const getSuggestions = debounce(() => {
      const suggestions = typeHeadApi(value)
      setSuggestionList(suggestions)
    }, 100)
    getSuggestions()
  }

  const onListClick = (value) => {
    history.push(`/search?q=${value}`)
  }

  return (
    <Search
      onChange={onSearch}
      list={suggestionList}
      value={searchValue}
      onListClick={onListClick}
    />
  )
}

export default SearchBar
