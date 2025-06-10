import React, { useState } from 'react';
import '../carrinho../..produtos.css'; // Importando o CSS

const ProdutoAd = () => {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Batom Vermelho', preco: '25,90' },
    { id: 2, nome: 'Paleta de Sombras', preco: '59,90' },
    { id: 3, nome: 'Delineador', preco: '19,90' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProdutos = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="produtos-container">
      <h1 className="titulo">Produtos de Maquiagem</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="produtos-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {filteredProdutos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco}</td>
              <td>
                <button className="action-button">Adicionar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProdutoAd;