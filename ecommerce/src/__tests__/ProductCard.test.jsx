
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../components/ProductCard';
import { CartProvider, useCart } from '../context/CartContext';

function CartProbe() {
  const { items } = useCart();
  return <div aria-label="probe-count">{items.length}</div>;
}

test('renders product and adds to cart', async () => {
  const user = userEvent.setup();
  render(
    <CartProvider>
      <ProductCard product={{ id: 'p1', name: 'Capo', price: 12, image: '🎸' }} />
      <CartProbe />
    </CartProvider>
  );

  expect(screen.getByText('Capo')).toBeInTheDocument();
  expect(screen.getByText('$12.00')).toBeInTheDocument();
  expect(screen.getByLabelText('probe-count')).toHaveTextContent('0');

  await user.click(screen.getByRole('button', { name: /add to cart/i }));
  expect(screen.getByLabelText('probe-count')).toHaveTextContent('1');
});
