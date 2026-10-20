const express      = require('express')
const router       = express.Router()


const ArduinoController   = require('../controllers/ArduinoController')

router.get('/Sensor',ArduinoController.sensor)

module.exports = router