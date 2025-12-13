// src/__tests__/App.integration.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('adding product updates cart count', async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByLabelText('cart-count')).toHaveTextContent('Items: 0');
  await user.click(screen.getByRole('button', { name: /add to cart/i }));
  expect(screen.getByLabelText('cart-count')).toHaveTextContent('Items: 1');
});