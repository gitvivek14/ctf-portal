const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionNo:{
    type : Number,
    required : true
  },
  level:{
    type : Number,
    required : true
  },
  question:{
    type : String,
    required : true
  },
  questionPoints : {
    type : Number,
    required : true
  },
  answer:{
    type : String,
    required : true
  }
});

const Question = mongoose.model('question', QuestionSchema);
module.exports = Question;