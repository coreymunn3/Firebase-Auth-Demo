import React, { Fragment, useRef, useState } from 'react';
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

const Login = () => {
  const history = useHistory();
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (error) {
      setError('Failed to Log In');
    }
    setLoading(false);
  };
  return (
    <Fragment>
      <Card>
        <CardContent>
          <Typography variant='h4' align='center'>
            Log In
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
              <Button
                variant='contained'
                color='primary'
                fullWidth
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Loggin You In...' : 'Log In'}
              </Button>
            </Grid>
          </Grid>
          <Typography
            component={Link}
            to='/forgot-password'
            style={{ fontSize: '12px' }}
          >
            Forgot Password ?
          </Typography>
        </CardContent>
      </Card>
      <Typography style={{ color: 'grey', margin: '0.5rem 0' }}>
        Don't Have an Account?
        <Link to='/signup'> Sign Up!</Link>
      </Typography>
    </Fragment>
  );
};

export default Login;
