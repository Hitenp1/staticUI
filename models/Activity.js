var Sequelize = require('sequelize');
var db = require('./db');


var Activity = db.define('activity', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING,
        allowNull: true
    }
});




module.exports = Activity; 


