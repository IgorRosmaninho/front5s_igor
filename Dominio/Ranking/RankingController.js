const express = require("express");
const app = express();
const router = express.Router();
const connection = require("../../database/database");
const bodyParser = require("body-parser");
const Ranking = require("./CriaRanking");


//Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.post("/ranking",(req, res) => {

});



module.exports = router;