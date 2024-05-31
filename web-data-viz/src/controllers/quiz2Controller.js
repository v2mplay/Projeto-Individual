var quiz2Model = require("../models/quiz2Model");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    
    
    var gostaram = req.body.gostaram;
    var recomendaria = req.body.recomendaria;
    var naogostou = req.body.nao_gostou;
    var naorecomendaria = req.body.nao_recomendaria;
    var idusuario = req.body.idusuario;

    // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    quiz2Model.buscarUltimasMedidas(gostaram, recomendaria, naogostou, naorecomendaria, idusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarUltimoresultados(req, res) {

    

    // console.log(`Recuperando medidas em tempo real`);

    quiz2Model.buscarUltimoresultados().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimoresultados

}