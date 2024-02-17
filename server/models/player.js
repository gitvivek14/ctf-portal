const mongoose = require('mongoose');

// 3. Define a schema for your player collection
const playerSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true
  },
  teamPoints: {
    type: Number,
    required: true
  }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
