import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Articles from './components/Articles/Articles'
import Article from './components/Articles/Article/Article'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path='/article' component={Article} />
          <Route path='/articles' component={Articles}/>
          <Route path='/' exact />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
