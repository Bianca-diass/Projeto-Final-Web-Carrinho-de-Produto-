// src/pages/products/ProductUpdate.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import "./ProductForm.css";

export default function ProductUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useProducts();
  const prod = products.find((p) => p.id === Number(id)) || {};

  const [nome, setNome] = useState(prod.nome || "");
  const [valor, setValor] = useState(prod.valor || "");
  const [imagem, setImagem] = useState(prod.imagem || "");

  useEffect(() => {
    if (prod.nome) {
      setNome(prod.nome);
      setValor(prod.valor);
      setImagem(prod.imagem);
    }
  }, [prod]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(prod.id, {
      nome,
      valor: parseFloat(valor),
      imagem,
    });
    navigate("/products");
  };

  return (
    <div className="form-container">
      <h2>Editar Produto</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label>
          Valor (R$):
          <input
            type="number"
            step="0.01"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </label>
        <label>
          URL da Imagem:
          <input
            type="url"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            required
          />
        </label>
        <div className="form-actions">
          <button type="submit">Atualizar</button>
          <button type="button" onClick={() => navigate("/products")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
