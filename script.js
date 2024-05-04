const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs");
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/link', (req, res) => {
  res.render('link')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})