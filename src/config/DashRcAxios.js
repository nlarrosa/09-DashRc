import axios from 'axios';


export const dashAxios = axios.create({
    baseURL: 'http://localhost:3030/api/',
    timeout: 12000,
    headers: {

    }
});