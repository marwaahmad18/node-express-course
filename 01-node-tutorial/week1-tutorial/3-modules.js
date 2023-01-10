// CommonJS
// Calling Modules (using 2 diff. Data types: A function & an Object of 2 variables)

const names = require('./4-names')
// //1) Assign it a variable
//     // Use anything, like "names" to be able to console.log it. 
// //2) Use "require" bcz it's the function that I'm calling. One of other "globals" functions.
// //3) To call a module, use the parameter that specify where the module is located: The Path. 
//     //For this, open brackets & quotation, then always start with:   ./
//         //PS: the more levels (file inside file inside file), the more dots you'll use.
// //4) Don't add .js to the file's name bcz we're already in a js file. Just make sure it's the correct file name.

//  --   console.log(names)
        // Use console.log to call the 1 Object of 2 param.
            // Where john & peter would appear without displaying the "secret" variable
                //(bcz I didn't add that to the "modules.exports={}" params.)

// Same process to call the 1 function in the utils file, but without console.log this time, bcz it would display "john undefined"
const sayHi = require('./5-utils')

sayHi('Susan')
sayHi(names.john)// We did this, bcz john & peter alone, weren't considered defined.
                    //Option1: replace names with john & add another one for peter (but it's too comborsome
                    //Option2: add the property "names" to what you want displayed, as such: (names.john) & (names.peter) 
sayHi(names.peter)