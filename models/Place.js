var Sequelize = require('sequelize');
var db = require('./db');





var Place = db.define('place', {
    
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING   
    },
    location: {
        type: Sequelize.FLOAT(10,10), 
        allowNull: false
    },
});



module.exports = Place;