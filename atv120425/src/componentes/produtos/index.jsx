import "./produtos.css";
import { FaBeer, FaShoppingCart } from "react-icons/fa";
import React, { useState } from "react";
import { produtos } from "./produtos";
import MenuLateral from "../menuLateral/menuLateral";
import Carrinho from "./Carrinho"; // Certifique-se de que o componente Carrinho está importado corretamente

export default function Produtos() {
  const [itensCarrinho, definirItensCarrinho] = useState([]);
  const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);

  const adicionarAoCarrinho = (produto) => {
    definirItensCarrinho((anteriores) => [...anteriores, produto]);
  };

  return (
    <div className="containerProdutos">
      <MenuLateral />
      <div className="conteudoProdutos">
        <div className="cartButton">
          <button onClick={() => setCarrinhoVisivel(true)}>
            <FaShoppingCart size={25} />
          </button>
          {itensCarrinho.length > 0 && (
            <span className="cartCount">{itensCarrinho.length}</span>
          )}
        </div>

        {carrinhoVisivel && (
          <div className="carrinhoContainer show">
            <button
              className="closeCarrinho"
              onClick={() => setCarrinhoVisivel(false)}
            >
              <FaBeer />
            </button>
            <Carrinho
              cartItems={itensCarrinho}
              setCartItems={definirItensCarrinho}
            />
          </div>
        )}

        <div className="produtos">
          {produtos.map((produto) => (
            <div key={produto.nome} className="produto">
              <img src={produto.imagem} alt={produto.nome} />
              <h4>{produto.nome}</h4>
              <p>R$ {produto.valor.toFixed(2)}</p>
              <button onClick={() => adicionarAoCarrinho(produto)}>
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
