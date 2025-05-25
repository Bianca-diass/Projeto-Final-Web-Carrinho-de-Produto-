import React from "react";
import { Routes, Route } from "react-router";
import Home from "../../pages/home";
import Login from "../../pages/login";
import SignUp from "../../pages/signUp";
import Dashboard from "../../dashboard/index";
import PrivateRoute from "../PrivateRoute";

export default function Routers() { 
  return (
    <>
      <Routes>
        <Route index elemente={<Produto/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criarLogin" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}


