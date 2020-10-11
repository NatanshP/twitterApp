export default function getSearchString (value) {
  return `/search?q=${encodeURIComponent(value)}`
}
