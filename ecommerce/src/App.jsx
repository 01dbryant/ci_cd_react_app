// src/App.jsx
import { CartProvider } from './context/CartContext';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

const sample = { id: 'p1', name: 'Guitar Strap', price: 19.99 };

export default function App() {
  return (
    <CartProvider>
      <main>
        <ProductCard product={sample} />
        <Cart />
      </main>
    </CartProvider>
  );
}