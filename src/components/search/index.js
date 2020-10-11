import React from 'react'

import './style.scss'

export default function Search (props) {
  const {
    placeholder = 'Search Twitter',
    onChange = () => {},
    value = '',
    list = [],
    onListClick
  } = props

  return (
    <div className='search-with-dd'>
      <div className='search-box-cont' tabIndex={1}>
        <input
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </div>
      <div className='list-cont'>
        {list.map((value) => <div key={value} className='list-item' onClick={() => onListClick(value)}>{value}</div>)}
      </div>
    </div>
  )
}
