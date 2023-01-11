//File System module -- Sync in details 

const {readFileSync, writeFileSync} = require('fs')
/* This would yield the same result, had I deconstructed it by writing:
const fs = require('fs');
fs.readFileSync OR fs.writeFileSync
*/

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)

//Now, if you want to create a file that includes both texts from the 2 txt files, use method: writeFileSync
    //Remember, this method would overwrite any content that existed in a file, if it were created already.
    //Otherwise, node.js will create the file from scratch.
writeFileSync(
    './content/result-sync.txt',
    `Here is the result of joining the 2 txt files: ${first} AND ${second}. `,
    {flag: 'a'}//This is a method to appendice the content. 
)