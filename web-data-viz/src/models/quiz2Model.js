var database = require("../database/config");

function buscarUltimasMedidas(gostaram, recomendaria, naogostou, naorecomendaria, idusuario) {

    var instrucaoSql = `Insert into quiz2 (gostaram, recomendaria, naogostou, naorecomendaria, dtQuiz, fkUsuario) values
    (${gostaram}, ${recomendaria}, ${naogostou}, ${naorecomendaria}, default, ${idusuario});
    
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimoresultados() {

    var instrucaoSql = `SELECT idquiz1, gostaram, recomendaria, naogostou, naorecomendaria from quiz2`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimoresultados
}