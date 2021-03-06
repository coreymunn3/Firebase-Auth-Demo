import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import CustomAlert from './CustomAlert';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const history = useHistory();
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      try {
        setError('');
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
        history.push('/');
      } catch (error) {
        setError('Failed to create an account');
      }
      setLoading(false);
    } else {
      setError('Passwords do not match');
    }
  };
  return (
    <Card>
      <CardContent>
        <Typography variant='h4' align='center'>
          Sign Up
        </Typography>
        <Grid container spacing={2}>
          {error && (
            <Grid item xs={12}>
              <CustomAlert type='error' message={error} setError={setError} />
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              required
              id='username'
              label='UserName'
              type='email'
              inputRef={emailRef}
              fullWidth
              autoComplete='off'
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='password'
              label='Password'
              type='password'
              inputRef={passwordRef}
              fullWidth
              autoComplete='off'
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='confirmPassword'
              label='Confirm Password'
              type='password'
              inputRef={passwordConfirmRef}
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
              {loading ? 'Signing You Up...' : 'Sign Up'}
            </Button>
          </Grid>
        </Grid>
        <Typography style={{ fontSize: '12px' }}>
          Already Have an Account?
          <Link to='/login'> Log In!</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Signup;
