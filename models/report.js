const mongoose = require('mongoose');

let reportModel = mongoose.Schema({
    road: String,
    type: String,
    impact: String,
    description: String,
    status: String
},
{
    Collection: 'reports'
});

module.exports = mongoose.model('Report', reportModel);

