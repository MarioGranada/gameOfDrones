'use strict';

var mongoose = require('mongoose'),
  Game = mongoose.model('Game');

module.exports = {
  createGame: createGame,
  saveGame: saveGame,
  deleteGame: deleteGame,
  getGame: getGame,
  getAllGames: getAllGames
};

function getAllGames(req, res) {
  Game.find({}, function(err, game) {
    if (err) res.send(err);
    res.json(game);
  });
}

function createGame(req, res) {
  var newGame = new Game(req.body);
  newGame.save(function(err, game) {
    if (err) res.send(err);
    res.json(game);
  });
}

function saveGame(req, res) {
  Game.findOneAndUpdate(
    { _id: req.params.gameId },
    req.body,
    { new: true },
    function(err, game) {
      if (err) res.send(err);
      res.json(game);
    }
  );
}

function deleteGame(req, res) {
  Game.remove(
    {
      _id: req.params.gameId
    },
    function(err, game) {
      if (err) res.send(err);
      res.json({ message: 'Game successfully deleted' });
    }
  );
}

function getGame(req, res) {
  Game.findById(req.params.gameId, function(err, game) {
    if (err) res.send(err);
    res.json(game);
  });
}
