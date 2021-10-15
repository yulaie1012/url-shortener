const Url = require('../url')
const db = require('../../config/mongoose')

db.once('open', () => {
  Url.create({ originalUrl: 'https://www.test.com/', shortUrl: 'http://localhost:3000/test0'})
})