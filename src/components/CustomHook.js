import React from 'react';
import useFetch from '../useFetch';

function Coffee() {
  const { data, error, isLoading } = useFetch('/pub');

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Pub</h2>
      <p>
        You should go to... <strong>{data}</strong>
      </p>
    </div>
  );
}

export default Coffee;
