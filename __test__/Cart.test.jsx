// src/components/__tests__/Cart.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from '../Cart';
import { CartProvider, useCart } from '../../context/CartContext';

function Seed() {
  const { addToCart } = useCart();
  addToCart({ id: 'x', name: 'Strings', price: 8 });
  return null;
}

test('cart shows count and clears', async () => {
  const user = userEvent.setup();
  render(
    <CartProvider>
      <Seed />
      <Cart />
    </CartProvider>
  );

  expect(screen.getByLabelText('cart-count')).toHaveTextContent('Items: 1');
  await user.click(screen.getByRole('button', { name: /clear/i }));
  expect(screen.getByLabelText('cart-count')).toHaveTextContent('Items: 0');
});