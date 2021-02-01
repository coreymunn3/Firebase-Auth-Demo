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

const UpdateProfile = () => {
  const history = useHistory();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const promises = [];
    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value));
      }
      if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value));
      }

      Promise.all(promises)
        .then(() => {
          history.push('/');
        })
        .catch(() => {
          setError('Failed to Update Account');
        })
        .finally(() => setLoading(false));
    } else {
      setError('Passwords do not match');
    }
  };
  return (
    <Card>
      <CardContent>
        <Typography variant='h4' align='center'>
          Update Profile
        </Typography>
        <Grid container spacing={2}>
          {error && (
            <Grid item xs={12}>
              <CustomAlert type='error' message={error} setError={setError} />
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              variant='filled'
              required
              id='username'
              label='UserName'
              type='email'
              inputRef={emailRef}
              defaultValue={currentUser.email}
              fullWidth
              autoComplete='off'
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
              required
              id='password'
              label='Password'
              type='password'
              placeholder='Leave Blank to Keep the Same'
              inputRef={passwordRef}
              fullWidth
              autoComplete='off'
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
              required
              id='confirmPassword'
              label='Confirm Password'
              type='password'
              inputRef={passwordConfirmRef}
              placeholder='Leave Blank to Keep the Same'
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
              {loading ? 'Updating...' : 'Update'}
            </Button>
          </Grid>
        </Grid>
        <Typography style={{ fontSize: '12px' }}>
          <Link to='/'> Cancel</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UpdateProfile;
