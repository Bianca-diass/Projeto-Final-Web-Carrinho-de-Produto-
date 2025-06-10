import React, { createContext, useContext, useState, useEffect } from "react";
import { produtos as initialProducts } from "../components/produtos/Produtos";

const ProductContext = createContext();
export function useProducts() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  // carrega do localStorage ou usa lista inicial
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : initialProducts;
  });

  // sempre que products muda, grava no localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function addProduct(data) {
    const newProd = { ...data, id: Date.now() };
    setProducts((prev) => [...prev, newProd]);
  }

  function updateProduct(id, data) {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...data } : p))
    );
  }

  function deleteProduct(id) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}
