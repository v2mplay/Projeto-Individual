var express = require("express");
var router = express.Router();

var quiz1Controller = require("../controllers/quiz1Controller");

//post = insert e get = select
router.post("/ultimas/inserirquiz", function (req, res) {
    quiz1Controller.buscarUltimasMedidas(req, res);
});

router.get("/ultimas/puxarquiz", function (req, res) {
    quiz1Controller.buscarUltimoresultados(req, res);
});
// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;