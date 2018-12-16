'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Game = new Schema({
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  rounds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Round'
    }
  ],
  winner: {
    type: Schema.Types.ObjectId,
    ref: 'Player'
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Player'
    }
  ]
});

module.exports = mongoose.model('Game', Game);
