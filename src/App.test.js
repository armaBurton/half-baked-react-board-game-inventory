import { render, screen } from '@testing-library/react';
import App from './App';

test('Boardzo', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/boardzo/i);
  expect(linkElement).toBeInTheDocument();
});
