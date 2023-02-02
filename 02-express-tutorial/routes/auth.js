//Same as setting up the people path, for the login api, now.

const express = require('express');
const router = express.Router();

let {auth} = require('../data')

router.post('/', (req, res)=>{
    const {name} = req.body;
    if (name){
    return res.status (200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide your credentials')//If no value was sent through the Form
    })

module.exports = router
