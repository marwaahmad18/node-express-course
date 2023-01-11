//OS module -- Properties & methods used to interact with the Operating System AND the server
    //Bcz it's built in, we don't need to instale anything -- Unlike "external" modules, which requires: ('./insert_module_location').

//Start by creating a variable.
const os = require('os')

//Fetch info about current user using method: userInfo
const user = os.userInfo();
console.log(user)

//Log how long has the comp. been running (in seconds) using method: uptime
console.log(`The system uptime is ${os.uptime} seconds`);

//Accessing a bunch of info of our terminal using ready to use methods.
const currentOS = {
    name: os.type(), // we invoked this
    relearse: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)