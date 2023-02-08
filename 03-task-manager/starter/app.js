
/*
Here, he was trying to execute the functions available in connect.js to connect the database to our server
require('./db/connect')// & the console would show DeprecationWarning for the time being.
*/
//Then he called the function he created in connect.js by doing this:
const connectDB = require('./db/connect')//+ he added something @ the bottom
require('dotenv').config()//To invoke the config.

//1) Basic express server setup
const express = require ('express')
const app = express() 
//3) Now import the router found in tasks.js
const tasks = require('./routes/tasks')

//4) Since we'll b sending json from our app. (the server where clients could submit their input),
//& since we want to access that data in our routes, then: use builtin Express: Middleware.
app.use(express.json()) //It will make the data print in req.body

//2) Routes
app.get('/hello', (req, res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

//app.get('/api/v1/tasks')  - GET all the tasks
//app.post('/api/v1/tasks')  - Create a new tasks
//app.get('/api/v1/tasks/:id')  - GET a single, specific tasks
//app.patch('/api/v1/tasks/:id')  - Update tasks
//app.delete('/api/v1/tasks/:id')  - DELETE tasks

//1)
const port = 3000

const start = async()=>{//An async promise: Invoke DB, & only if this was successful, then connect to server.
    try{//Use try-catch block to control errors
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))//spinup the server only if the connection is succ.
} catch(error){
    console.log(error)
}
}
start()