//Middleware use

const express = require('express')
const app = express()
const logger = require('./logger')
app.use('/api', logger)//app.use will invoke logger for any path.

app.get('/', (req, res) =>{ //delete all instances of logger, but add one method above: app.use(logger)
  res.send('Homepage')
})
app.get('/about', (req, res) =>{  
  res.send('About Page')
})

app.get('/api/products', (req, res) =>{  
  res.send('Products page')
})

app.get('/api/services', (req, res) =>{  
  res.send('Services page')
})

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...')
})