var express = require('express');
var router = express.Router();

var Report = require('../models/report.js');

router.get('/', function(req, res, next) {
    res.render('reports/all', {title: 'Reports'});
});

module.exports = router;