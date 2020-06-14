const Sequelize = require("sequelize");
const connection = require("./database") //Importando conexão com o BD

//Criando tabela Pergunta com coluna de título e descrição
const Pergunta = connection.define('pergunta',{
    titulo:{
        type: Sequelize.STRING
    },
    descricao:{
        type: Sequelize.TEXT
    }
});

//Sincroniza com banco de dados e não cria se houver uma tabela Pergunta
Pergunta.sync({force: false}).then(() => {
    console.log('Tabela Pergunta criada')
});
/*
Pergunta.create({
    titulo: "1.1",
    descricao: "Utilização dos recursos existentes nos locais abertos"
});

Pergunta.create({
    titulo: "1.2",
    descricao: "Utilização dos recursos existentes nos locais fechados"
});

Pergunta.create({
    titulo: "1.3",
    descricao: "Estado de conservação de instalações e recursos"
});

Pergunta.create({
    titulo: "1.4",
    descricao: "Controle dos problemas de conservação"
});

Pergunta.create({
    titulo: "2.1",
    descricao: "Identificações e Sinalizações"
});

Pergunta.create({
    titulo: "2.2",
    descricao: "Definição e Adequação de locais para a guarda de recursos (não inclui layout)"
});

Pergunta.create({
    titulo: "2.3",
    descricao: "Ordem dos recursos (não inclui layout)"
});

Pergunta.create({
    titulo: "2.4",
    descricao: "Layout"
});

Pergunta.create({
    titulo: "3.1",
    descricao: "Nível de limpeza (sujeira provocada por falha das pessoas)"
});

Pergunta.create({
    titulo: "3.2",
    descricao: "Nível de limpeza (sujeira provocada pelo processo ou por ações da natureza)"
});

Pergunta.create({
    titulo: "3.3",
    descricao: "Sistemática de limpeza"
});

Pergunta.create({
    titulo: "3.4",
    descricao: "Lixeiras, cinzeiros e outros coletores de recursos descartados"
});

Pergunta.create({
    titulo: "4.1",
    descricao: "Padronizações"
});

Pergunta.create({
    titulo: "4.2",
    descricao: "Higiene e Saúde"
});

Pergunta.create({
    titulo: "4.3",
    descricao: "Rotinas e Sistemática para manutenção do 5S"
});

Pergunta.create({
    titulo: "4.4",
    descricao: "Estruturação dos arquivos e correios eletrônicos (quando houver)"
});

Pergunta.create({
    titulo: "5.1",
    descricao: "Autodisciplina na prática do 5S"
});

Pergunta.create({
    titulo: "5.2",
    descricao: "Autodisciplina no cumprimento de normas e procedimentos de trabalho"
});

Pergunta.create({
    titulo: "5.3",
    descricao: "Autodisciplina no cumprimento de Rotinas de 5S e Regras de convivência"
});

Pergunta.create({
    titulo: "5.4",
    descricao: "Autodisciplina na manutenção da estrutura de arquivos e correios eletrônicos"
});
*/
module.exports = Pergunta;
