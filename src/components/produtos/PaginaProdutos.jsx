// src/components/produtos/PaginaProdutos.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import SidebarCart from "../cart/SidebarCart.jsx";
import { useCart } from "../../context/CartContext";
import { useProducts } from "../../context/ProductContext";
import "./PaginaProdutos.css";

export default function PaginaProdutos() {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { products } = useProducts();

  return (
    <>
      <SidebarCart />
      <div className="pagina-produto">
        <header className="cabeçalho">
          <h1>GlowUp</h1>  
          <button
            className="btn-create"
            onClick={() => navigate("/products/create")}
          >
            + Criar Produto
          </button>
        </header>

        <div className="gradeProdutos">
          {products.map((p) => (
            <div key={p.id} className="cardProduto">
              <img src={p.imagem} alt={p.nome} />
              <h3>{p.nome}</h3>
              <p className="preço">R$ {p.valor.toFixed(2)}</p>
              <div className="card-actions">
                <button
                  className="botaoCompra"
                  onClick={() => addItem(p)}
                >
                  Comprar
                </button>
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/products/update/${p.id}`)}
                >
                  ✎
                </button>
                <button
                  className="del-btn"
                  onClick={() => navigate(`/products/delete/${p.id}`)}
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
