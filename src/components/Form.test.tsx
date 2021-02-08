import { render, screen } from '@testing-library/react';
import React from 'react';
import { Form } from './Form';

describe('Form tests', () => {
  test('render form', () => {
    render(<Form />);
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
    screen.debug();
  });
});

// Test calling on submit
// Test inputs work
