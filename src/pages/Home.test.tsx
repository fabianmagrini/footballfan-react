import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('App', () => {
  it('should render hello world', () => {
    // Arrange
    render(<Home />, { wrapper: BrowserRouter });
    const text = 'Home';
    // Act
    // Expect
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(text);
  });
});