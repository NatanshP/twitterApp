const faker = require('faker')
const fs = require('fs')
// console.log('hsd fdsk flj ')
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
  },
  date
} = faker
// const firstName = faker.name.firstName()
// const lastName = faker.name.lastName()
// const userName = faker.name.userName()

// const jobTitle = faker.name.jobTitle()
// const prefix = faker.name.prefix()
// const suffix = faker.name.suffix()
// const jobArea = faker.name.jobArea()

// const phone = faker.phone.phoneNumber()

// console.log(`${firstName} ${lastName}`)
// console.log(`Job title: ${jobTitle}`)
// console.log(`Job area: ${jobArea}`)
// console.log(`Phone: ${phone}`)

console.log(JSON.stringify(date))
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

const generateComment = (minDate) => {
  return {
    author: getAuthor(),
    message: `${getMessage()}`,
    likes: num(1000),
    timestamp: between(minDate, new Date()),
    retweets: num(1000)
  }
}

const generateTweetData = () => {
  const comments = []
  const dt = past()
  for (let i = 0; i <= Math.floor(Math.random() * 10); i++) {
    comments.push(generateComment(dt))
  }
  return {
    author: getAuthor(),
    timestamp: `${dt}`,
    message: getMessage(),
    likes: num(1000),
    retweets: num(1000),
    comments
  }
}

// console.log(generateTweetData())
const dataObj = []
for (let i = 0; i < 200; i++) {
  dataObj.push(generateTweetData())
}

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'))
