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

router.post("/leaderboard", (req, res) => {
   
    const io = req.body.io;
    game.leaderboard(io)
        .then(() => {
            res.status(200).json({ success: true, message: 'Leaderboard updated successfully' });
        })
        .catch((error) => {
            console.error('Error updating leaderboard:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        });
});

module.exports = router;