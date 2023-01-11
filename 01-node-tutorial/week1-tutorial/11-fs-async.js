//File System module -- Async

const {readFile, writeFile} = require('fs')

//1) Provide a callback, which happens when a function is complete
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err)
        return
    }
    const second = result;
    writeFile('./content/result-async.txt', 
    `Here is the result of joining the 2 async txt files: ${first} AND ${second}. `
    , (err, result) => {
     if (err){
        console.log(err)
        return
    }   
    console.log(result)//will say undefined. No prob.
    }
    )
})
})