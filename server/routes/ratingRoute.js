const express = require('express')

const router = express.Router()

const verifyAuth = require('../middleware/VerifyAuth')

const {getRatings, addRating} = require('../controllers/ratingController')

router.get('/get-rating/:id', getRatings)

router.use(verifyAuth)

router.post('/rate', addRating)

module.exports = router