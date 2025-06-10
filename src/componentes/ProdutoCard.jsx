import React from 'react';

const ProdutoCard = ({ produto, onEdit, onDelete }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-lg font-semibold text-purple-700">{produto.nome}</h2>
      <p className="text-gray-700 mb-2">R$ {Number(produto.preco).toFixed(2)}</p>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(produto)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(produto.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default ProdutoCard;
