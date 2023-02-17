import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogHome from './BlogHome';

test('renders learn react link', () => {
  render(<BlogHome />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
