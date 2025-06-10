// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isAuth = Boolean(localStorage.getItem("token"));
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
