import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Admin from './components/Admin/Admin';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        <Route path="/admin" component={Admin}/>
        <Route path="/" component={Layout}/>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
