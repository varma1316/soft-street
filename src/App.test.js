import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders shop link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  const linkElement = screen.getByText(/shop/i);
  expect(linkElement).toBeInTheDocument();
});
