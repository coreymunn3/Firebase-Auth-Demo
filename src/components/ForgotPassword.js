import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import { useAuth } from '../context/AuthContext';
import CustomAlert from './CustomAlert';

const ForgotPassword = () => {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setMessage('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your email for further instructions');
    } catch (error) {
      setError('This email does not exist!');
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant='h4' align='center'>
          Reset Password
        </Typography>
        {error && (
          <CustomAlert type='error' message={error} setError={setError} />
        )}
        {message && (
          <CustomAlert type='success' message={message} setError={setMessage} />
        )}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id='username'
              label='UserName or Email'
              type='email'
              inputRef={emailRef}
              fullWidth
              autoComplete='off'
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              fullWidth
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Resetting...' : 'Reset'}
            </Button>
          </Grid>
        </Grid>
        <Typography component={Link} to='/Login' style={{ fontSize: '12px' }}>
          Or, Login
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ForgotPassword;
