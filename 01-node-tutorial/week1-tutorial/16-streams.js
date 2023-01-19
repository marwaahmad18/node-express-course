// This is how it was initially:
/*
const { createReadStream } = require('fs')

    // default 64kb
    // last buffer - remainder
    // highWaterMark - control size
    // const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
    // const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))
*/


// The following is on: How to use the highWaterMark & encoding to control the size of the buffer

const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'})

//To "control" the size of the buffer (+ it's remainder),
//pass in the object/property that controls the size of the buffer: {highWaterMark: 90000}
//and the encoding, right where you're setting up the createReadStream function above. 

stream.on('data', (result)=>{
    console.log(result)
})

stream.on('error', (err)=> console.log(err))//just to see where's your error
