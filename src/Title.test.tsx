import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

test('renders learn react link', () => {
  render(<Title />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
