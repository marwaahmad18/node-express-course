//Middleware basics

const express = require('express')
const app = express()
// Request -> Middleware -> Response

const logger = (req, res, next)=>{//Usually, Express will take care of the (req, res, next) wzout me having 
                                    //to go through the trouble of setting'em up. But it logged error when I tried empty ()...
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()//MUST close the req.-res. cycle when we use middleware. Here, we decided to print something.
            // Alternatively, we could have moved to our next middleware: logger, inside the: .get method 
            //had we closed z cycle with a simple: next() instead of res.send, which would show Homepage, not Testing.
                    //But I'll remove this <res.send('Testing')> & put next() instead, 
                        //bcz it wouldn't allow me to print About page or Homepage anymore. It got stuck @: Testing.
}

app.get('/', logger, (req, res) =>{//Pay attention, I referenced the middleware function here so it applies to  
  res.send('Homepage')
})

app.get('/about', logger, (req, res) =>{//Now, to replicate our code, simply invoke the logger in every other path.  
  res.send('About Page')
})

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...')
})