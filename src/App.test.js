import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Lux Aurea landing page', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { name: /Claridad para decidir.*Firmeza para proteger/i });
  expect(linkElement).toBeInTheDocument();
});
