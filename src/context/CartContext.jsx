// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export function useCart() { return useContext(CartContext); }

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = prod => {
    setItems(prev => {
      const exists = prev.find(i => i.id === prod.id);
      if (exists) return prev.map(i =>
        i.id === prod.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      return [...prev, { ...prod, quantity: 1 }];
    });
  };
  const removeItem = id => setItems(prev => prev.filter(i => i.id !== id));
  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
