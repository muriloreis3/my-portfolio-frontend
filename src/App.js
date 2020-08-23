import React, { useEffect, useContext } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Admin from './components/Admin/Admin';
import { AuthContext } from './context/AuthContext';
import * as API from './api/api';

function App() {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(authContext.token === null) {
      if (token) {
        API.verify(token)
          .then(resp => {
            authContext.setToken(token);
          }).catch(error => {
            localStorage.removeItem('token');
            authContext.setToken(null);
          })
      }
    }
  }, [authContext]);

  return (
    <Switch>
      <Route path="/admin" component={Admin}/>
      <Route path="/" component={Layout}/>
    </Switch>
  );
}

export default App;
