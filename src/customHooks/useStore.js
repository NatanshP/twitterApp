import { useContext } from 'react'
import { StoreContext } from '../store'

export default () => {
  return useContext(StoreContext)
}
