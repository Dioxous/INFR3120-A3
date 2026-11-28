var express = require('express');
var router = express.Router();

var Report = require('../models/report.js');

//get reports page
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

//get add page
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

//create new report item in database
router.post('/reports/add', async(req, res, next) => {
    try{
        let newReport = Report({
            "road": req.body.road,
            "type": req.body.type,
            "impact": req.body.impact,
            "description": req.body.description,
            "status": req.body.status
        });

        Report.create(newReport).then(() => {res.redirect('/reports')});
    }
    catch(err){
        console.error(err);
        res.render('error', {
            title: 'Error'
        });
    }
});

module.exports = router;