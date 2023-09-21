import axios from 'axios';


export const dashAxios = axios.create({
    baseURL: 'http://localhost:3030/api/',
    timeout: 12000,
});

dashAxios.interceptors.request.use( config  => {

    config.headers = {
        ...config.headers,
        'x-token-data': localStorage.getItem('tokenRc'),
    }
    return  config;
});
