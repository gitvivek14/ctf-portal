const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
  questionNo:{
    type : Number,
    required : true
  },
  level:{
    type : Number,
    required : true
  },
  email: {
    type: String,
    required : true
  },
  teamPoints:{
    type : Number,
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
  answered : {
   type : Array,
   default : [[false,false,false,false],[false,false,false],[false,false],[false],[false]]
  },
  flag : {
    type : Number,
    default : 0
  }
});
module.exports = mongoose.model('Game', GameSchema);