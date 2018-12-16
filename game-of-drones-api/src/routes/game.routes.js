'use strict';

function GameRoutes(app) {
  var game = require('../controllers/game.controller');

  app
    .route('/games')
    .get(todoList.getAllGames)
    .post(todoList.createGame);

  app
    .route('/game/:gameId')
    .get(game.getGame)
    .put(game.saveGame)
    .delete(game.deleteGame);
}

module.exports = GameRoutes;
