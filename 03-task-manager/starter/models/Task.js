const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    //name:String, completed:Boolean -> Now fixing the validation issue
    name:{
type:String,
required: true,//meaning if we pass in the value (our object: name) without our name property, then z result would be: error
                //it can also be set up as an array: required: [true, 'must provide name']
trim:true,//where the unnecessary spaces added b4 or after a name, would be resolved b4 that they are added to my collection. 
maxlength: [20, 'name cannot be more than 20 characters']//These are basic validators for the name
    },
    completed: {//some default values include:
type: Boolean,
default: false,
    },
})
module.exports = mongoose.model('Task', taskSchema)//Looking for 2 things, then pass in the schema