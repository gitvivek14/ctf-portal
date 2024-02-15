const express = require('express');
const Question = require('../models/question');
const Game = require('../models/game');
const router = express.Router();
const asyncHandler = require('express-async-handler')

exports.addQuestion = asyncHandler(async (req,res) => {
    try{
        const {questionNo, level, question, questionPoints, answer} = req.body;
        const newQuestion = await Question.create({
            questionNo: questionNo,
            level: level,
            question: question,
            questionPoints: questionPoints,
            answer: answer
        });
        res.json({
            message:"Question added successfully",
            success:true,
            newQuestion
        });
    }
    catch(error){
        return res.status(400).json({
            message:error,
            success:false,
         })
    }
})

exports.control = asyncHandler(async (req,res) => {
    {
        const {questionNo, level, email, answer} = req.body;
        var question = await Question.findOne({level:level, questionNo: questionNo});
        var game = await Game.findOne({email : email});
        if(answer === question.answer)
        {
            game.teamPoints = game.teamPoints + question.questionPoints;
            game.answered[question.level - 1][question.questionNo - 1] = 1;
            console.log(game.answered[question.level - 1][question.questionNo - 1]);
            await game.save();
            console.log(game);
            res.json({
                message : "Correct Answer",
                success : true
            })
        }
        else{
            res.json({
               message:"WRONG ANSWER",
               success:false
            });
        }
        var flag = true;
        for(let i = 0; i < game.answered[game.level - 1].length; i++)
        {
            if(game.answered[game.level-1][i] == 0)
            flag = false;
        }

        if(flag === true)
        {
            game.level += 1;
        }
         
    // } catch(error){
    //     console.error();
    //     return res.status(400).json({
    //         message : error,
    //         success:false
    //      })       
    }
});
