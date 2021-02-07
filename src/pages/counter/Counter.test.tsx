import React from 'react';
import { render, screen } from '@testing-library/react';
import { CounterPage } from './CounterPage';

describe('Counter Page', () => {
  test('Counter works', () => {
    render(<CounterPage />);
  });
});
