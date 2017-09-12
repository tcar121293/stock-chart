const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.route('/')
    .post(controller.sendData)
router.route('/stocks')
    .get(controller.getStocks)
    .delete(controller.deleteStocks)

router.route('/getStocks')
.get(controller.stocks)

router.route('/deleteStock')
    .delete(controller.deleteStock)

    
    

module.exports = router