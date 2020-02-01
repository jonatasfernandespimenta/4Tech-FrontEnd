import axios from 'axios';

export const axios4tech = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000
});

axios4tech.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
