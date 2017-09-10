const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.route('/')
    .post(controller.sendData)
router.route('/getStocks')
    .get(controller.getStocks)

module.exports = router