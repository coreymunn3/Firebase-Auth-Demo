import React from 'react';
import { Alert } from '@material-ui/lab';

const CustomAlert = ({ message, type }) => {
  return <Alert severity={type}>{message}</Alert>;
};

export default CustomAlert;
