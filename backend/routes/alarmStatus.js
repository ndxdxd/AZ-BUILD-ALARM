const express = require('express')
const { getRecentInsert } = require('../controllers/alarmControllers');
const {getAlarms} = require('../controllers/alarmControllers')
const router = express.Router()

//get all the alarm status
router.get('/', (req, res) => {
    console.log('App Object:', req.app);
    getAlarms(req, res);
  });

//get one alarm status
router.get('/recentInsert', (req, res) => {
    const recentInsert = getRecentInsert();
    res.json(recentInsert);
});


module.exports = router 