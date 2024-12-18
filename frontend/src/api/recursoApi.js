import http from '../services/httpService';

export const getRecursos = async () => {
  const response = await http.get('/recursos');
  return response.data;
};
