const express = require("express");
const Question = require("../models/question");
const Game = require("../models/game");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const game = require("../models/game");

exports.addQuestion = asyncHandler(async (req, res) => {
  try {
    const { questionNo, level, question, questionPoints, answer } = req.body;
    const newQuestion = await Question.create({
      questionNo: questionNo,
      level: level,
      question: question,
      questionPoints: questionPoints,
      answer: answer,
    });
    res.json({
      message: "Question added successfully",
      success: true,
      newQuestion,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      success: false,
    });
  }
});
exports.getQuestions = asyncHandler(async(req,res)=>{
  try {
    const {level} =req.body;
    const data = await Question.find({
      level:level
    })

    if(!data){
      return res.status(403).json({
        message:"no questions for this level"
      })
    }
    console.log(data);
    return res.status(200).json({
      message:"questions fetched succesfully",
      data
    })
    
  } catch (error) {
    console.log("error in fetching questions ",error);  
  }
})
exports.control = asyncHandler(async (req, res) => {
  try {
    const { questionNo, level, email, answer } = req.body;
    // var question = await Question.findOne({
    //   level: level,
    //   questionNo: questionNo,
    // });
    // var game = await Game.findOne({ email: email });
    // if (game.answered[question.level - 1][question.questionNo - 1] == 1)
    //   if (!questionNo || !level || !teamPoints || !email || !answer) {
    //     return res.status(502).json({
    //       message: "Fields required",
    //     });
    //   }
    const question = await Question.findOne({
      level: level,
      questionNo: questionNo,
    });
    const game = await Game.findOne({ email: email });
    const game1 = game._id;
    const game2 = await Game.findById({
      _id:game1
    });
    console.log("game1",game1);
    // const game1 = await Game.findById({_id:})
    // console.log(game1);
    console.log("game",game);
    const ans = answer.trim();
    console.log(ans);
    if (game2.answered[question.level - 1][question.questionNo - 1] == true) {
      return res.json({
        message: "Question already answered",
        success: false,
      })
    } else if (ans === question.answer && game2.answered[question.level - 1][question.questionNo - 1] == false) {
      game2.teamPoints = game2.teamPoints + question.questionPoints;
      game2.answered[question.level - 1][question.questionNo - 1] = true;
      game2.flag++;
      console.log(game2);
      await game2.save();

      var flag = true;
      for (let i = 0; i < game2.answered[game2.level - 1].length; i++) {
        if (game2.answered[game.level - 1][i] == false) {
          flag = false;
          break;
        }
      }
      if (flag === true) {
        game2.level += 1;
        await game2.save();
      } 
      const updated  = await Game.findByIdAndUpdate({_id:game1},{
        answered:game2.answered
      },{now:true})

      const data = {
        teamPoints : updated.teamPoints,
        questionNo : updated.questionNo,
        level : updated.level,
        flag : updated.flag
      }
      console.log(data);
      
      return res.status(200).json({
        message: "Game Updated",
        status : true,
        data
      });
     
      }
      else {
        res.json({
          message: "WRONG ANSWER",
          success: false,
        });
    }

  } catch (err) {
    console.log(err);
  }
});

