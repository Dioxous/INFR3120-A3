var express = require('express');
var router = express.Router();

var Report = require('../models/report.js');


router.get('/', async(req, res, next) => {
    try{
        const allReports = await Report.find();
        res.render('reports/all', {
            title: 'Reports',
            allReports: allReports
        });
    }
    catch(err){
        console.error(err);
        res.render('error', {title: 'Error'});
    }
});

router.get('/add', async(req, res, next) => {
    try{
        res.render('reports/add', {
            title: 'Add'
        })
    }
    catch(err){
        console.error(err);
        res.render('error', {title: 'Error'});
    }
});

module.exports = router;