const express = require('express')
const cors = require('cors');
const connectToMongo = require('./config/database');
const socketIo = require('socket.io');
const http = require('http');
const app = express();
const socket = require("socket.io")
const userroutes = require("./routes/user")
// const {Server} = socket
// const server = require("http").createServer(app)
// fetching port from env file | if not present default - 4000
const port = process.env.port||4000;
// const io = new Server(server,{
//   cors:{
//     origin:"*",
//     credentials:true,
//     methods:["GET","POST"]
//   }
// })
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

const server = http.createServer(app);
const io = socketIo(server);
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

//socket connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Example: Emit a welcome message to the client upon connection
  socket.emit('message', 'Welcome to the server!');

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

//Routes
const auth = require('./routes/auth');
app.use('/auth', auth);
const game = require('./routes/game');
app.use('/game',game)
app.use("/userd",userroutes)

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })