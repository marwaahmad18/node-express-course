//Path module

const path = require('path')

//A method that brings the specific separator that a platform is using
console.log(path.sep)

//To "join arguments together" (ex. the 3 we just created: test.txt, located within folders: content & subfolder) & "normalize the resulting path."
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//To access the name of the base file (test.txt), use the method: basename
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)