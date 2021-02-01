import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';
import { useAuth } from '../context/AuthContext';
import CustomAlert from './CustomAlert';

const useStyles = makeStyles({
  item: {
    margin: '0.5rem 0',
  },
  title: {
    textAlign: 'center',
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const history = useHistory();
  const {
    currentUser: { email },
    logout,
  } = useAuth();
  const [error, setError] = useState('');

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Failed to Log Out');
    }
  };
  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} variant='h3'>
          Dashboard
        </Typography>
        <Divider />
        {error && <CustomAlert type='error' message={error} />}
        <Typography
          className={classes.item}
          variant='h6'
        >{`Hello, you are ${email}`}</Typography>
        <Button
          className={classes.item}
          component={Link}
          to='/update-profile'
          fullWidth
          variant='contained'
          color='secondary'
        >
          Update Your Profile
        </Button>
        <Button
          className={classes.item}
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
