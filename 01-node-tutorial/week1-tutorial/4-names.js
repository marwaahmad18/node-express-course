// CommonJS
// Modules for
    // Data type: Object with 2 params.

// local (limit how much you want to share. Keep this one a secret).
const secret ="SUPER SECRET"

// make these 2 shareable
const john = "John"
const peter = "Peter"

module.exports = {john, peter} //Here's we're exporting 1 Object with 2 Params.
    //PS: If we weren't exporting, we would have just called it this way: console.log(john, peter)
