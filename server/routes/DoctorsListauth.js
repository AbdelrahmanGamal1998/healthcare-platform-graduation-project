const express      = require('express')
const router       = express.Router()


const DoctorListAuthController   = require('../controllers/DoctorListController')

router.get('/getDoctors',DoctorListAuthController.getDoctors)


module.exports = router