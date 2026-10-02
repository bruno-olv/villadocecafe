import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './Carrinho.css'

function Carrinho() {

    const location = useLocation();
    const navigate = useNavigate();

    const itens = location.state?.itens || [];
    const carrinhoVazio = itens.length === 0;

    // 2. Cálculo do total usando JavaScript puro
    const total = itens.reduce((soma, item) => soma + (item.preco * item.quantidade), 0)

    function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    navigate('/cardapio');
    }
            function limparCarrinho() {
            navigate('/carrinho', {
             state: {
             itens: [],
                     },
             replace: true,
              });
                }
    return (
        <section className="container-carrinho">
            <div className="layout-carrinho">
                <h2>Carrinho</h2>

                {/* Grid que organiza a tabela e o resumo lado a lado */}
                <div className="grid-carrinho">
                    <div className="conteudo-carrinho">
                        {carrinhoVazio && (
                          <p role="status">
                           Seu carrinho está vazio.
                            {' '}
          <button onClick={() => navigate('/cardapio')}>
            Ver cardápio
        </button>
    </p>
)}
                        <table className="tabela-carrinho">
                            <thead>
                                <tr>
                                    <th className="tabela-primeiro-item">Item</th>
                                    <th className="tabela-segundo-item">Preço</th>
                                    <th className="tabela-terceiro-item">Quantidade</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* 3. Mapeando a lista para criar as linhas da tabela */}
                                {itens.map((produto) => (
                                    <tr key={produto.id}>
                                        <td>{produto.nome}</td>
                                        <td>R$ {produto.preco.toFixed(2)}</td>
                                        <td>{produto.quantidade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="sumario-carrinho">
                        {/* Total, Frete(talvez), Botões */}
                        <div className="resumo">
                            <div className="resumo-linha">
                                <span>Subtotal dos itens</span>
                                <span>R$ {total.toFixed(2)}</span>
                            </div>
                            <div className="resumo-linha">
                                <span>Frete</span>
                                <span>Grátis</span>
                            </div>
                            <div className="resumo-linha total-linha">
                                <span>Total a pagar</span>
                                <span>R$ {total.toFixed(2)}</span>
                            </div>
                            <button
                            className="btn-finalizar"
                            onClick={finalizarCompra}
                            disabled={carrinhoVazio}
                                >
                            Finalizar Compra
                            </button>

                            <button className="btn-limpar"
                            onClick={limparCarrinho}>
                                Limpar carrinho
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carrinho;