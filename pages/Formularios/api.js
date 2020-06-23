import axios from 'react-native-axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/historico/5s/createdAt/DESC'
});

export default api;