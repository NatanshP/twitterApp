const faker = require('faker')
const fs = require('fs')
const {
  name: {
    firstName,
    lastName
  },
  internet: {
    userName,
    avatar
  },
  date: {
    past,
    between
  },
  lorem: {
    word,
    sentences
  },
  random: {
    number: num
  }
} = faker

const hashTagList = () => {
  const hashTag = []
  for (let i = 0; i < 10; i++) {
    hashTag.push(`#${word()}`)
  }
  return hashTag
}

const list = hashTagList()

const getHashTag = () => {
  return list[Math.floor(Math.random() * 10)]
}

const getAuthor = () => {
  const seed = Math.floor(Math.random() * 500)
  faker.seed(seed)
  const fn = firstName()
  faker.seed(seed)
  const ln = lastName()
  faker.seed(seed)
  const un = userName()
  faker.seed(seed)
  const a = avatar()

  return {
    name: `${fn} ${ln}`,
    username: `@${un}`,
    profilePic: `${a}`
  }
}

const getMessage = () => {
  const sent = sentences(2)
  let message = `${sent} ${Math.random() > 0.4 ? getHashTag() : ''}`
  if (message.length > 140) {
    message = message.substring(message.length - 140)
  }
  return message.trim()
}

const generateComment = (minDate, base, startId) => {
  return {
    id: base * 1000 + startId + 1,
    author: getAuthor(),
    message: `${getMessage()}`,
    likes: num(1000),
    timestamp: between(minDate, new Date()),
    retweets: num(1000)
  }
}

const generateTweetData = (startId) => {
  const comments = []
  const dt = past()
  for (let i = 0; i <= Math.floor(Math.random() * 10); i++) {
    comments.push(generateComment(dt, startId + 1, i))
  }
  return {
    id: startId + 1, // startId start from 0
    author: getAuthor(),
    timestamp: `${dt}`,
    message: getMessage(),
    likes: num(1000),
    retweets: num(1000),
    comments
  }
}

const dataObj = []
for (let i = 0; i < 200; i++) {
  dataObj.push(generateTweetData(i))
}

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'))
