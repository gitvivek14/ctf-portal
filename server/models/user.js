const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  teamName:{
    type : String,
    required : true
  },
  email1: {
    type: String,
    required : true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
  game:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'game'
  }
});

// const User = mongoose.model('user', UserSchema);
// module.exports = User;

module.exports= mongoose.model("User",UserSchema);