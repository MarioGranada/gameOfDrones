'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Move = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the Move'
  },
  beats: {
    type: String,
    required: 'Kindly enter the move this one beats'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Move', Move);
