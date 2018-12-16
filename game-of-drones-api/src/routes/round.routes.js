'use strict';

function RoundRoutes(app) {
  var round = require('../controllers/round.controller');

  app.route('/rounds').post(round.createRound);

  app.route('/round/:roundId').get(round.getRound);
}

module.exports = RoundRoutes;
