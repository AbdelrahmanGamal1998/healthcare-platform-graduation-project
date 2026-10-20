const express      = require('express')
const router       = express.Router()


const AppointmentController   = require('../controllers/AppointmentController')

router.post('/reserveOnline',AppointmentController.reserveOnline)
router.get('/showAppointments',AppointmentController.showAppointments)


module.exports = router