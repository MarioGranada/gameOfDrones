'use strict';

var gameRoutes = require('./game.routes.js');
var moveRoutes = require('./move.routes.js');
var playerRoutes = require('./player.routes.js');
var roundRoutes = require('./round.routes.js');

module.exports = function(app) {
  gameRoutes(app);
  moveRoutes(app);
  playerRoutes(app);
  roundRoutes(app);
};
