// CommonJS
// Modules
    //Example of invoking a function inside of a module, without assigning it a variable: const (later, under app.js)
        //Why? Bcz when you import a module, you're actually invoking it.
            //& Bcz we wrote a code that will actually get executed here: addValues()
    
const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is : ${num1 + num2}`)
} 

addValues() // Here we didn't set up an "exports" function, but we simply invoked addValues, instead.
                //After that, we didn't had to assign a new const in app.js, but simply added the "require" call & the code worked!