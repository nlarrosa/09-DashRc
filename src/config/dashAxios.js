import axios from "axios";



export const dashAxios = axios.create({
    baseURL: 'http://efactor.com/api/v1/',
    timeout: 12000,
    headers: {

    }
});