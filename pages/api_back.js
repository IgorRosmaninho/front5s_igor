import axios from 'react-native-axios';



const pergunta = axios.create({
    baseURL: 'http://192.168.0.13:4000/pergunta'
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


export  {pergunta, hist5sDESC, hist5sASC, hist3sDESC};
