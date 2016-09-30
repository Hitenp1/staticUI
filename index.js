var express = require('express');
var nunjucks = require('nunjucks');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = new express();
var db = require('./models');
var Place = require('./models/Place');
var Hotel = require('./models/Hotel');
var Restaurant = require('./models/Restaurant');
var Activity = require('./models/Activity');

app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

app.use(morgan('dev'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(express.static(__dirname + '/public'));
app.use("/bootstrap",express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use("/jquery",express.static(__dirname + '/node_modules/jquery/dist'));


app.get('/', function (req, res, next) {
    var outerScopeContainer = {};
    Hotel.findAll()
      .then(function (dbHotels) {
      outerScopeContainer.dbHotels = dbHotels;
      return Restaurant.findAll();
    })
      .then(function (dbRestaurants) {
      outerScopeContainer.dbRestaurants = dbRestaurants;
      return Activity.findAll();
    })
      .then(function (dbActivities) {
      res.render('index', {
      templateHotels: outerScopeContainer.dbHotels,
      templateRestaurants: outerScopeContainer.dbRestaurants,
      templateActivities: dbActivities
    });
  })

    console.log("server is up")
});


// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(err.message
  );
});


 app.listen(3000, function () {
            console.log('Server is listening on port 3000! tHis is working');
        });
