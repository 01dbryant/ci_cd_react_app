// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div aria-label={`product-${product.id}`}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}
