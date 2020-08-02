import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Login from './components/Admin/Login/Login'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={Login}/>
        <Route path="/" component={Layout}/>
      </Switch>
    </div>
  );
}

export default App;
