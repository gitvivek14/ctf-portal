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

exports.control = asyncHandler(async (req, res) => {
  try {
    const { questionNo, level, email, answer } = req.body;
    var question = await Question.findOne({
      level: level,
      questionNo: questionNo,
    });
    var game = await Game.findOne({ email: email });
    if (game.answered[question.level - 1][question.questionNo - 1] == 1)
      if (!questionNo || !level || !teamPoints || !email || !answer) {
        return res.status(502).json({
          message: "Fields required",
        });
      }
    let question = await Question.findOne({
      level: level,
      questionNo: questionNo,
    });
    let game = await Game.findOne({ email: email });
    ans = answer.trim().toLowercase();
    console.log(ans);
    if (ans == question.answer) {
      return res.json({
        message: "Question already answered",
        success: false,
      });
    } else if (answer === question.answer) {
      game.teamPoints = game.teamPoints + question.questionPoints;
      game.answered[question.level - 1][question.questionNo - 1] = 1;
      console.log(game);
      await game.save();

      var flag = true;
      for (let i = 0; i < game.answered[game.level - 1].length; i++) {
        if (game.answered[game.level - 1][i] == 0) {
          flag = false;
          break;
        }
      }
      if (flag === true) {
        game.level += 1;
        await game.save();
      } else {
        res.json({
          message: "WRONG ANSWER",
          success: false,
        });
      }
      return res.status(200).json({
        message: "Game Updated",
        game,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

exports.leaderboard = asyncHandler(async (io) => {
  try {
    const teams = await game.find({}).sort({ teamPoints: 1 }).exec();
    io.emit("leader", { success: true, leaderboard: teams });
  } catch (error) {
    console.error("Error fetching data:", error);
    io.emit("leader", { success: false, message: "Internal Server Error" });
  }
});
