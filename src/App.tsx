import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CounterPage } from './pages/counter/CounterPage';
import { Nav } from './components/Nav';
import { FormPage } from './pages/form/FormPage';
import { CocktailsPage } from './pages/cocktails/CocktailsPage';

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
      <Route exact path='/form'>
        <FormPage />
      </Route>
      <Route exact path='/cocktails'>
        <CocktailsPage />
      </Route>
    </Router>
  );
};
