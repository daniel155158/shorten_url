const db = require('../../config/mongoose')
const Url = require('../url')

db.once('open', () => {
  // console.log('MongoDB connected')
  for (let i = 0; i < 3; i++) {
    Url.create({ url_origin: `http://test${i}`, url_shorten: `http://test${i}_shorten`, keywords: `test${i}` })
  }
  console.log('Done!')
})