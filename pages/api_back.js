import axios from 'react-native-axios';

//Igor:
//"Ipv4 2.4": 192.168.0.18
//"Ipv4 2.4_ext": 192.168.0.13

const imagem = axios.create({
    baseURL:  'http://192.168.0.13:4000/image'
})

const id = axios.create({
    baseURL:  'http://192.168.0.13:4000//avaliacao/id'
 });
 
const avaliacao = axios.create({
    baseURL:  'http://192.168.0.13:4000//avaliacao'
 });

const resultado = axios.create({
   baseURL:  'http://192.168.0.13:4000/resultados'
});

const pergunta = axios.create({
    baseURL: 'http://192.168.0.13:4000/pergunta'
});


const descricao = axios.create({
    baseURL: 'http://192.168.0.13:4000/descricao'
});


const hist5sDESC = axios.create({
    baseURL: 'http://192.168.0.13:4000/historico/5s/createdAt/DESC'
});

const hist5sASC = axios.create({
    baseURL: 'http://192.168.0.13:4000/historico/5s/createdAt/ASC'
});

const hist3sDESC = axios.create({
    baseURL: 'http://192.168.0.13:4000/historico/3s/createdAt/ASC'
});


export  {id,imagem, descricao, avaliacao, resultado, pergunta, hist5sDESC, hist5sASC, hist3sDESC};
