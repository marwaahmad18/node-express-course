//What if we can set up a server more efficiently than the 01-http-basic way?

const http = require('http') 
const {readFileSync} = require('fs')

// Get all files but for now, just this index.html we just created
// 1) Create a variable, use a method to read it & indicate its location
const homePage = readFileSync('./index01.html') 
// Note: We used readFileSync bcz we're not invoking it every time a client visits the server (i.e., request a file)
// We just required it when we instantiated it (i.e., only z initial time when the server starts running)
    //PS: This doesn't apply had we nested the readFileSync in any other location, like createServer or within the if block.

const server = http.createServer((req, res) => {
    //console.log(req.method)
    const url = req.url;
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
    //Error 404
	else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()    
    }

})

server.listen(5000)
