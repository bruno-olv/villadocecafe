import { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFavoritos } from '../Context/Favoritos';
import cardapio from '../Data/Cardapio';
import { useCarrinho } from '../Context/CarrinhoContext';

function Cardapio() {
  const [quantidades, setQuantidades] = useState({});
  const { ehFavorito, alternarFavorito } = useFavoritos();
  const { adicionarItem } = useCarrinho();

  const navigate = useNavigate();

  function alterarQuantidade(id, delta) {
    setQuantidades((quantidadesAtuais) => {
      const quantidadeAtual = quantidadesAtuais[id] || 0;
      const novaQuantidade = Math.max(0, quantidadeAtual + delta);

      return {
        ...quantidadesAtuais,
        [id]: novaQuantidade,
      };
    });
  }

  const valorTotal = useMemo(() => {
    return cardapio.reduce((total, produto) => {
      const quantidade = quantidades[produto.id] || 0;

      return total + quantidade * produto.preco;
    }, 0);
  }, [quantidades]);

  const quantidadeTotalItens = useMemo(() => {
    return Object.values(quantidades).reduce(
      (soma, quantidade) => soma + quantidade,
      0
    );
  }, [quantidades]);

  function finalizarPedido() {
    cardapio
      .filter((produto) => quantidades[produto.id] > 0)
      .forEach((produto) => adicionarItem(produto, quantidades[produto.id]));

    navigate('/carrinho');
  }

  return (
    <div className="cardapio">
      <p className="subtitulo">
        Escolha seu pedido e a quantidade desejada
      </p>

      <div className="cardapio-conteudo">
        <ul className="lista-cardapio">
          {cardapio.map((produto) => (
            <li key={produto.id} className="item-cardapio">

              <img
                src={produto.imagem}
                alt={produto.nome}
                className="imagem-produto"
              />

              <div className="info-produto">

                <div className="titulo-favoritos">
                  <button
                    type="button"
                    className={
                      ehFavorito(produto.id)
                        ? 'botao-favorito botao-favorito-ativo'
                        : 'botao-favorito'
                    }
                    onClick={() => alternarFavorito(produto.id)}
                    aria-label={
                      ehFavorito(produto.id)
                        ? 'Remover dos favoritos'
                        : 'Marcar como favorito'
                    }
                  >
                    {ehFavorito(produto.id) ? '♥' : '♡'}
                  </button>
                </div>

                <Link to={`/cardapio/${produto.id}`} className="link-produto">
                  <h3>{produto.nome}</h3>
                </Link>

                {produto.descricao && (
                  <p className="descricao-produto">{produto.descricao}</p>
                )}

                {produto.quantidade && (
                  <p className="quantidade-produto">{produto.quantidade}</p>
                )}

                <p className="preco">
                  R$ {produto.preco.toFixed(2)}
                </p>
              </div>

              <div className="controle-quantidade">
                <button
                  onClick={() => alterarQuantidade(produto.id, -1)}
                >
                  −
                </button>

                <span>
                  {quantidades[produto.id] || 0}
                </span>

                <button
                  onClick={() => alterarQuantidade(produto.id, 1)}
                >
                  +
                </button>
              </div>

            </li>
          ))}
        </ul>

        <aside className="painel-pedido">
          <h3>Seu pedido</h3>

          <div className="resumo-linha">
            <span>Unidades</span>
            <span>{quantidadeTotalItens}</span>
          </div>

          <div className="resumo-linha total-linha">
            <span>Total</span>
            <span>R$ {valorTotal.toFixed(2)}</span>
          </div>

          <button
            className="botao-finalizar"
            onClick={finalizarPedido}
            disabled={quantidadeTotalItens === 0}
          >
            Finalizar
          </button>
        </aside>
      </div>
    </div>
  );
}

export default Cardapio;
