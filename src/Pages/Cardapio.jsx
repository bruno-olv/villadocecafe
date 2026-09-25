import { useState, useMemo } from 'react';
import { useFavoritos } from '../context/Favoritos';
import cardapio from '../Data/Cardapio';

function Cardapio() {
  const [quantidades, setQuantidades] = useState({});
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);
  const { ehFavorito, alternarFavorito } = useFavoritos();
  function alterarQuantidade(id, delta) {
    setQuantidades((quantidadesAtuais) => {
      const quantidadeAtual = quantidadesAtuais[id] || 0;
      const novaQuantidade = Math.max(0, quantidadeAtual + delta);
      return { ...quantidadesAtuais, [id]: novaQuantidade };
    });
    setPedidoFinalizado(false);
  }
  const valorTotal = useMemo(() => {
    return cardapio.reduce((total, produto) => {
      const quantidade = quantidades[produto.id] || 0;
      return total + quantidade * produto.preco;
    }, 0);
  }, [quantidades]);
  const quantidadeTotalItens = useMemo(() => {
    return Object.values(quantidades).reduce((soma, q) => soma + q, 0);
  }, [quantidades]);
  function finalizarPedido() {
    setPedidoFinalizado(true);
  }
  return (
    <div className="cardapio">
      <p className="subtitulo">Escolha seu pedido e a quantidade desejada</p>
      <ul className="lista-cardapio">
        {cardapio.map((produto) => (
          <li key={produto.id} className="item-cardapio">
            <div className="info-produto">
              <div className="titulo-favoritos">
                 <button
                  type="button"
                  className={
                    ehFavorito(produto.id)
                      ? "botao-favorito botao-favorito-ativo"
                      : "botao-favorito"
                  }
                  onClick={() => alternarFavorito(produto.id)}
                  aria-label={
                    ehFavorito(produto.id)
                      ? "Remover dos favoritos"
                      : "Marcar como favorita"
                  }
                >
                  {ehFavorito(produto.id) ? "♥" : "♡"}
                </button>
              </div>
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>
              <p className="preco">R$ {produto.preco.toFixed(2)}</p>
            </div>
            <div className="controle-quantidade">
              <button onClick={() => alterarQuantidade(produto.id, -1)}>
                −
              </button>
              <span>{quantidades[produto.id] || 0}</span>
              <button onClick={() => alterarQuantidade(produto.id, 1)}>
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="botao-finalizar"
        onClick={finalizarPedido}
        disabled={quantidadeTotalItens === 0}
      >
        Finalizar
      </button>
      {pedidoFinalizado && (
        <p className="resumo-pedido">
          Pedido com {quantidadeTotalItens}{' '}
          {quantidadeTotalItens === 1 ? 'unidade' : 'unidades'}. Total:{' '}
          <strong>R$ {valorTotal.toFixed(2)}</strong>
        </p>
      )}
    </div>
  );
}
export default Cardapio;
