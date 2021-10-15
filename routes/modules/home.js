const express = require('express')
const router = express.Router()

const Url = require('../../models/url')
const createShortUrl = require('../../public/javascripts/create_short_url')
const hostUrl = 'http://localhost:3000/'

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl
  let shortUrl

  Url.findOne({ originalUrl })
    .lean()
    .then(url => {
      if (!url) {
        shortUrl = hostUrl + createShortUrl()
        Url.create({ originalUrl, shortUrl })
      } else {
        shortUrl = url.shortUrl
      }
      res.render('index', { originalUrl, shortUrl })
    })
    .catch(error => console.log(error))
})

router.get('/:urlSuffix', (req, res) => {
  const shortUrl = hostUrl + req.params.urlSuffix

  Url.findOne({ shortUrl })
    .lean()
    .then(url => {
      res.redirect(url.originalUrl)
    })
    .catch(error => console.log(error))
})

module.exports = router