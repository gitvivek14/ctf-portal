const express = require('express')
const cors = require('cors');
const connectToMongo = require('./config/database');
const app = express();

// fetching port from env file | if not present default - 4000
const port = process.env.port||4000;

app.use(express.json());
require("dotenv").config();
require("./config/database");

connectToMongo();
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"YOUR SERVER IS ACTIVATED"
    })
  })

app.use((_req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
  next();
})
app.use(cors({
  origin:"*",
  credentials:true
}))

//Routes
const auth = require('./routes/auth');
app.use('/auth', auth);
const game = require('./routes/game');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })