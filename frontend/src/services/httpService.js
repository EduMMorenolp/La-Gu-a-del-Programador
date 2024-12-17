import axios from 'axios';
//backend server http://localhost:3000/api
const httpService = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json' },
});

export default httpService;
