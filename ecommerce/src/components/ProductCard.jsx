import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card" aria-label={`product-${product.id}`}>
      <div className="product-image">{product.image}</div>
      <h3>{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button 
        className="add-to-cart-btn"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
}
