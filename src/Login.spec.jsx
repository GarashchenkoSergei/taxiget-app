import React from 'react'
import { LoginWithAuth } from './Login.jsx';
import { render } from '@testing-library/react'

describe('Login', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<LoginWithAuth />)

    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
  });
});