const db = require('../../config/mongoose')
const Url = require('../url')
const port = 3000

const seeders = [
  {
    url_origin: 'https://www.google.com/',
    url_shorten: `http://localhost:${port}/url1`,
    keywords: 'url1',
  }, {
    url_origin: 'https://tw.yahoo.com/',
    url_shorten: `http://localhost:${port}/url2`,
    keywords: 'url2',
  }, {
    url_origin: 'https://www.youtube.com/',
    url_shorten: `http://localhost:${port}/url3`,
    keywords: 'url3',
  }
]

db.once('open', () => {
  Url.insertMany(seeders)
  console.log('Done!')
})