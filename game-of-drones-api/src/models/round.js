'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Round = new Schema({
  number: {
    type: Number,
    required: 'Round number is required'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Player'
    }
  ],
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game'
  },
  winner: { type: Schema.Types.ObjectId, ref: 'Player' }
});

module.exports = mongoose.model('Round', Round);
