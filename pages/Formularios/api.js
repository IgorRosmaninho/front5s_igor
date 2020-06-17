import axios from 'react-native-axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

export default api;