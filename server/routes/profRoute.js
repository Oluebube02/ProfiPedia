const express = require('express')

const router = express.Router()

const verifyAuth = require('../middleware/VerifyAuth')

const {addProf, getProf, rateProf} = require('../controllers/profController')

router.get('/get_prof/:name', getProf)

router.use(verifyAuth)

router.post('/add_prof', addProf)

router.post('/rate_prof', rateProf)


module.exports = router