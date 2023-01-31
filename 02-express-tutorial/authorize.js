const autorize = (req, res, next) => {
    const{user} = req.query;//{user} to keep it generic, applying to all possible users
        if(user === 'john'){//user is my Key & John the value of the person I'm expecting
            req.user = {name: 'john', id: 3}//req.user is my middleware, located under authorize. I can access it specifically
                                                //Check use vs. route lesson @6h37min.
            next()
        }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = autorize