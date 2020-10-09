import data from '../data.json'

// data = [
//   {
//     author: {
//       name: 'Ignacio Kiehn',
//       username: '@Ignacio_Kessler48',
//       profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/wegotvices/128.jpg'
//     },
//     timestamp: 'Sat Dec 14 2019 07:36:40 GMT+0530 (India Standard Time)',
//     message: 'Eveniet saepe atque voluptas incidunt distinctio. Nihil laboriosam nihil est facilis quo saepe voluptates eius repellat.',
//     likes: 549,
//     retweets: 324,
//     comments: [
//       {
//         author: {
//           name: 'Mona Reinger',
//           username: '@Mona_Barton',
//           profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/bistrianiosip/128.jpg'
//         },
//         message: 'Cupiditate nihil dolor. Porro aspernatur necessitatibus illum.',
//         likes: 456,
//         timestamp: '2020-07-14T02:44:15.258Z',
//         retweets: 417
//       },
//       {
//         author: {
//           name: 'Rosie Stanton',
//           username: '@Rosie59',
//           profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg'
//         },
//         message: 'Dolor deserunt illo aut commodi illum ad molestiae non. Nemo qui corporis. #quis',
//         likes: 720,
//         timestamp: '2020-01-16T16:19:21.572Z',
//         retweets: 212
//       },
//       {
//         author: {
//           name: 'Lilly Mueller',
//           username: '@Lilly99',
//           profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nfedoroff/128.jpg'
//         },
//         message: 'Sit asperiores minus ipsum rem eveniet. Eum harum rerum quo veniam nulla placeat quos. #voluptatem',
//         likes: 452,
//         timestamp: '2020-04-16T05:55:11.534Z',
//         retweets: 880
//       },
//       {
//         author: {
//           name: 'Lelia Moen',
//           username: '@Lelia77',
//           profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/themrdave/128.jpg'
//         },
//         message: 'Ratione est sunt est. Quisquam eligendi et tenetur ut rerum molestias. #architecto',
//         likes: 314,
//         timestamp: '2020-01-29T17:03:39.370Z',
//         retweets: 835
//       }
//     ]
//   },
//   {
//     author: {
//       name: 'Jayden Kshlerin',
//       username: '@Jayden.Klocko',
//       profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/cyril_gaillard/128.jpg'
//     },
//     timestamp: 'Tue Jun 16 2020 23:53:53 GMT+0530 (India Standard Time)',
//     message: 'Iusto molestiae voluptatem totam ex et. Ipsam quis est quo tempora corporis velit non. #quis',
//     likes: 118,
//     retweets: 336,
//     comments: [
//       {
//         author: {
//           name: 'Ben Braun',
//           username: '@Ben20',
//           profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/tjrus/128.jpg'
//         },
//         message: 'Consequuntur quia dicta dolores fugit ipsam placeat quis eum enim. Quam ab qui et culpa et accusamus. #dolor',
//         likes: 806,
//         timestamp: '2020-09-16T21:09:02.375Z',
//         retweets: 814
//       },
//       {
//         author: {
//           name: 'Cheyenne Deckow',
//           username: '@Cheyenne71',
//           profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ooomz/128.jpg'
//         },
//         message: 'Quia quo dolores quia unde quos id voluptate aut. Qui delectus sunt est sapiente dolorem aut. #omnis',
//         likes: 454,
//         timestamp: '2020-06-22T00:05:13.570Z',
//         retweets: 192
//       },
//       {
//         author: {
//           name: 'Julia Leffler',
//           username: '@Julia_Effertz83',
//           profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/loganjlambert/128.jpg'
//         },
//         message: 'Nobis ut quo eveniet. Id eaque soluta dolor aut omnis ea modi.',
//         likes: 96,
//         timestamp: '2020-09-09T06:24:46.593Z',
//         retweets: 208
//       },
//       {
//         author: {
//           name: 'Presley Schmidt',
//           username: '@Presley_Wuckert',
//           profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/mohanrohith/128.jpg'
//         },
//         message: 'Atque deserunt dolorem eos est odio et molestiae quo qui. Maiores qui aspernatur voluptate qui laborum ut iure minus architecto. #voluptatem',
//         likes: 306,
//         timestamp: '2020-07-14T20:26:19.817Z',
//         retweets: 236
//       }
//     ]
//   }
// ]

const sortByTime = (data) => {
  data.sort((a, b) => {
    const aDate = new Date(a.timestamp)
    const bDate = new Date(b.timestamp)
    return bDate - aDate // less than 0 then index of a < b, a comes first ;P
  })
}
sortByTime(data)

export const mock = (data, delay = 300) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, delay)
  })
}

export const getDataByPage = (page, size) => {
  let result
  if ((page - 1) * 10 + size + 1 > data.length) {
    result = []
  } else {
    result = data.slice((page - 1) * 10, size)
  }
  return mock(result)
}

export const getDataByQueryString = (queryString, includeComments) => {
  let clean = queryString.replace(/[,/%^;:=`~]/g, '')
  clean = clean.replace(/\s{2,}/g, ' ')
  const searchStringArr = clean.split(' ')
  const searchStringPresent = (message) => searchStringArr.some((queryString) => message && message.includes(queryString))
  const result = data.reduce((acc, dta) => {
    const {
      message = '',
      comments = []
    } = dta

    if (searchStringPresent(message)) {
      acc.push(dta)
    }
    acc = acc.concat(comments.filter(({ message = '' }) => searchStringPresent(message)))
    return acc
  }, [])
  return mock(result, 1000)
}

export const getTrends = () => {
  const trends = new Set([])
  const search = (message = '') => (message.match(/#\w+/g) || []).forEach(item => trends.add(item))
  data.forEach(({ message, comments = [] }) => {
    search(message)
    comments.forEach(({ message }) => search(message))
  })
  return mock([...trends], 1000)
}

export const getUniqueUsers = () => {
  const users = new Set([])
  const addUser = (name = '') => users.add(name)
  const extract = ({ author: { username } }) => addUser(username)
  data.forEach((dta) => {
    extract(dta)
    const { comments } = dta
    comments.forEach(extract)
  })
  return mock([...users], 1000)
}
