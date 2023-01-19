
const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt')//Use <'utf8'> if you don't want the buffer message. 
//In this case, tutor wanted to showcase how a Big file of 64kb (+ remainder buffer) can be read in chuncks using createReadStream

stream.on('data', (result)=>{
    console.log(result)
})
