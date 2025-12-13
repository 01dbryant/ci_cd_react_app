import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, clearCart } = useCart();
  
  const total = items.reduce((sum, item) => sum + item.price, 0);
  
  return (
    <div className="cart-container">
      <h2>🛒 Shopping Cart</h2>
      
      <div className="cart-count" aria-label="cart-count">
        Items: {items.length}
      </div>
      
      {items.length > 0 ? (
        <>
          <div className="cart-items-list">
            {items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <span className="cart-item-name">{item.image} {item.name}</span>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p>🎵 Add some items!</p>
        </div>
      )}
    </div>
  );
}
