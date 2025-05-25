import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("auth", "true");
    alert("Login realizado com sucesso!");

    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <br />
          <input
            type="password"
            name="senha"
            value={credentials.senha}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="button-group">
          <button type="submit">Entrar</button>
          <button type="button" onClick={() => navigate("/")}>
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}
