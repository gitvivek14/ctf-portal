const express = require ('express');
const router = express.Router();
const app = express();

var bodyParser=require('body-parser');
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded and - multipart/form-data
app.use(bodyParser.urlencoded({ extended: true }));

const user = require('../controllers/auth.controller');
router.post("/login",user.login_post);

module.exports = router;