//Testing with another data type: Arrays

/*
1) Create array of 2 items
const items =['item1', 'item2']; 

2) Create Object "person"
const person = {
    name: 'Bob',
}
*/

/*3) Now to export it, we have 2 Options:
    A) Change the const value "items" to export directly:
module.exports.items = ['item1', 'item2']
const person = {
    name: 'Bob',
}
    B) OR make it more complex:
*/
module.exports.items = ['item1', 'item2']
//Here we're setting up a property on the "items" Object, that happens to be equal to an array.
const person = {
    name: 'Bob',
}

module.exports.singlePerson = person; //Here, we created another property "singlePerson" & set it equal to "person."
                                        // A simpler version, would have been to only: module.exports=person
                                         // PS: If we weren't exporting, we could have simply: console.log(person)
