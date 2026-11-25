var express = require('express');
var router = express.Router();

var Report = require('../models/report.js');

router.get('/', async (req, res, next) => {
    try {
        const reportList = await Report.find();
        res.render('reports/all', {
            title: 'Reports',
            reportList: reportList
        });
    }
    catch(err){
        console.error(err);
        res.render('error', {title: 'Error'})
    }
});

module.exports = router;