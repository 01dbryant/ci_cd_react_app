import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';
import { CartProvider } from '../context/CartContext';

test('cart displays item count and empty state', () => {
  render(
    <CartProvider>
      <Cart />
    </CartProvider>
  );

  expect(screen.getByLabelText('cart-count')).toHaveTextContent('Items: 0');
  expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
});
