// src/pages/auth/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const u = users.find(u => u.email===email && u.password===password);
    if (u) {
      localStorage.setItem("token", email);
      nav("/products");
    } else alert("Credenciais inválidas.");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail" value={email}
            onChange={e=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Senha" value={password}
            onChange={e=>setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <div className="auth-footer">
          Não tem conta? <Link to="/register">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}
