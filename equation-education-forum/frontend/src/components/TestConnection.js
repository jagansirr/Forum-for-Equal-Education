import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import axios from 'axios';

function TestConnection() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/test.php')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage('Error connecting to backend');
      });
  }, []);

  return <div>{message}</div>;
}

export default TestConnection;
