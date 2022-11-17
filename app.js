const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const port = 3000

//Setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log("APP is listening on http://localhost/3000")
})