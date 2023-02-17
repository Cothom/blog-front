import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogHeader from './BlogHeader';

test('renders learn react link', () => {
  render(<BlogHeader />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
