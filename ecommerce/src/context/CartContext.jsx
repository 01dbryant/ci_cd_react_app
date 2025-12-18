import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { items: [...state.items, action.product] };
    case 'REMOVE':
      const newItems = [...state.items];
      newItems.splice(action.index, 1);
      return { items: newItems };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const addToCart = (product) => dispatch({ type: 'ADD', product });
  const removeFromCart = (index) => dispatch({ type: 'REMOVE', index });
  const clearCart = () => dispatch({ type: 'CLEAR' });
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
