import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AuthProvider } from './context/AuthContext';
// components
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

const useStyles = makeStyles({
  root: {
    maxWidth: '600px',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
          </Switch>
        </Router>
      </AuthProvider>
    </Container>
  );
};

export default App;
