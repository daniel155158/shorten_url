const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const generateShortenURL = require('./generate_shorten_url')
const Url = require('./models/url')
const port = 3000

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
})

//Setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//Setting app.use
app.use(bodyParser.urlencoded({ extended: true }))

//Setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const url_origin = req.body.url_origin
  //尋找資料庫是否已有這筆url資料
  Url.find({ url_origin })
    .lean()
    .then((url) => {
      if (url.length) {
        //資料庫已經有這筆url的資料->回傳相對應的短網址
        res.render('show', { url_shorten: url[0].url_shorten })
      } else {
        //資料庫還沒有這筆url的資料->新增資料
        const url_shorten = generateShortenURL(url_origin)
        Url.create({ url_origin, url_shorten })
          .then(() => res.render('show', { url_shorten }))
          .catch(error => console.error(error))
      }
    })
    .catch(error => console.error(error))
})

app.listen(port, () => {
  console.log("APP is listening on http://localhost/3000")
})