import { render, screen } from '@testing-library/react';
import React from 'react';
import { Form } from './Form';

describe('Form tests', () => {
  test('render form', () => {
    render(<Form />);
  });
});

// Test calling on submit
// Test inputs work
