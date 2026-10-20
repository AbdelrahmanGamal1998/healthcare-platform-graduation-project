const config = require('./config')
const express = require('express') 
const bodyparser = require('body-parser') 
const path = require('path') 
const app = express() 

var Publishable_Key = config.get('STRIPE_PUBLISHABLE_KEY')
var Secret_Key = config.get('STRIPE_SECRET_KEY')

const stripe = require('stripe')(Secret_Key) 

const port = process.env.PORT || 3004 

app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 

// View Engine Setup 
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs') 

app.get('/pay', function(req, res){ 
    res.render('PaymentHome', { 
    key: Publishable_Key 
    }) 
}) 

app.post('/payment', function(req, res){ 

    // Moreover you can take more details from user 
    // like Address, Name, etc from form 
    stripe.customers.create({ 
        email: req.body.stripeEmail, 
        source: req.body.stripeToken, 
        name: 'Health Care', 
        address: { 
            line1: 'TC 9/4 Old MES colony', 
            postal_code: '110092', 
            city: 'New Delhi', 
            state: 'Delhi', 
            country: 'India', 
        } 
    }) 
    .then((customer) => { 

        return stripe.charges.create({ 
            amount: 20000,    // Charing Rs 25 
            description: 'Online Reservation ', 
            currency: 'EGP', 
            customer: customer.id 
        }); 
    }) 
    .then((charge) => { 
        //res.send("Success")
        res.redirect("http://localhost:3001/examination")
       // console.log(res) // If no error occurs 
    }) 
    .catch((err) => { 
        res.send(err)    // If some error occurs 
    }); 
}) 

app.listen(port, function(error){ 
    if(error) throw error 
    console.log("Server created Successfully") 
})