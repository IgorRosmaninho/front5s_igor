const Sequelize = require("sequelize");
const connection = require("./database");

/*Criação da Tabela Descricao, com Descricao_id(text), Descricao(array)*/
const Descricoes = connection.define('descricoe',{
    Descricao:{
        "Seiri": [
            {
                "Tipo": "4.1. Padronizações",
                "1": "A grande maioria das identificações ou sinalizações não obedece aos padrões da empresa ou não estão uniformes, ou não foram consensados padrões dos 3 primeiros \"S\"",
                "2": "Algumas identificações ou sinalizações não obedecem aos padrões da empresa ou não estão uniformes, ou não foram consensados padrões dos 3 primeiros \"S\"",
                "3": "Uma ou outra identificação ou sinalização não obedece aos padrões da empresa ou não está uniforme, ou não foram consensados alguns padrões dos 3 primeiros \"S\"",
                "4": "Uma ou outra identificação ou sinalização não obedece aos padrões da empresa ou não está uniforme. Um ou outro padrão dos 3 primeiros \"S\" ainda não foi consensado ",
                "5": "Todas as identificações e sinalizações obedecem aos padrões da empresa ou estão uniformes. Foram consensados todos os padrões dos 3 primeiros \"S\". Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              },
              {
                "Tipo": "4.2. Higiene e Saúde",
                "1": "Não foi feito nenhum estudo sobre problemas que afetam a saúde no ambiente de trabalho e/ou são encontrados alguns problemas de higiene no local de trabalho.",
                "2": "Há um ou outro problema que afeta a saúde no ambiente de trabalho, mas não há nenhum estudo para solucioná-lo e/ou há um ou outro problema de higiene no local de trabalho.",
                "3": "Há um ou outro problema que afeta a saúde no ambiente de trabalho e há estudo para solucioná-lo e/ou há um ou outro problema de higiene no local de trabalho.",
                "4": "Há um ou outro problema que afeta a saúde no ambiente de trabalho e há ações concretas para solucioná-lo e/ou há um ou outro problema de higiene no local de trabalho.",
                "5": "Não há nenhum problema que afeta a saúde ou de higiene no local de trabalho. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              },
              {
                "Tipo": "4.3. Rotinas e Sistemática para manutenção do 5S",
                "1": "Não há sistemática para a manutenção do 5S. A prática é aleatória.",
                "2": "Há uma ou outra sistemática para a manutenção do 5S, mas não garante a melhoria contínua (faltam avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.)",
                "3": "Há uma sistemática para a melhoria contínua do 5S, mas há deficiência em alguns aspectos (faltam avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.)",
                "4": "Há uma sistemática para a melhoria contínua do 5S, mas há deficiência em um ou outro aspecto (faltam avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.)",
                "5": "Há uma sistemática eficiente para a melhoria contínua do 5S (avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.). Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              },
              {
                "Tipo": "4.4. Estruturação dos arquivos e correios eletrônicos (quando houver)",
                "1": "Não há uma estruturação definida para a utilização e guarda da maioria dos documentos e e-mails eletrônicos e não há uma freqüência definida e adequada para a limpeza de arquivos obsoletos.",
                "2": "Não há uma estruturação definida para a utilização e guarda da maioria dos documentos e e-mails eletrônicos ou não há uma freqüência definida e adequada para a limpeza de arquivos obsoletos.",
                "3": "Não há uma estruturação definida para a utilização e guarda de um ou outro documento ou e-mails eletrônicos. Não há uma freqüência definida e adequada para a limpeza de todos os tipos de arquivos obsoletos.",
                "4": "Não há uma estruturação definida para a utilização e guarda de um ou outro documento ou e-mails eletrônicos. Há uma freqüência definida e adequada para a limpeza de todos os tipos de arquivos obsoletos.",
                "5": "Há uma estruturação definida para a utilização e guarda de todos os documentos eletrônicos e e-mails. Há uma freqüência definida e adequada para a limpeza de todos os arquivos obsoletos. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              }
        ],
        "Seiton": [
            {
                "Tipo": "2.1. Identificações e Sinalizações",
                "1": "Em vários locais há deficiências de identificação e sinalização. Não há providências concretas para a correção da maioria.",
                "2": "Em vários locais há deficiências de identificação e sinalização. Não há providências concretas para a correção de algumas.",
                "3": "Em um ou outro local há deficiências de identificação e/ou sinalização. Não há providências concretas para a correção de algumas.",
                "4": "Em um ou outro local há deficiências de identificação e/ou sinalização. Há providências concretas para a correção de todas.",
                "5": "Em todos os locais há identificações e sinalizações que facilitam a localização e evitam perda de tempo e riscos. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              },
              {
                "Tipo": "2.2. Definição e Adequação de locais para a guarda de recursos (não inclui layout)",
                "1": "Em vários ambientes há diversos recursos sem locais de guarda definidos e adequados (formato, dimensões, tipo de material, etc.).",
                "2": "Em vários ambientes há um ou outro recurso sem local de guarda definido e adequado (formato, dimensões, tipo de material, etc.).",
                "3": "Em um ou outro ambiente há vários recursos sem locais de guarda definidos e adequados (formato, dimensões, tipo de material, etc.).",
                "4": "Em um ou outro ambiente há um ou outro recurso sem local de guarda definido e adequado (formato, dimensões, tipo de material, etc.).",
                "5": "Há locais definidos e adequados para todos os recursos utilizados (formato, dimensões, tipo de material, etc.). Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              },
              {
                "Tipo": "2.3. Ordem dos recursos (não inclui layout)",
                "1": "Em vários locais foram encontrados diversos recursos desordenados, dificultando o acesso (há recursos úteis fora dos locais de guarda, mistura, dificuldade de localização visual ou física ou risco).",
                "2": "Em vários locais foi encontrado um ou outro recurso desordenado dificultando o acesso (há recursos úteis fora dos locais de guarda, mistura, dificuldade de localização visual ou física ou risco).",
                "3": "Em um ou outro local foram encontrados diversos recursos desordenados, dificultando o acesso (há recursos úteis fora dos locais de guarda, mistura, dificuldade de localização visual ou física ou risco).",
                "4": "Em um ou outro local foi encontrado um ou outro recurso desordenado, dificultando o acesso (há recursos úteis fora dos locais de guarda, mistura, dificuldade de localização visual ou física ou risco).",
                "5": "Todos os recursos estão classificados e organizados (não há recursos úteis fora dos locais de guarda, mistura, dificuldade de localização visual e física ou risco). Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              },
              {
                "Tipo": "2.4. Layout ",
                "1": "Em vários ambientes há deficiências de Layout promovendo desgastes, riscos e desperdício de tempo (distribuição planejada dos recursos produtivos e/ou de apoio dificultando a circulação e o acesso; espaço incompatível com o volume, etc.). Não há providências concretas para a correção da maioria. ",
                "2": "Em vários ambientes há deficiências de Layout promovendo desgastes, riscos e desperdício de tempo (distribuição planejada dos recursos produtivos e/ou de apoio dificultando a circulação e o acesso; espaço incompatível com o volume, etc.). Não há providências concretas para a correção de algumas. ",
                "3": "Em um ou outro ambiente há deficiências de Layout promovendo desgastes, riscos e desperdício de tempo (distribuição planejada dos recursos produtivos e/ou de apoio dificultando a circulação e o acesso; espaço incompatível com o volume, etc.). Não há providências concretas para a correção de algumas.",
                "4": "Em um ou outro ambiente há deficiências de Layout promovendo desgastes, riscos e desperdício de tempo (distribuição planejada dos recursos produtivos e/ou de apoio dificultando a circulação e o acesso; espaço incompatível com o volume, etc.). Há providências concretas para a correção de todas.",
                "5": "A disposição de todos os recursos produtivos e de apoio está adequada, facilita a circulação e o acesso, evitando riscos, desgaste e desperdício de tempo. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              }

        ],
        "Seiso": [
            {
                "Tipo": "3.1. Nível de limpeza (sujeira provocada por falha das pessoas)",
                "1": "Em vários locais há sujeira, inclusive provocadas pelas pessoas do próprio ambiente.",
                "2": "Em vários locais há sujeira, uma ou outra provocada pelas pessoas do próprio ambiente ou por não cumprimento da sistemática de limpeza.",
                "3": "Em um ou outro local há sujeira, uma ou outra provocada pelas pessoas do próprio ambiente ou por não cumprimento da sistemática de limpeza.",
                "4": "Em um ou outro local há sujeira provocada apenas, e claramente, por pessoas de outros ambientes ou apenas por não cumprimento da sistemática de limpeza.",
                "5": "Não há sujeira provocada pelas pessoas nem por falta de cumprimento da sistemática de limpeza. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              },
              {
                "Tipo": "3.2. Nível de limpeza (sujeira provocada pelo processo ou por ações da natureza)",
                "1": "Em vários locais há fonte de sujeira ou há sujeira acumulada ao longo do tempo, gerando riscos de acidentes (não por problemas de conservação) e que não está sendo contida. ",
                "2": "Em um ou outro local há fonte de sujeira ou sujeira acumulada ao longo do tempo, gerando riscos de acidentes (não por problemas de conservação) e que não está sendo contida e/ou sinalizada. ",
                "3": "A fonte de sujeira ou sujeira acumulada ao longo do tempo não gera riscos de acidentes. Não há um prazo definido para a eliminação da fonte.",
                "4": "A fonte de sujeira ou sujeira acumulada ao longo do tempo não gera riscos de acidentes. Há um prazo definido para a eliminação da fonte.",
                "5": "A fonte de sujeira (máquinas, equipamentos, manuseio de produtos) ou sujeira acumulada ao longo do tempo não gera riscos de acidentes e a extinção de sua(s) fonte(s) foi considerada inviável técnica e financeiramente pelos órgãos competentes da empresa. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              },
              {
                "Tipo": "3.3. Sistemática de limpeza",
                "1": "Não há uma freqüência definida e/ou adequada para a limpeza de nenhum tipo de sujeira (gerada por processos, manuseio de produtos, ações da natureza, animais, árvores, transportes, etc.).",
                "2": "Não há uma freqüência definida e/ou adequada de limpeza para vários tipos de sujeira (gerada por processos, manuseio de produtos, ações da natureza, animais, árvores, transportes, etc.).",
                "3": "Não há uma freqüência definida e/ou adequada de limpeza apenas para um ou outro tipo de sujeira ou local de difícil acesso (gerada por processos, manuseio de produtos, ações da natureza, animais, árvores, transportes, etc.).",
                "4": "Há uma freqüência definida e adequada para a limpeza de todo o tipo de sujeira (gerada por processos, manuseio de produtos, ações da natureza, animais, árvores, transportes, etc.). A sistemática não inclui, por escrito, todos os locais de difícil acesso.",
                "5": "Há uma freqüência definida e adequada para a limpeza de todo o tipo de sujeira (gerada por processos, manuseio de produtos, intempéries, animais, árvores, transportes, etc.). A sistemática inclui, por escrito, todos os locais de difícil acesso.",
              },
              {
                "Tipo": "3.4. Lixeiras, cinzeiros e outros coletores de recursos descartados",
                "1": "Em vários locais há algumas deficiências nas lixeiras, cinzeiros e outros coletores de recursos descartados (quantidade, localização, conservação, higiene, tipo e tamanho, freqüência de retirada, identificação, sinalização, prática da coleta seletiva, etc.).",
                "2": "Em vários locais há uma ou outra deficiência nas lixeiras, cinzeiros ou outros coletores de recursos descartados (quantidade, localização, conservação, higiene, tipo e tamanho, freqüência de retirada, identificação, sinalização, prática da coleta seletiva, etc.).",
                "3": "Em um ou outro local há algumas deficiências nas lixeiras, cinzeiros e outros coletores de recursos descartados (quantidade, localização, conservação, higiene, tipo e tamanho, freqüência de retirada, identificação, sinalização, prática da coleta seletiva, etc.).",
                "4": "Em um ou outro local há uma ou outra deficiência nas lixeiras, cinzeiros ou outros coletores de recursos descartados (quantidade, localização, conservação, higiene, tipo e tamanho, freqüência de retirada, identificação, sinalização, prática da coleta seletiva, etc.).",
                "5": "Todas as lixeiras, cinzeiros e outros coletores de recursos descartados são adequados (quantidade, localização, conservação, higiene, tipo e tamanho, freqüência de retirada, identificação, sinalização, prática da coleta seletiva, etc.). Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              } 
        ],
        "Seiketsu": [
            {
                "Tipo": "4.1. Padronizações",
                "1": "A grande maioria das identificações ou sinalizações não obedece aos padrões da empresa ou não estão uniformes, ou não foram consensados padrões dos 3 primeiros \"S\"",
                "2": "Algumas identificações ou sinalizações não obedecem aos padrões da empresa ou não estão uniformes, ou não foram consensados padrões dos 3 primeiros \"S\"",
                "3": "Uma ou outra identificação ou sinalização não obedece aos padrões da empresa ou não está uniforme, ou não foram consensados alguns padrões dos 3 primeiros \"S\"",
                "4": "Uma ou outra identificação ou sinalização não obedece aos padrões da empresa ou não está uniforme. Um ou outro padrão dos 3 primeiros \"S\" ainda não foi consensado ",
                "5": "Todas as identificações e sinalizações obedecem aos padrões da empresa ou estão uniformes. Foram consensados todos os padrões dos 3 primeiros \"S\". Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              },
              {
                "Tipo": "4.2. Higiene e Saúde",
                "1": "Não foi feito nenhum estudo sobre problemas que afetam a saúde no ambiente de trabalho e/ou são encontrados alguns problemas de higiene no local de trabalho.",
                "2": "Há um ou outro problema que afeta a saúde no ambiente de trabalho, mas não há nenhum estudo para solucioná-lo e/ou há um ou outro problema de higiene no local de trabalho.",
                "3": "Há um ou outro problema que afeta a saúde no ambiente de trabalho e há estudo para solucioná-lo e/ou há um ou outro problema de higiene no local de trabalho.",
                "4": "Há um ou outro problema que afeta a saúde no ambiente de trabalho e há ações concretas para solucioná-lo e/ou há um ou outro problema de higiene no local de trabalho.",
                "5": "Não há nenhum problema que afeta a saúde ou de higiene no local de trabalho. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              },
              {
                "Tipo": "4.3. Rotinas e Sistemática para manutenção do 5S",
                "1": "Não há sistemática para a manutenção do 5S. A prática é aleatória.",
                "2": "Há uma ou outra sistemática para a manutenção do 5S, mas não garante a melhoria contínua (faltam avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.)",
                "3": "Há uma sistemática para a melhoria contínua do 5S, mas há deficiência em alguns aspectos (faltam avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.)",
                "4": "Há uma sistemática para a melhoria contínua do 5S, mas há deficiência em um ou outro aspecto (faltam avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.)",
                "5": "Há uma sistemática eficiente para a melhoria contínua do 5S (avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.). Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              },
              {
                "Tipo": "4.4. Estruturação dos arquivos e correios eletrônicos (quando houver)",
                "1": "Não há uma estruturação definida para a utilização e guarda da maioria dos documentos e e-mails eletrônicos e não há uma freqüência definida e adequada para a limpeza de arquivos obsoletos.",
                "2": "Não há uma estruturação definida para a utilização e guarda da maioria dos documentos e e-mails eletrônicos ou não há uma freqüência definida e adequada para a limpeza de arquivos obsoletos.",
                "3": "Não há uma estruturação definida para a utilização e guarda de um ou outro documento ou e-mails eletrônicos. Não há uma freqüência definida e adequada para a limpeza de todos os tipos de arquivos obsoletos.",
                "4": "Não há uma estruturação definida para a utilização e guarda de um ou outro documento ou e-mails eletrônicos. Há uma freqüência definida e adequada para a limpeza de todos os tipos de arquivos obsoletos.",
                "5": "Há uma estruturação definida para a utilização e guarda de todos os documentos eletrônicos e e-mails. Há uma freqüência definida e adequada para a limpeza de todos os arquivos obsoletos. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
              }
        ],
        "Shitsuke":[
            {
                "Tipo": "5.1. Autodisciplina na prática do 5S",
                "1": "Menos da metade das pessoas praticam os 3S no dia-a-dia sem necessidade de monitoramento ou cobrança ou o 5S de algumas outras áreas é prejudicado com freqüência.",
                "2": "Entre 50% e 70% das pessoas praticam os 3S no dia-a-dia, independente de monitoramento e cobrança ou o 5S de algumas outras áreas é prejudicado eventualmente",
                "3": "Entre 71% e 80% das pessoas praticam os 3S no dia-a-dia, independente de monitoramento e cobrança ou o 5S de uma ou outra área é prejudicado com freqüência.",
                "4": "Entre 81% e 90% das pessoas praticam os 3S no dia-a-dia, independente de monitoramento e cobrança ou o 5S de uma ou outra área é prejudicado eventualmente",
                "5": "Mais de 90% das pessoas praticam os 3S no dia-a-dia, independente de monitoramento e cobrança e o 5S de nenhuma outra área é prejudicada pelo comportamento das pessoas auditadas",
              },
              {
                "Tipo": "5.2. Autodisciplina no cumprimento de normas e procedimentos de trabalho",
                "1": "Menos da metade das pessoas cumprem normas e procedimentos de trabalho, sem necessidade de monitoramento ou cobrança. Algumas outras áreas são prejudicadas com freqüência.",
                "2": "Entre 50 e 70% das pessoas cumprem normas e procedimentos de trabalho, sem necessidade de monitoramento ou cobrança. Algumas outras áreas são prejudicadas com eventualmente",
                "3": "Entre 71 e 90% das pessoas cumprem normas e procedimentos de trabalho, sem necessidade de monitoramento ou cobrança. Uma ou outra área é prejudicada com freqüência.",
                "4": "Entre 91 e 95% das pessoas cumprem normas e procedimentos de trabalho, sem necessidade de monitoramento ou cobrança. Uma ou outra área é prejudicada eventualmente.",
                "5": "Acima de  95% das pessoas cumprem normas e procedimentos de trabalho, sem necessidade de monitoramento ou cobrança. Nenhuma área é prejudicada pelo comportamento das pessoas auditadas",
              },
              {
                "Tipo": "5.3. Autodisciplina no cumprimento de Rotinas de 5S e Regras de convivência",
                "1": "Menos da metade das pessoas cumprem as regras de convivência, sem necessidade de monitoramento ou cobrança ou a área não cumpre com rigor algumas Sistemáticas e Rotinas do 5S",
                "2": "Entre 50 e 70% das pessoas cumprem as regras de convivência, sem necessidade de monitoramento ou cobrança e a área não cumpre com rigor algumas Sistemáticas e Rotinas do 5S.",
                "3": "Entre 71 e 90% das pessoas cumprem regras de convivência, sem necessidade de monitoramento ou cobrança ou a área não cumpre com rigor uma ou outra Sistemática e Rotinas do 5S",
                "4": "Entre 91 e 95% das pessoas cumprem as regras de convivência, sem necessidade de monitoramento ou cobrança e a área não cumpre com rigor todas as Sistemáticas e Rotinas do 5S",
                "5": "Acima de  95% das pessoas cumprem as regras de convivência, sem necessidade de monitoramento ou cobrança e a área cumpre com rigor todas as  Sistemáticas e Rotinas do 5S",
              },
              {
                "Tipo": "5.4. Autodisciplina na manutenção da estrutura de arquivos e correios eletrônicos",
                "1": "Há várias anormalidades na utilização ou guarda de vários tipos de documentos ou mensagens eletrônicas. Não está sendo feita a limpeza de arquivos obsoletos de acordo com a freqüência definida",
                "2": "Há várias anormalidades na utilização ou guarda de um ou outro tipo de documentos ou mensagens eletrônicas. Não está sendo feita a limpeza de arquivos obsoletos de acordo com a freqüência definida",
                "3": "Há uma ou outra anormalidade na utilização ou guarda de documentos ou mensagens eletrônicas. Não está sendo feita a limpeza de arquivos obsoletos de acordo com a freqüência definida",
                "4": "Há uma ou outra anormalidade na utilização ou guarda de documentos ou mensagens eletrônicas. Está sendo feita a limpeza de arquivos obsoletos de acordo com a freqüência definida",
                "5": "Todos os documentos e mensagens eletrônicas são utilizadas e estão guardadas de acordo com a estruturação definida. São feitas limpezas de arquivos obsoletos de acordo com a freqüência definida.",
              }
        ],
        type: Sequelize.JSON,
        allownull: false
    },
});
/*Sincroniza com banco de dados e cria só se não houver uma tabela avaliaçoe*/
Descricoes.sync({force: false}).then(() => {
    console.log("Tabela Descricao Criada")
});

module.exports = Descricoes;