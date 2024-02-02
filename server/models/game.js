const mongoose = require('mongoose');
const { Schema } = mongoose;

const GameSchema = new Schema({
  questionNo:{
    type : String,
    required : true
  },
  level:{
    type : String,
    required : true
  },
  email1: {
    type: String,
    required : true,
    unique : true
  },
  teamPoints:{
    type : String,
    required : true
  },
  user : {
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  powerups: {
    type : Array,
    default : [0, 0, 0, 0]   
},
});
module.exports = mongoose.model('Game', GameSchema);