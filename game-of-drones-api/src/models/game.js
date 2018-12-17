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
      type: Object
    }
  ],
  winner: {
    type: String
  },
  isOver: {
    type: Boolean
  },
  players: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model('Game', Game);
