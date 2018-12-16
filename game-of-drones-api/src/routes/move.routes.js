'use strict';

function MoveRoutes(app) {
  var move = require('../controllers/move.controller');

  app
    .route('/moves')
    .get(move.getAllMoves)
    .post(move.createMove);

  app
    .route('/move/:moveId')
    .get(move.getMove)
    .put(move.saveMove)
    .delete(move.deleteMove);
}

module.exports = MoveRoutes;
