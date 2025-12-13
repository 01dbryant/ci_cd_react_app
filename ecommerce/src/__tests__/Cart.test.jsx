// src/__tests__/Cart.test.jsx
import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';
import { CartProvider } from '../context/CartContext';

test('cart displays item count', () => {
  render(
    <CartProvider>
      <Cart />
    </CartProvider>
  );

  expect(screen.getByLabelText('cart-count')).toHaveTextContent('Items: 0');
  expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument();
});
