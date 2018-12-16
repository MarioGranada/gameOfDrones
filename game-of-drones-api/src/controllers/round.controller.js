'use strict';

var mongoose = require('mongoose'),
  Round = mongoose.model('Round');

module.exports = {
  createRound: createRound,
  saveRound: saveRound,
  deleteRound: deleteRound,
  getRound: getRound
};

function createRound(req, res) {
  var newRound = new Round(req.body);
  newRound.save(function(err, round) {
    if (err) res.send(err);
    res.json(round);
  });
}

function saveRound(req, res) {
  Round.findOneAndUpdate(
    { _id: req.params.roundId },
    req.body,
    { new: true },
    function(err, round) {
      if (err) res.send(err);
      res.json(round);
    }
  );
}

function deleteRound(req, res) {
  Round.remove(
    {
      _id: req.params.roundId
    },
    function(err, round) {
      if (err) res.send(err);
      res.json({ message: 'Round successfully deleted' });
    }
  );
}

function getRound(req, res) {
  Round.findById(req.params.roundId, function(err, round) {
    if (err) res.send(err);
    res.json(round);
  });
}
