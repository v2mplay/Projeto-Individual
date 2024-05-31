var database = require("../database/config");

function buscarUltimasMedidas(qtd_acertos, qtd_erros, idusuario) {

    var instrucaoSql = `Insert into quiz1 (totalacertos, totalerros, dtQuiz, fkUsuario) values
    (${qtd_acertos}, ${qtd_erros}, default, ${idusuario});
    
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimoresultados() {

    var instrucaoSql = `SELECT idquiz1, totalacertos, totalerros from quiz1 order by 1 desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimoresultados
}