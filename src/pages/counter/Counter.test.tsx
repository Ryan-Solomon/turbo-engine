import React from 'react';
import { render, screen } from '@testing-library/react';
import { CounterPage } from './CounterPage';
import userEvent from '@testing-library/user-event';

describe('Counter Page', () => {
  test('Counter works', () => {
    render(<CounterPage />);
    expect(screen.getByText(/count/i)).toBeInTheDocument();
    const [increase, decrease, clear] = screen.getAllByRole('button');
    userEvent.click(increase);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    userEvent.click(increase);
    userEvent.click(decrease);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    userEvent.click(clear);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });
});
