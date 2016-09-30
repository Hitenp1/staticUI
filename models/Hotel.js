var Sequelize = require('sequelize');
var db = require('./db');





var Hotel = db.define('hotel', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {min: 1, max:5}
    }
});



module.exports = Hotel;