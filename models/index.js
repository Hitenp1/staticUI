var db = require('./db');
var Hotel = require('./Hotel');
var Restaurant = require('./Restaurant');
var Activity = require('./Activity');
var Place = require('./Place');


Restaurant.belongsTo(Place);
Hotel.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;


// var Place = db.define('place', {
    
//     address: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     city: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     state: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     phone: {
//         type: Sequelize.STRING   
//     },
//     location: {
//         type: Sequelize.FLOAT(10,10), 
//         allowNull: false
//     },
// });

// var Hotel = db.define('hotel', {
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     num_stars: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//         validate: {min: 1, max:5}
//     }
// });


// var Activity = db.define('activity', {
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     age_range: {
//         type: Sequelize.STRING,
//         allowNull: true
//     }
// });


// var Restaurant = db.define('restaurant', {
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     cuisine: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     price: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         validate: {min: 1, max:5}
//     }
// });






// module.exports = {
//     Place: Place,
//     Hotel: Hotel,
//     Activity: Activity,
//     Restaurant: Restaurant
// };
