const express = require('express');
const Question = require('../models/question');
const game = require('../models/game');
const router = express.Router();
const asyncHandler = require('express-async-handler')

exports.control = asyncHandler(async (req,res) => {
    try{
        const {questionNo, level, teamPoints, email1, ans} = req.body;
        let question = await Question.findOne({level:level, questionNo: questionNo});
        let game = await Game.findOne({email1 : email1});
        ans = ans.trim();
        if(ans == question.answer)
        {
            game.teamPoints = teamPoints + question.questionPoints;
            question.answered[question.questionNo - 1] = true;
        }
        else{
            res.json({
               message:"WRONG ANSWER",
               success:false
            });
        }
        game.save();
        let flag = true;
        for(let i = 0; i < question.answered.length(); i++)
        {
            if(question.answered[i] === false)
            flag = false;
        }

        if(flag === true)
        {
            question.level += 1;
        }
         
    } catch (error) {
        return res.status(400).json({
            message:error,
            success:false,
         })       
    }
});
