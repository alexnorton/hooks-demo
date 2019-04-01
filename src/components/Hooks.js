import React, { useState, useEffect } from 'react';
import fetch from '../fakeFetch';

function Pub() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);

    try {
      const data = await fetch('/lunch');

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
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Lunch</h2>
      <p>
        You should go to... <strong>{data}</strong>
      </p>
    </div>
  );
}

export default Pub;
