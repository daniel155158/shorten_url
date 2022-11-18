const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateShortenURL = require('./generate_shorten_url')
const port = 3000

//Setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const url_origin = req.body.url_origin
  const url_shorten = generateShortenURL()
  res.render('show', { url_origin, url_shorten })
})

app.listen(port, () => {
  console.log("APP is listening on http://localhost/3000")
})