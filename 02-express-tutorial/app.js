// Methods

//1) HTTP method, reading data: GET
const express = require('express')
const app = express()
let {people} = require('./data')

//2) Get access to the Static file method, to be used later to complete our POST req.
app.use(express.static('./methods-public'))//To have access to z 2x .html & 2x .css files prepared by z tutor.


//3) Parse form data, which is going to parse the sent data & add z value to req.body
app.use(express.urlencoded({extended: false}))

app.get('/api/people', (req, res) =>{
  res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res)=>{
  res.status(201).send('Success')
})

app.post('/login', (req, res)=>{//The '/login' route is what the instructor has set up for the form
                                  //His 2x .js examples will be manipulating the people object.
  //console.log(req.body)
  const {name} = req.body;
  if (name){
    return res.status (200).send(`Welcome ${name}`)
  }

  res.status(401).send('Pleast provide your credentials')//If no value was sent through the Form
})

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...')
})