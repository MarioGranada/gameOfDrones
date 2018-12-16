'use strict';

var mongoose = require('mongoose'),
  Player = mongoose.model('Player');

module.exports = {
  createPlayer: createPlayer,
  savePlayer: savePlayer,
  deletePlayer: deletePlayer,
  getPlayer: getPlayer,
  getAllPlayers: getAllPlayers
};

function getAllPlayers(req, res) {
  Player.find({}, function(err, player) {
    if (err) res.send(err);
    res.json(player);
  });
}

function createPlayer(req, res) {
  var newPlayer = new Player(req.body);
  newPlayer.save(function(err, player) {
    if (err) res.send(err);
    res.json(player);
  });
}

function savePlayer(req, res) {
  Player.findOneAndUpdate(
    { _id: req.params.playerId },
    req.body,
    { new: true },
    function(err, player) {
      if (err) res.send(err);
      res.json(player);
    }
  );
}

function deletePlayer(req, res) {
  Player.remove(
    {
      _id: req.params.playerId
    },
    function(err, player) {
      if (err) res.send(err);
      res.json({ message: 'Player successfully deleted' });
    }
  );
}

function getPlayer(req, res) {
  Player.findById(req.params.playerId, function(err, player) {
    if (err) res.send(err);
    res.json(player);
  });
}
