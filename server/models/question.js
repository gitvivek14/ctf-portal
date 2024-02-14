const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new mongoose.Schema({
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
    type : Array
  }
});

const Question = mongoose.model('question', QuestionSchema);
module.exports = Question;