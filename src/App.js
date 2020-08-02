import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Articles from './components/Articles/Articles'
import Article from './components/Articles/Article/Article'
import Projects from './components/Projects/Projects'
import Project from './components/Projects/Project/Project'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path='/article/:id' component={Article} />
          <Route path='/articles' component={Articles}/>
          <Route path='/project/:id' component={Project} />
          <Route path='/projects' component={Projects}/>
          <Route path='/' exact />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
