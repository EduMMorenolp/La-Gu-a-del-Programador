import { useState, useEffect } from 'react';
import { getRecursos } from '../api/recursoApi';

const useRecursos = () => {
  const [recursos, setRecursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRecursos()
      .then((data) => setRecursos(data))
      .catch((err) => {
        console.error('Error fetching resources:', err);
        setError('Failed to load resources');
      })
      .finally(() => setLoading(false));
  }, []);

  return { recursos, loading, error };
};

export default useRecursos;
