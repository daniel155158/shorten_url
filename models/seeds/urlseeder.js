const mongoose = require('mongoose')
const Url = require('../url')

//非production環境使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
//MONGOOSE CONNECT
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('MongoDB error')
})

db.once('open', () => {
  console.log('MongoDB connected')
  for (let i = 0; i < 3; i++) {
    Url.create({ url_origin: `http://test${i}`, url_shorten: `http://test${i}_shorten`, keywords: `test{i}` })
  }
  console.log('Done!')
})