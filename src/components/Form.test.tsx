import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Form } from './Form';

describe('Form tests', () => {
  test('render form', () => {
    render(<Form />);
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });
  // test('form input works', () => {
  //   render(<Form />);
  //   const [nameInput, emailInput, passwordInput] = screen.getAllByRole(
  //     'textbox'
  //   );
  //   const testName = 'joe smith';
  //   const testEmail = 'joe@smith.com';
  //   const testPassword = 'joesmithjoe24!';
  //   userEvent.type(nameInput, testName);
  //   userEvent.type(emailInput, testEmail);
  //   userEvent.type(passwordInput, testPassword);
  //   expect(screen.getByText(testName)).toBeInTheDocument();
  //   expect(screen.getByText(testEmail)).toBeInTheDocument();
  //   expect(screen.getByText(testPassword)).toBeInTheDocument();
  // });
});
