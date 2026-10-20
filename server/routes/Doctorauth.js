const express      = require('express')
const router       = express.Router()
const upload       = require('../middleware/upload')


const DoctorAuthController   = require('../controllers/DoctorAuthController')


router.post('/register',upload.single('doctorImage'),DoctorAuthController.register)
router.post('/login',DoctorAuthController.login)
router.get('/showDoctor',DoctorAuthController.showDoctor)


module.exports = router