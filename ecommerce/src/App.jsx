import { CartProvider } from './context/CartContext';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';

const products = [
  { id: 'p1', name: 'Acoustic Guitar', price: 299.99, image: '🎸' },
  { id: 'p2', name: 'Guitar Strap', price: 19.99, image: '🎵' },
  { id: 'p3', name: 'Guitar Picks (12-pack)', price: 8.99, image: '🎼' },
  { id: 'p4', name: 'Guitar Capo', price: 12.99, image: '🎹' },
  { id: 'p5', name: 'Guitar Strings', price: 15.99, image: '🎶' },
  { id: 'p6', name: 'Tuner', price: 24.99, image: '🎧' },
];

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <header className="app-header">
          <h1>🎸 Music Shop</h1>
          <p className="subtitle">Your one-stop shop for guitar accessories</p>
        </header>
        
        <div className="container">
          <div className="products-section">
            <h2>Our Products</h2>
            <div className="products-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          
          <aside className="cart-sidebar">
            <Cart />
          </aside>
        </div>
        
        <footer className="app-footer">
          <p>✅ TDD Implemented | 🚀 CI/CD Pipeline Active | 🔒 Deployed on Vercel</p>
        </footer>
      </div>
    </CartProvider>
  );
}