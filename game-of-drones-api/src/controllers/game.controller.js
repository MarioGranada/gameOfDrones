'use strict';

var mongoose = require('mongoose'),
  Game = mongoose.model('Game');
Round = mongoose.model('Round');
Player = mongoose.model('Player');

module.exports = {
  createGame: createGame,
  saveGame: saveGame,
  deleteGame: deleteGame,
  getGame: getGame,
  getAllGames: getAllGames,
  getGameRounds: getGameRounds,
  getGamePlayers: getGamePlayers
};

function getAllGames(req, res) {
  Game.find({}, function(err, game) {
    if (err) res.send(err);
    res.json(game);
  });
}

function getGameRounds(req, res) {
  Round.find({ game: req.params.gameId }, function(err, rounds) {
    if (err) {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Game not found ' + req.params.gameId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving Game' + req.params.gameId
      });
    }
    res.send(rounds);
  });
}

function getGamePlayers(req, res) {
  Player.find({ game: req.params.gameId }, function(err, players) {
    if (err) {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Game not found ' + req.params.gameId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving Game' + req.params.gameId
      });
    }
    res.send(players);
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
