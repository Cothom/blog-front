import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarItem from './NavbarItem';

test('renders learn react link', () => {
  render(<NavbarItem name="Blog"/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
