import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import { CocktailDetails } from './CocktailDetails';
import { MemoryRouter } from 'react-router-dom';

describe('Cocktail details page', () => {
  test('renders', async () => {
    render(<CocktailDetails />, { wrapper: MemoryRouter });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
    expect(screen.getByText(/failed to load/i)).toBeInTheDocument();
  });
});
