import data from '../data.json'
export default () => {
  console.log(data)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000)
  })
}
