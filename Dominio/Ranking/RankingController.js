const express = require("express");
const app = express();
const router = express.Router();
const connection = require("../../database/database");
const bodyParser = require("body-parser");
//const Ranking = require("./CriaRanking");
const Avaliacao = require("../Avaliacao/Avaliacao")


//Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.post("/ranking",(req, res) => {
    (async () => {
            var x = req.body.x;
            var Answer_average_x = 'Answer_average_' + x;
            var Cost_center_Avg_x = "Cost_center_Avg_" + x;
            await Avaliacao.findAll({
            attributes: ['Cost_center_id', [Avaliacao.sequelize.fn('AVG', 
            Avaliacao.sequelize.col(Answer_average_x)), Cost_center_Avg_x]],
            group: ['Cost_center_id'],
            order: [[Avaliacao.sequelize.fn('AVG', Avaliacao.sequelize.col(Answer_average_x)), 'DESC']]
            }).then(ranking => {
                res.json({             
                    ranking: ranking
                    });
                });     
    })();
});

module.exports = router;