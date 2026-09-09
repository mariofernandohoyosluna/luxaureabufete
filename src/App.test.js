import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Lux Aurea landing page', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { name: /Decidir con firmeza.*Cuidar lo que más importa/i });
  expect(linkElement).toBeInTheDocument();
});
