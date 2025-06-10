// src/components/cart/SidebarCart.jsx
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./SidebarCart.css";

export default function SidebarCart() {
  const { items, removeItem, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const total = items.reduce((s, i) => s + i.quantity * i.valor, 0);

  return (
    <>
      <button className="cart-toggle" onClick={() => setOpen(o => !o)}>
        {open ? "❯" : "❮"} Carrinho ({items.length})
      </button>
      <div className={`sidebar-cart ${open ? "open" : ""}`}>
        <h3>Meu Carrinho</h3>
        {items.length === 0 ? (
          <p>Vazio</p>
        ) : (
          <ul>
            {items.map(i => (
              <li key={i.id}>
                <div className="item-info">
                  <img src={i.imagem} alt={i.nome} />
                  <div>
                    <p>{i.nome}</p>
                    <small>Qtd: {i.quantity}</small>
                  </div>
                </div>
                <button onClick={() => removeItem(i.id)}>×</button>
              </li>
            ))}
          </ul>
        )}
        {items.length > 0 && (
          <>
            <div className="cart-total">Total: R$ {total.toFixed(2)}</div>
            <button className="clear-btn" onClick={clearCart}>Limpar</button>
          </>
        )}
      </div>
    </>
  );
}
