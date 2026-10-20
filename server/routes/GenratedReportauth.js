const express      = require('express')
const router       = express.Router()

const GenratedReportController   = require('../controllers/GenratedReportController')

router.post('/Genrate',GenratedReportController.Genrate)


module.exports = router