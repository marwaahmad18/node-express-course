// Methods

//1) HTTP method, reading data: GET
const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

//2) Get access to the Static file method, to be used later to complete our POST req.
app.use(express.static('./methods-public'))//To have access to z 2x .html & 2x .css files prepared by z tutor.

//3) Parse form data, which is going to parse the sent data & add z value to req.body
app.use(express.urlencoded({extended: false}))

//4) Parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...')
})