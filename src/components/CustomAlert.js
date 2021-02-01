import React, { useEffect } from 'react';
import { Alert } from '@material-ui/lab';

const CustomAlert = ({ message, type, setError }) => {
  useEffect(() => {
    setTimeout(() => setError(''), 3000);
  }, []);
  return <Alert severity={type}>{message}</Alert>;
};

export default CustomAlert;
