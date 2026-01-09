import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders TrackPulse header', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const logoElement = screen.getByText(/TrackPulse/i);
  expect(logoElement).toBeInTheDocument();
});
