import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AuthProvider } from './context/AuthContext';
// components
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

const useStyles = makeStyles({
  root: {
    maxWidth: '600px',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </Router>
      </AuthProvider>
    </Container>
  );
};

export default App;
