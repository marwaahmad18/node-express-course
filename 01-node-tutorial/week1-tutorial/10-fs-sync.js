//File System module -- Sync, simplified with console.log from tutorial

const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result of joining the 2 txt files: ${first} AND ${second}. `,
    {flag: 'a'}
)

console.log('done with this task');
console.log('starting the next one')