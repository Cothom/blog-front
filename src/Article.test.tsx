import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';

test('renders learn react link', () => {
  render(<Article title="Title" content="content" creation="01/01/2023"/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
