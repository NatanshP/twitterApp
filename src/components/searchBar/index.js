
import React, { useState } from 'react'
import Search from '../search'
import { typeHeadApi } from '../../apis'
import debounce from 'lodash/debounce'
import getSearchString from '../../helpers/getSearchString'
import { useHistory } from 'react-router-dom'

function SearchBar ({ value }) {
  const [suggestionList, setSuggestionList] = useState([])
  const [searchValue, setSearchValue] = useState(value || '')
  const history = useHistory()

  const onSearch = (value) => {
    setSearchValue(value)
    const getSuggestions = debounce(() => {
      const suggestions = typeHeadApi(value)
      setSuggestionList(suggestions)
    }, 100)
    getSuggestions()
  }

  const onListClick = (value) => {
    history.push(getSearchString(value))
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
