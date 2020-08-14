import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Admin from './components/Admin/Admin';
import AuthContext from './context/AuthContext';

function App() {
  return (
    <AuthContext.Provider value={{token: null}}>
      <Switch>
        <Route path="/admin" component={Admin}/>
        <Route path="/" component={Layout}/>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
