import React from 'react';
import { render, screen } from '@testing-library/react';
import { CocktailsPage } from './CocktailsPage';

describe('Cocktails page', () => {
  test('Renders and loads images', () => {
    render(<CocktailsPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    screen.debug();
  });
});
