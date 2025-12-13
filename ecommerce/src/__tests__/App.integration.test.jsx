import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('adding product updates cart count', async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByLabelText('cart-count')).toHaveTextContent('Items: 0');
  
  
  const addButtons = screen.getAllByRole('button', { name: /add to cart/i });
  await user.click(addButtons[0]);
  
  expect(screen.getByLabelText('cart-count')).toHaveTextContent('Items: 1');
});
