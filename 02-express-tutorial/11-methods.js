// Methods

//1) HTTP method, reading data: GET
const express = require('express')
const app = express()
let {people} = require('./data')

app.get('/api/people', (req, res) =>{
  res.status(200).json({success: true, data: people})//We'll send back the object saying that the success property is true.
                                                      //(aka, that the req. was successful) & that the data property is ppl.
})

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...')
})