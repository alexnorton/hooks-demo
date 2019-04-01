import React, { useReducer, useEffect } from 'react';
import fetch from '../fakeFetch';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'request':
      return { data: null, error: null, isLoading: true };
    case 'success':
      return { data: action.data, error: null, isLoading: false };
    case 'failure':
      return { data: null, error: action.error, isLoading: false };
    default:
      return state;
  }
}

function Pub() {
  const [{ data, error, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function fetchData() {
    dispatch({ type: 'request' });

    try {
      const data = await fetch('/dinner');

      dispatch({ type: 'success', data });
    } catch (error) {
      dispatch({ type: 'failure', error });
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
      <h2>Dinner</h2>
      <p>
        You should go to... <strong>{data}</strong>
      </p>
    </div>
  );
}

export default Pub;
