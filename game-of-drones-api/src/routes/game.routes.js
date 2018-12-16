'use strict';

function GameRoutes(app) {
  var game = require('../controllers/game.controller');

  app
    .route('/games')
    .get(game.getAllGames)
    .post(game.createGame);

  app
    .route('/game/:gameId')
    .get(game.getGame)
    .put(game.saveGame)
    .delete(game.deleteGame);

  app.route('game/:gameId/players').get(game.getGamePlayers);

  app.route('game/:gameId/rounds').get(game.getGameRounds);
}

module.exports = GameRoutes;
