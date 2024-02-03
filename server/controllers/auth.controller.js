const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")
require("dotenv").config()


exports.login_post = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email:email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        // create token
        const payload = {
            email:email,
            id:user._id,
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"1d"
        })
        user.token = token;
        const options = {
            expires: new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true
        }
        res.cookie("token",token,options).status(200).json({
            success:true,
            message:"LOGGED IN SUCCESFULLY",
                user,
                payload
        })
        // passeord ?null

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

exports.signup = async (req,res)=>{
    try {
        const {teamname,email,password,confirmpwd} = req.body;
        if(!email|| !password){
            return res.status(403).json({
                success:false,
                message:"Fill all the details"
            })
        }
        if(password!=confirmpwd){
            return res.status(403).json({
                success: false,
                message: "PASSWORD DOESN'T MATCH!"
            })
        }
        const existinguser = await User.findOne({email:email});
        if(existinguser){
            return res.status(403).json({
                success: false,
                message: "USER ALREADY REGISTERED"
            })
        }
        const user  = await User.create({
            teamname:teamname,
            email:email,
            password:password,
            image:`https://api.dicebear.com/6.x/initials/svg?seed=${teamname}`
        })

        return res.status(200).json({
            success:true,
            message:"Sign up done",
            user
        })
        
    } catch (error) {
        console.log("internal .........")
        console.log(error)
        return res.status(500).json({error:'Internal Server Error'})
        
    }
}