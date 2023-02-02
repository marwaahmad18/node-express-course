//Middleware options

const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// 1. use vs. route (@6h37min)
// 2. options - our own middleware functions/ those that come with express / Or 3rd parties'

//app.use([logger, authorize])
//app.use(express.static('./public'))
app.use(morgan('tiny'))
app.get('/', (req, res) =>{ 
  res.send('Homepage')
})
app.get('/about', (req, res) =>{  
  res.send('About Page')
})

app.get('/api/products', (req, res) =>{  
  res.send('Products page')
})

app.get('/api/services', (req, res) =>{  
  console.log(req.user)//Eventhough our app.use is commented out, we're still accessing the middleware located in authorize.js app. 
  res.send('Services page')
})

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...')
})