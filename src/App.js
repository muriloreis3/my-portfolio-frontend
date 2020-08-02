import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={Admin}/>
        <Route path="/" component={Layout}/>
      </Switch>
    </div>
  );
}

export default App;
