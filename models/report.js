const mongoose = require('mongoose');

let reportModel = mongoose.Schema({
    road: String,
    type: String,
    description: String,
    impact: String,
    status: String
},
{
    Collection: 'reports'
});

module.exports = mongoose.model('Report', reportModel);

