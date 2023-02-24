import { render, screen } from '@testing-library/react';
import App from './App';

test('renders content', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sample project to test CircleCI workflow and deploy to S3/i);
  expect(linkElement).toBeInTheDocument();
});
