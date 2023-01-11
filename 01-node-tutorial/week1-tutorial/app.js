// CommonJS
// Modules

const names = require('./4-names')

const sayHi = require('./5-utils')

const data = require('./6-alternative-using-array')

require('./7-mind-grenade') // Although we didn't assign the Code to a variable (under 7-mind...), it worked
                                // Bcz when you import a module, you're actually invoking it
                                    //Why? Bcz when node exports a code, it actually wrapps it in the functuion
                                        //& bcz under 7-mind..., we have already invoke the code & executed it with: addValues()

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)