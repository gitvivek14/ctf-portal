const express = require('express')
const cors = require('cors')
const app = express();

// fetching port from env file | if not present default - 4000
const port = process.env.port||4000;

app.use(express.json())
require("dotenv").config()
require("./config/database").connect()
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"YOUR SERVER IS ACTIVATED"
    })
  })

app.listen(port, () => {
    console.log(`Hello app listening on port ${port}`);
  })