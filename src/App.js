import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
