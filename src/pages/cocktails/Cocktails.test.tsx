import React from 'react';
import {
  queryByText,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { CocktailsPage } from './CocktailsPage';

describe('Cocktails page', () => {
  test('Renders and loads images', async () => {
    render(<CocktailsPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
    expect(screen.getAllByText(/margarita/i)[0]).toBeInTheDocument();
  });
});
