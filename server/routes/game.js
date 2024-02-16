const express = require ('express');
const router = express.Router();
const app = express();

var bodyParser=require('body-parser');
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded and - multipart/form-data
app.use(bodyParser.urlencoded({ extended: true }));


//Game API : /game/control
const game = require('../controllers/game.controller');
router.post("/control",game.control);
router.post("/addQuestion", game.addQuestion);
router.post("/getquestions",game.getQuestions)

module.exports = router;