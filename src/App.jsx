// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

import Login from "./pages/auth/Login.jsx";
import CreateLogin from "./pages/auth/CreateLogin.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

import PaginaProdutos from "./components/produtos/PaginaProdutos.jsx";
import ProductCreate from "./pages/products/ProductCreate.jsx";
import ProductUpdate from "./pages/products/ProductUpdate.jsx";
import ProductDelete from "./pages/products/ProductDelete.jsx";

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<CreateLogin />} />

            {/* privadas */}
            <Route element={<PrivateRoute />}>
              <Route path="/products" element={<PaginaProdutos />} />
              <Route path="/products/create" element={<ProductCreate />} />
              <Route
                path="/products/update/:id"
                element={<ProductUpdate />}
              />
              <Route
                path="/products/delete/:id"
                element={<ProductDelete />}
              />
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}
//EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE MACARENA AAAAAAAAAAAAIIIIIIIII!!!!!!!!!!!!