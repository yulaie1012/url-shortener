// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define createShortUrl function
function createShortUrl() {
  // define things the system need
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  // create a collection to store things the system need
  const collection = lowerCaseLetters + upperCaseLetters + numbers

  // start generating a short url
  let shortUrl = ''
  for (let i = 0; i < 5; i++) {
    shortUrl += sample(collection)
  }

  // return the short url
  return shortUrl
}

module.exports = createShortUrl