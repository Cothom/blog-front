import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleList';

test('renders learn react link', () => {
  render(<ArticleList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
