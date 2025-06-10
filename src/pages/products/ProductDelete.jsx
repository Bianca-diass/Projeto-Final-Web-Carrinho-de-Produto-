// src/pages/products/ProductDelete.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import "./ProductForm.css";

export default function ProductDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, deleteProduct } = useProducts();
  const prod = products.find((p) => p.id === Number(id)) || {};

  const handleDelete = () => {
    deleteProduct(prod.id);
    navigate("/products");
  };

  return (
    <div className="form-container" style={{ textAlign: "center" }}>
      <h2>Excluir Produto</h2>
      <p>
        Tem certeza que deseja excluir{" "}
        <strong style={{ color: "#ff69b4" }}>{prod.nome}</strong>?
      </p>
      <div className="form-actions">
        <button
          onClick={handleDelete}
          style={{ background: "#ff1493", color: "#000" }}
        >
          Sim
        </button>
        <button
          onClick={() => navigate("/products")}
          style={{ background: "#333", color: "#eee" }}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
