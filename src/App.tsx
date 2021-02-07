import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CounterPage } from './pages/CounterPage';

export const App = () => {
  return (
    <Router>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/counter'>
        <CounterPage />
      </Route>
    </Router>
  );
};
