import { useState, useEffect } from 'react';
import { getCapabilities } from '../services/apiService';


export function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCapabilities()
      .then((resultado) => {
        setData(resultado);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando los datos:", err);
        setLoading(false);
      });
  }, []);

  return { data, loading };
}
