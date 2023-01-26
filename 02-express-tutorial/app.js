//

const express = require('express')
const { escapeRegExp } = require('lodash')
const app = express()

const {products} = require('./data')

app.get('/', (req, res)=> {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res)=> {
  const newProducts = products.map((product)=>{
    const {id, name, image}= product//use exactly same objects name used inside data.js, for each object that represents a product
    return{id, name, image}//Must return it.
  })
  res.json(newProducts)//change from products to newProduct
})

app.get('/api/products/:productID', (req, res)=> {
  // console.log(req);
  // console.log(req.params);
  const {productID} = req.params//This will fetch me the productID but for now, it's a string. To fix this, use:
  const singleProduct = products.find(
    (product)=> product.id=== Number(productID))//change #1 to this.

  if (!singleProduct){//Exclamation to say: if singleProduct doesn't exist
    return res.status(404).send('Product does not exist')
  }
    return res.json(singleProduct)//return that product.
})
//Getting more complex with our param.
app.get('/api/products/:productID/reviews/:reviewID', (req, res)=> {
  console.log(req.params);
  res.send('Hello world')
})

app.get('/api/v1/query', (req, res) => {
  const {search, limit}= req.query//instead of console.log(req.query) z query. I'm looking for 2 keys. 
  let sortedProducts = [...products];//This is my new array. I used let bcz we'll b modifying this value in the future.
  //We still need to filter our search:
  if (search){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
  }
  if (limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))//now we're talking numbers.
  }
  if (sortedProducts.length <1){
    // res.status(200).send('Sorry, no product match your search query')
    return res.status(200).json({success:true, data:[]})
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...')
})