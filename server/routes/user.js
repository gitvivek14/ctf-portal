const express = require("express")
const {getalldetails} = require("../controllers/user.controller");
const { use } = require("./game");

const router = express.Router();

router.post("/user",getalldetails)


module.exports = router