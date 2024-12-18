import { useState, useEffect } from 'react';
import { getCategorias } from '../api/categoriaApi';

const useCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategorias().then((data) => {
      setCategorias(data);
      setLoading(false);
    });
  }, []);

  return { categorias, loading };
};

export default useCategorias;
