require('dotenv').config()

console.log("hello to backend");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/google', (req, res) => {
    res.send('google.com')
  })
  
  app.get('/login', (req, res) => {
    res.send('<h1> Please login at relentless learning</h1>')
  })
  app.get('/chai', (req, res) => {
    res.send('<h1> Please drink chia </h1>')
  })
  
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
