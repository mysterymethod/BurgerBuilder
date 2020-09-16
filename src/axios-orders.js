import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-114cc.firebaseio.com/'
});

export default instance;