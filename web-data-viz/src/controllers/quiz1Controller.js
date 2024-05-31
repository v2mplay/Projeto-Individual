var quiz1Model = require("../models/quiz1Model");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    
    var qtd_acertos = req.body.qtd_acertos;
    var qtd_erros = req.body.qtd_erros;
    var idusuario = req.body.idusuario;

    // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    quiz1Model.buscarUltimasMedidas(qtd_acertos, qtd_erros, idusuario).then(function (resultado) {
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

    quiz1Model.buscarUltimoresultados().then(function (resultado) {
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