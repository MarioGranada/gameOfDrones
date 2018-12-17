var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  Game = require('./src/models/game.js'),
  Move = require('./src/models/move.js'),
  Player = require('./src/models/player.js');

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost/gameOfDronesAPI',
  { useNewUrlParser: true }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/routes/core.routes.js');
routes(app);

app.listen(port);

console.log('Game of Drones RESTful API server started on ' + port);
