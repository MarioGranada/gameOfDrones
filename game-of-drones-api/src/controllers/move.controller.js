'use strict';

var mongoose = require('mongoose'),
  Move = mongoose.model('Move');

module.exports = {
  createMove: createMove,
  saveMove: saveMove,
  deleteMove: deleteMove,
  getMove: getMove,
  getAllMoves: getAllMoves
};

function getAllMoves(req, res) {
  Move.find({}, function(err, move) {
    if (err) res.send(err);
    res.json(move);
  });
}

function createMove(req, res) {
  var newMove = new Move(req.body);
  newMove.save(function(err, move) {
    if (err) res.send(err);
    res.json(move);
  });
}

function saveMove(req, res) {
  Move.findOneAndUpdate(
    { _id: req.params.moveId },
    req.body,
    { new: true },
    function(err, move) {
      if (err) res.send(err);
      res.json(move);
    }
  );
}

function deleteMove(req, res) {
  Move.remove(
    {
      _id: req.params.moveId
    },
    function(err, move) {
      if (err) res.send(err);
      res.json({ message: 'Move successfully deleted' });
    }
  );
}

function getMove(req, res) {
  Move.findById(req.params.moveId, function(err, move) {
    if (err) res.send(err);
    res.json(move);
  });
}
