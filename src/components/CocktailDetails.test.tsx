import { render, screen } from '@testing-library/react';
import React from 'react';
import { CocktailDetails } from './CocktailDetails';
import { MemoryRouter } from 'react-router-dom';

describe('Cocktail details page', () => {
  test('renders', () => {
    render(<CocktailDetails />, { wrapper: MemoryRouter });
  });
});
