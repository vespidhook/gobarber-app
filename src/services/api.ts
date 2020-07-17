import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3333',
  // baseURL: 'http://192.168.0.108:3333',
  baseURL: 'https://api.bas.inf.br',
});

export default api;
