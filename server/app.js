const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log(req.url, req.method)
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501, http://127.0.0.1:5501')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')


    // res.setHeader('Access-Control-Allow-Origin', 'abc.com')
    res.setHeader('Access-Control-Expose-Headers', 'Pard-Id')
    res.end()
  } else {
    next()
  }
})

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send('hello')
})

app.post('/post', (req, res) => {
  console.log(123)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // res.setHeader('Access-Control-Allow-Headers', 'foo')
  // res.setHeader('Access-Control-Allow-Credentials', 'true')
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT')
  // res.setHeader('Access-Control-Expose-Headers', 'foo')
  res.send('post data')
})

app.listen(3000, () => {
  console.log('running...')
})
