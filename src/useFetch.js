import { useState, useEffect } from 'react';
import fetch from './fakeFetch';

function useFetch(path) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);

    try {
      const data = await fetch(path);

      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
  };
}

export default useFetch;
