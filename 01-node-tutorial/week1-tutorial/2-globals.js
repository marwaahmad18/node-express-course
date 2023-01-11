console.log(__dirname)
// Other modules incl.:
    // (__filename)
    // (require) - function to use module (CommonJS). Ex. of john & peter, in names.
    // (module) - function about the exact content that you want to share from a file.
        // Module allows us to limit what we want to share: Encapsulate code. Puts us in charge of what we're sharing
            // PS: Every file is a module by default (CommonJS)
    // & (process) - info. about environment
    
setInterval(() => {
    console.log("Hello world")
}, 1000);