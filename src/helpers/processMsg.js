import React from 'react'
export default function (message, Component, props) {
  const parts = message.split(/#\w+/g)
  const matches = message.match(/#\w+/g)
  if (!matches || (matches && matches.length === 0)) {
    return message
  }
  const finalString = parts.reduce(function (acc, part, i) {
    if (matches[i]) {
      acc = [...acc, part, <Component {...props(matches[i])} key={matches[i] + i}>{matches[i]}</Component>]
    } else {
      acc = [...acc, part]
    }
    return acc
  }, [])
  return finalString
}
