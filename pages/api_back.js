import axios from 'react-native-axios';

//Igor:
//"Ipv4 2.4": 192.168.0.18
//"Ipv4 2.4_ext": 192.168.0.13
//"Ipv4 JU": 192.168.0.128
//"Ipv4 Sitio_cabo": 192.168.1.122

//var URL = 'http://192.168.1.122:4000'
var URL = 'https://bd-5s-heroku.herokuapp.com'

const avaliacaoid = axios.create({
    baseURL:  URL + '/avaliacaoid'
})

const hist_image = axios.create({
    baseURL:  URL + '/hist_image'
})

const imagem = axios.create({
    baseURL:  URL + '/image'
})

const id = axios.create({
    baseURL:  URL + '/avaliacao/id'
 });
 
const avaliacao = axios.create({
    baseURL:  URL + '/avaliacao'
 });

const resultado = axios.create({
   baseURL:  URL + '/resultados'
});

const pergunta = axios.create({
    baseURL: URL + '/pergunta'
});


const descricao = axios.create({
    baseURL: URL + '/descricao'
});


const hist5sDESC = axios.create({
    baseURL: URL + '/historico/5s/createdAt/DESC'
});

const hist5sASC = axios.create({
    baseURL: URL + '/historico/5s/createdAt/ASC'
});

const hist3sDESC = axios.create({
    baseURL: URL + '/historico/3s/createdAt/ASC'
});

const rank_graf = axios.create({
    baseURL: URL + '/ranking/5s/'
});

const rank = axios.create({
    baseURL: URL + '/ranking/'
});

const salvabd = axios.create({
    baseURL: URL + '/salvabd/'
});


export  { salvabd, rank,rank_graf,hist_image,id,imagem, descricao, avaliacao, resultado, pergunta, hist5sDESC, hist5sASC, hist3sDESC, avaliacaoid};



