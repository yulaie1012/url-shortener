const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes')
require('./config/mongoose')

app.use(routes)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})