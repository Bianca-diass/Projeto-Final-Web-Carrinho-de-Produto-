import React, { useState } from 'react';
import { useProdutos } from '../contexts/ProdutosContext';
import ProdutoCard from '../componentes/ProdutoCard';

const Produtos = () => {
  const { produtos, criarProduto, atualizarProduto, deletarProduto } = useProdutos();
  const [novo, setNovo] = useState({ nome: '', preco: '' });

  const handleAdd = () => {
    if (novo.nome && novo.preco) {
      criarProduto(novo);
      setNovo({ nome: '', preco: '' });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Produtos de Maquiagem</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-1"
          placeholder="Nome"
          value={novo.nome}
          onChange={e => setNovo({ ...novo, nome: e.target.value })}
        />
        <input
          className="border p-1"
          placeholder="Preço"
          type="number"
          value={novo.preco}
          onChange={e => setNovo({ ...novo, preco: e.target.value })}
        />
        <button
          onClick={handleAdd}
          className="bg-purple-600 text-white px-3 py-1 rounded"
        >
          Adicionar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {produtos.map(prod => (
          <ProdutoCard
            key={prod.id}
            produto={prod}
            onEdit={() => atualizarProduto(prod.id, { nome: prod.nome + ' (Editado)' })}
            onDelete={deletarProduto}
          />
        ))}
      </div>
    </div>
  );
};

export default Produtos;
