import { useState } from "react";


function Carrinho() {

    // 1. Estado inicial com 2 produtos criados
    const [itens, setItens] = useState([
        { id: 1, nome: "Café Expresso", preco: 8.50, quantidade: 2 },
        { id: 2, nome: "Croissant de Chocolate", preco: 12.00, quantidade: 1 }
    ]);

    // 2. Cálculo do total usando JavaScript puro
    const total = itens.reduce((soma, item) => soma + (item.preco * item.quantidade), 0)

    return (
        <section className="container-carrinho">
            <div className="layout">
                <h2>Carrinho</h2>
            </div>

            <div className="conteudo-carrinho">
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
                    <button className="btn-finalizar">Finalizar Compra</button>
                    <button className="btn-limpar">Limpar carrinho</button>
                </div>

            </div>
        </section>
    );
}

export default Carrinho;