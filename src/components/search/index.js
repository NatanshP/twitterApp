import React, { useRef } from 'react'

import './style.scss'

export default function Search (props) {
  const {
    placeholder = 'Search Twitter',
    onChange = () => {},
    value = '',
    list = [],
    onListClick
  } = props
  const inputRef = useRef()
  return (
    <div className='search-with-dd'>
      <div className='search-box-cont' tabIndex={1}>
        <input
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          onKeyDown={(e) => {
            const code = e.which || e.keyCode
            if (code === 13) {
              onListClick(value)
              inputRef.current.blur()
            }
          }}
          ref={inputRef}
        />
      </div>
      <div className='list-cont'>
        {list.map((value) => <div key={value} className='list-item' onClick={() => onListClick(value)}>{value}</div>)}
      </div>
    </div>
  )
}
