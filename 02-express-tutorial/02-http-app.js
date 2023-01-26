// HTTP method, to calling multiple paths on a server
const http = require('http') 
const {readFileSync} = require('fs')

// Here's we're getting only 1 file, but we'll hav to repeat z process for all the other internal paths we have under ./navbar-app.
const homePage = readFileSync('./navbar-app/index.html') 
const homeLogic = readFileSync('./navbar-app/browser-app.js') 
const homeImage = readFileSync('./navbar-app/logo.svg') 
const homeStyles = readFileSync('./navbar-app/styles.css') 

const server = http.createServer((req, res) => {
    // console.log(req.method)
    const url = req.url
    console.log(url)
    // Access the home page
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        // This used to be ('<h1>Home Page</h1>') but we replaced it with content from the index.html file that we linked above.
        res.end()
    }
    // Access the about page
    else if (url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()  
    }
        // Access the Logic page
    else if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})//Spell it out
        res.write(homeLogic)
        res.end()  
    }
        // Access Images/Logo
    else if (url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})//Check how this changed.
        res.write(homeImage)
        res.end()  
    }
        // Access Styles
    else if (url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()  
    }
    //Error 404
	else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Sorry, page not found</h1>')
        res.end()    
    }

})

server.listen(5000)
