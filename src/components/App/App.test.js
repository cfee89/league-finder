import { render, screen } from '@testing-library/react';
import App from './App';

test('renders league finder link', () => {
  render(<App />);
  const linkElement = screen.getByText(/league finder/i);
  expect(linkElement).toBeInTheDocument();
});
