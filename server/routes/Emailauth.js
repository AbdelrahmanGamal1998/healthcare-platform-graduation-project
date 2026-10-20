const express      = require('express')
const router       = express.Router()


const EmailController   = require('../controllers/EmailController')

router.post('/createPF',EmailController.createPF)


module.exports = router