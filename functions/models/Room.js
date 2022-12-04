const { Schema, model } = require('mongoose')

const room_schema = new Schema({
  createdBy: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  player1: String,
  player2: String,
  A: String,
  B: String,
  C: String,
  D: String,
  E: String,
  F: String,
  G: String,
  H: String,
  I: String,
})

const Room = model('Room', room_schema);
module.exports = Room