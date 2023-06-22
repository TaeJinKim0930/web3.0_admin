const cors = require('cors');
const compression = require('compression');
const express = require('express');
const router = express.Router();


const ethQController = require('../controllers/ethQController');
const insertPurchasedController = require('../controllers/insertMasterController');
const getCEDsController = require('../controllers/getCEDsController');

/**
 * If individual price is needed, you can activate below, but also needs to activate res.json in each controllers.
 * We are currently using those 
 
const ethController = require('../controllers/ethControllers');
const cedsController = require('../controllers/cedsController');

Collects ehtereum current price from controller
router.get('/ethPrice', ethController.getEthPrice);
Collects cedars current price from controller
router.get('/cedsPrice', cedsController.getCedsPrice);
 * 
 */


router.get('/calEthQunt', ethQController.calEthQunt);
router.post('/purchased', insertPurchasedController.insertCoinMaster);
router.get('/CDES', getCEDsController.getCEDS);
router.get('/')



module.exports = router;