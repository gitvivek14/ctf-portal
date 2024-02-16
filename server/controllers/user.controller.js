const User = require("../models/user")
const asyncHandler = require('express-async-handler');

exports.getalldetails = async(req,res)=>{
    try {
        const {email} = req.body;
        const user = await User.findOne({email:email}).populate("game").exec();
        if(!user){
            return res.status(400).json({
                message:"User not Registerd"
            })
        }
        return res.status(200).json({
            message:"USER DATA FETCHED DETAILS SUCCESSFULLY",
            success:true,
            user,  
        })
    } catch (error) {
        console.log('error in getting users details', error)
        return res.status(500).json({message:'INTERNAL SERVER ERROR'}) 
    }
}