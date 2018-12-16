'use strict';

function PlayerRoutes(app) {
  var player = require('../controllers/player.controller');

  app
    .route('/players')
    .get(player.getAllPlayers)
    .post(player.createPlayer);

  app
    .route('/player/:playerId')
    .get(player.getPlayer)
    .put(player.savePlayer)
    .delete(player.deletePlayer);
}

module.exports = PlayerRoutes;
