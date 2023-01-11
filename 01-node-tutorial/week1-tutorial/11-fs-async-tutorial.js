//File System module -- Async following tutorial to make a point about async being less time consuming than fs-sync.

const {readFile, writeFile} = require('fs')

console.log('start');
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
    console.log('done with this task')
    }
    )
})
})
console.log('starting next task')