// src/components/Cart.jsx
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, clearCart } = useCart();
  return (
    <div>
      <h2>Cart</h2>
      <p aria-label="cart-count">Items: {items.length}</p>
      <button onClick={clearCart}>Clear</button>
    </div>
  );
}