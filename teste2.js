const { create, all } = require('mathjs')
const config = { }
const math = create(all, config)

function nois () {
    var x = "salve";
    return console.log(x)
}

nois()

var jsonAvaliacao = {
    
}

jsonAvaliacao.Form_id = "joao";
jsonAvaliacao.Cost_center_id = 42;
jsonAvaliacao.Question_id_answer_u = [4,4,4,4]


//var x = jsonAvaliacao.avaliacao[2]
console.log("média= " + math.mean(jsonAvaliacao.Question_id_answer_)u)
//console.log(x)
console.log(jsonAvaliacao)