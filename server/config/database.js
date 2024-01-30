const mongoose = require("mongoose")

require("dotenv").config()


exports.connect = ()=>{
    mongoose.connect(process.env.mongodburl , {
        useNewUrlParser: true,
        useUnifiedTopology :true
    })
    .then(()=>{
        console.log('DB connected') 
    })
    .catch((e)=>{
        console.log("not Connected")
    })
}