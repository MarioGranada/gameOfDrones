var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser');

app.use(cors());
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/gameOfDronesAPI');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/core-routes.js'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Game of Drones RESTful API server started on ' + port);
