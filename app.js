const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const routes = require('./routes')
require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(routes)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})