import { useState, useEffect } from 'react';
import { getRecursos } from '../api/recursoApi';

const useRecursos = () => {
  const [recursos, setRecursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecursos().then((data) => {
      setRecursos(data);
      setLoading(false);
    });
  }, []);

  return { recursos, loading };
};

export default useRecursos;
