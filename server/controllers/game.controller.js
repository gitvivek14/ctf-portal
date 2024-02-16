const express = require('express');
const Question = require('../models/question');
const Game = require('../models/game');
const router = express.Router();
const asyncHandler = require('express-async-handler')

exports.control = asyncHandler(async (req,res) => {
    try{
        const {questionNo, level, teamPoints, email, ans} = req.body;
        if(!questionNo || !level || !teamPoints || !email || !ans){
            return res.status(502).json(
                {
                    message:"Fields required",
                }
            )
        }
        let question = await Question.findOne({level:level, questionNo: questionNo});
        let game = await Game.findOne({email : email});
        ans = ans.trim().toLowercase();
        console.log(ans);
        if(ans == question.answer)
        {
            game.teamPoints = teamPoints + question.questionPoints;
            game.answered[question.level - 1][question.questionNo - 1] = 1;
        }
        else{
            res.json({
               message:"WRONG ANSWER",
               success:false
            });
        }
        game.save();
        let flag = false;
        for(let i = 0; i < game[game.level - 1].answered.length(); i++)
        {
            if(game.answered[game.level-1][i] === 0)
            flag = false;
        }

        if(flag === true)
        {
            game.level += 1;
        }
        return res.status(200).json({
            message:"Game Updated",
            game
        })
         
    } catch (error) {
        return res.status(400).json({
            message:"error ",
            success:false,
         })       
    }
});
