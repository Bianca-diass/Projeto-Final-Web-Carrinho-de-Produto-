import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div>
      <h1>Bem-vindo à área privada!</h1>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
