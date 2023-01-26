var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)//This pushes from the read stream to the write stream. 
                            //To both Read & Write data in chuncks, under "Transfer-Encoding"
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)