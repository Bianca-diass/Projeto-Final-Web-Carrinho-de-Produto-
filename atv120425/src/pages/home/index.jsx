import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>
        Login <button onClick={() => navigate("/login")}>Login</button>
      </h1>
      <h1>
        Sign Up <button onClick={() => navigate("/criarLogin")}>Sign Up</button>
      </h1>
    </div>
  );
}
