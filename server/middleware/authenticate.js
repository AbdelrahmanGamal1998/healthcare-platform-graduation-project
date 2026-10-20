const config = require('../config')
const jwt =require('jsonwebtoken')

const authenticate = (req ,res ,next) =>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode =jwt.verify(token,config.get('JWT_SECRET'))

        req.user = decode
        next()
    }
    catch(error){
        res.json({
            message :'Authenticatin Faield !!'
        })
    }
}

module.exports = authenticate