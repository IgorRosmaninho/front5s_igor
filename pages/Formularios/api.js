import axios from 'react-native-axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:4000/historico/5s/createdAt/DESC'
});

export default api;