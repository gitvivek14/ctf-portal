const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  questionNo:{
    type : String,
    required : true
  },
  level:{
    type : String,
    required : true
  },
  question:{
    type : String,
    required : true
  },
  questionPoints : {
    type : String,
    required : true
  },
  answer:{
    type : String,
    required : true
  },
  answered : {
    type : Array,
    default : [false, false, false, false],
  }
});

const Question = mongoose.model('question', QuestionSchema);
module.exports = Question;