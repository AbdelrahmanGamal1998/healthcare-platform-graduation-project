const express      = require('express')
const router       = express.Router()
const upload       = require('../middleware/upload')

const MedicalHistoryController   = require('../controllers/MedicalHistoryController')


router.post('/createMH',upload.single('attachment'),MedicalHistoryController.createMH)
router.get('/showMedical',MedicalHistoryController.showMedical)
router.post('/updateMH',MedicalHistoryController.updateMH)

module.exports = router