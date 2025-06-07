import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../../pages/login";
import CadastroPage from "../../pages/signUp/index";
import PaginaInicial from "../../pages/home/index";
import PainelAdmin from "../../pages/admin/dashboard";
import NovoProduto from "../../pages/criarProdutos/criarProd";
import ProdutosCadastrados from "../../pages/lerProdutos/lerProd";
import AtualizaProduto from "../../pages/atualizaProdutos/atualizar";
import ExcluiProduto from "../../pages/removeProdutos/removeProd";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signUp" element={<CadastroPage />} />
      <Route path="/home" element={<PaginaInicial />} />
      <Route path="/dashboard" element={<PainelAdmin />} />
      <Route path="/adicionaProduto" element={<NovoProduto />} />
      <Route path="/listagemProdutos" element={<ProdutosCadastrados />} />
      <Route path="/editaProduto" element={<AtualizaProduto />} />
      <Route path="/removeProduto" element={<ExcluiProduto />} />
    </Routes>
  );
}
