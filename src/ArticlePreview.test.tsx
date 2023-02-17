import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlePreview from './ArticlePreview';

test('renders learn react link', () => {
  render(<ArticlePreview name="First Article"/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
