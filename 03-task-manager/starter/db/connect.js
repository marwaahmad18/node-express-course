//We were instructed not to copy/paste MongoDB URL into z code
//but I used a fake password & an email account that I have no longer access to.

const mongoose = require('mongoose')
                                      
//Setting up the env variable later
const connectDB = (url)=>{//using the (url) param.
    return mongoose.connect(//That's the method
        url, {//Step 3: When we've deleted from above: const connectionString + password to .env, we had to replace it here too.
        useNewUrlParser: true,//This code block will remove the "DeprecationWarning"
        useCreateIndex: true,//& I should see: "Connected to the DB..." in console
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB


/* To sync. z database to the server, he deleted these 2 lines:
.then(()=>console.log('CONNECTED TO THE DB...'))
.catch((err)=>console.log(err))
//Now to execute the functions, we need to import (= require) the module in the app.js file
*/