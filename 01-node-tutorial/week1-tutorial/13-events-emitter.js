
const EventEmitter = require('events'); // request the 'events' module

//TO EMIT THE EVENT (using <emit>) & LISTEN FOR IT (aka <on>), DO THIS:

const customEmitter = new EventEmitter()//customEmitter is the Object & you can invoke it with empty brackets. 
customEmitter.on('response', (name, id)=> {// 'response' string is the eventName. It could be anything. 
                                            //Then must add a callback function that could include multiple params.
    console.log(`data received for user ${name} with id: ${id}`)
})
customEmitter.on('response', ()=> {// Here's our 2nd call back function
    console.log(`showcasing the many functions one can create for the same event`)
})

customEmitter.emit('response', 'John', 34)//Notice it worked despite the empty brackets in my 2nd response
                                            //bcz I specified John & 34 under the event emit.