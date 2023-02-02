// Methods

//1) HTTP method, reading data: GET
const express = require('express')
const app = express()
let {people} = require('./data')//people is a local array that holds a series of people names & ID. 

app.get('/api/people', (req, res) =>{
  res.status(200).json({success: true, data: people})//We'll send back the object saying that the success property is true.
                                                      //(aka, that the req. was successful) & that the data property is ppl.
})

//2) Get access to the Static file method, to be used later to complete our POST req.
app.use(express.static('./methods-public'))//To have access to z 2x .html & 2x .css files prepared by z tutor.

//3) Parse form data, which is going to parse the sent data & add z value to req.body
app.use(express.urlencoded({extended: false}))

//4) Parse json
app.use(express.json())//This middleware that allows me to handle the incoming json data.

app.get('/api/people', (req, res) =>{
  res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res)=>{
  const {name} = req.body
  if (!name){
    return res.status(400).json({success: false, msg: 'Please provide name value'})//More on the error msg & property, in javascript.html
  }
  res.status(201).json({success: true, person: name})//Using the .json method not: .send.
})

//5) Testing postman
app.post('/api/people/postman', (req, res)=>{
  const {name} = req.body
  if (!name){
    return res.status(400).json({success: false, msg: 'Please provide name value'})
  }
  res.status(201).json({success: true, data: [...people, name]})//using the spread operator
})

app.post('/login', (req, res)=>{//The '/login' route is what the instructor has set up for the form
                                  //His 2x .js examples will be manipulating the people object.
  //console.log(req.body)
  const {name} = req.body;
  if (name){
    return res.status (200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please provide your credentials')//If no value was sent through the Form
})

//6) PUT req. hav 2 functions: 1) Access id (wz: req.params) & 2) Update the body (changing its content to supply new values)
app.put('/api/people/:id', (req, res)=>{
  const {id} = req.params//This is going to tell me which item
  const {name} = req.body//This is going to update my array.
  // console.log(id, name)
  // res.send('Hey, there!')
  const person = people.find((person)=>person.id=== Number(id))//To supply those 2 values in Postman
    if (!person){
      return res.status(404)//That's the code if we can't find a resource.
      .json({success: false, msg: `no person with id ${id}`})
    }
   const newPeople = people.map((person)=>{
    if(person.id === Number(id)){//If the person's id, matches the one I have in params, then change the name in the body
      person.name = name
    }
    return person
   }) 
   res.status(200).json({success: true, data: newPeople})
})

//7) DELETE
app.delete('/api/people/:id', (req, res)=>{
  const person = people.find((person)=>person.id=== Number(req.params.id))//To destructure the id & access params directly
    if (!person){
      return res.status(404)//That's the code if we can't find a resource.
      .json({success: false, msg: `no person with id ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
  })

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...')
})