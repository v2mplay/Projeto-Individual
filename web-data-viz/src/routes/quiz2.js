var express = require("express");
var router = express.Router();

var quiz2Controller = require("../controllers/quiz2Controller");

//post = insert e get = select
router.post("/ultimas/inserirquiz2", function (req, res) {
    quiz2Controller.buscarUltimasMedidas(req, res);
});

router.get("/ultimas/puxarquiz2", function (req, res) {
    quiz2Controller.buscarUltimoresultados(req, res);
});
// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;