import http from '../services/httpService';

export const getCategorias = async () => {
  const response = await http.get('/categorias');
  return response.data;
};
