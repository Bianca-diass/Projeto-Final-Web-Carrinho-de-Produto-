import React from "react";
import "./carrinho.css";
import monitor from "../produtos/monitor.webp";
import cadeira from "../produtos/cadeira.jpg";
import teclado from "../produtos/teclado.webp";
import pato from "../produtos/pato.jpg";
import headset from "../produtos/headset.webp";

function Carrinho() {
  return (
    <div className="carrinho">
      <div className="item">
        <img
          src={monitor}
          alt="monitor samsung em destaque com fundo branco"
          height="100px"
        />

        <p className="titulo">Monitor Samsung 240hz, 1ms, HDMI</p>

        <div className="blocoFinal">
          <p className="preco">R$8.499,99</p>
          <button className="botaoMenos">-</button>
          <h4 className="quantidadeItens">1</h4>
          <button className="botaoMais">+</button>
        </div>
      </div>

      <div className="item">
        <img
          src={cadeira}
          alt="cadeira samsung em destaque com fundo branco"
          height="100px"
        />

        <p className="titulo">Cadeira Gamer Reclinável</p>

        <div className="blocoFinal">
          <p className="preco">R$1.249,99</p>
          <button className="botaoMenos">-</button>
          <h4 className="quantidadeItens">1</h4>
          <button className="botaoMais">+</button>
        </div>
      </div>

      <div className="item">
        <img
          src={teclado}
          alt="teclado gamer em destaque com fundo branco"
          height="100px"
        />

        <p className="titulo">Teclado gamer Dell</p>

        <div className="blocoFinal">
          <p className="preco">R$749,99</p>
          <button className="botaoMenos">-</button>
          <h4 className="quantidadeItens">1</h4>
          <button className="botaoMais">+</button>
        </div>
      </div>

      <div className="item">
        <img
          src={pato}
          alt="pato fofo em destaque com fundo branco"
          height="100px"
        />

        <p className="titulo">Patinho Fofo</p>

        <div className="blocoFinal">
          <p className="preco">R$699,99</p>
          <button className="botaoMenos">-</button>
          <h4 className="quantidadeItens">1</h4>
          <button className="botaoMais">+</button>
        </div>
      </div>

      <div className="item">
        <img
          src={headset}
          alt="Headset gamer em destaque com fundo branco"
          height="100px"
        />

        <p className="titulo">Headset gamer</p>

        <div className="blocoFinal">
          <p className="preco">R$499,99</p>
          <button className="botaoMenos">-</button>
          <h4 className="quantidadeItens">1</h4>
          <button className="botaoMais">+</button>
        </div>
      </div>

      <div className="finalizar">
        <div className="">
          <h4 id="valorTotal">Valor Total: </h4>
          <h4 id="precoFinal">R$11.699,95</h4>
        </div>
        <button className="botaoFinalizar">
          <h5>Finalizar compra</h5>
        </button>
      </div>
    </div>
  );
}

export default Carrinho;
