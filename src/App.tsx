import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CounterPage } from './pages/CounterPage';
import { Nav } from './components/Nav';

export const App = () => {
  return (
    <Router>
      <Nav />
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/counter'>
        <CounterPage />
      </Route>
    </Router>
  );
};
