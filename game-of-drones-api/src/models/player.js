'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Player = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the Player'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Game'
    }
  ]
});

module.exports = mongoose.model('Player', Player);
