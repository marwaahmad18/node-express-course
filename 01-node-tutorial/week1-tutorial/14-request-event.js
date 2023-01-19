
const http = require('http')

// That's the previous way we've learned  to set up an HTTP module:
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Another way instead of the call back function early on: Use Event Emitter API
const server = http.createServer()
// emits request event from behind the scene, using: server
// subcribe to it / listen for it, using: .on/ 
// Then, respond to it: By writing the call back function
server.on('request', (req, res) => {//'request' is a sepcific eventName that gets emitted from behind the scene
  res.end('Welcome')
})

server.listen(5000)