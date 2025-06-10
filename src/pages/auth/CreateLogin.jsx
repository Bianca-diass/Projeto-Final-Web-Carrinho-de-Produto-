// src/pages/auth/CreateLogin.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function CreateLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some(u=>u.email===email)) {
      return alert("E-mail já cadastrado.");
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Cadastrado! Faça login.");
    nav("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail" value={email}
            onChange={e=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Senha" value={password}
            onChange={e=>setPassword(e.target.value)} required />
          <button type="submit">Cadastrar</button>
        </form>
        <div className="auth-footer">
          Já tem conta? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
