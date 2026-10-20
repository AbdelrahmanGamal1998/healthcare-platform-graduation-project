const express      = require('express')
const router       = express.Router()
const upload       = require('../middleware/upload')

const PatientAuthController   = require('../controllers/PatientAuthController')


router.post('/register',upload.single('Image'),PatientAuthController.register)
router.post('/login',PatientAuthController.login)
router.get('/showPatient',PatientAuthController.showPatient)


module.exports = router