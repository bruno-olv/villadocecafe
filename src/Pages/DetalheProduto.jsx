import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import cardapio from '../Data/Cardapio';
import { useFavoritos } from '../Context/Favoritos';
import './DetalheProduto.css';
import { useCarrinho } from '../Context/CarrinhoContext';

function DetalheProduto() {
  const { id } = useParams();
  const produto = cardapio.find((item) => item.id === Number(id));
  const { ehFavorito, alternarFavorito } = useFavoritos();
  const [quantidade, setQuantidade] = useState(0);
  const { adicionarItem } = useCarrinho();
  const navigate = useNavigate();

  function alterarQuantidade(delta) {
    setQuantidade((quantidadeAtual) => Math.max(0, quantidadeAtual + delta));
  }

  function adicionarAoCarrinho() {
    adicionarItem(produto, quantidade);
    navigate('/carrinho');
  }

  if (!produto) {
    return (
      <div className="produto-detalhe">
        <p>Não encontramos nenhum produto com este identificador.</p>
        <Link to="/cardapio">Voltar para o cardápio</Link>
      </div>
    );
  }

  return (
    <div className="produto-detalhe">
      <img src={produto.imagem} alt={`Produto ${produto.nome}`} className="imagem-detalhe" />
      <div className="titulo-com-favorito titulo-detalhe">
        <h2>{produto.nome}</h2>

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
              : 'Marcar como favorita'
          }
        >
          {ehFavorito(produto.id) ? '♥' : '♡'}
        </button>
      </div>

      {produto.descricao && (
        <p className="descricao-detalhe">{produto.descricao}</p>
      )}

      {produto.quantidade && (
        <p className="tamanho-detalhe">{produto.quantidade}</p>
      )}

      <p className="preco-detalhe">R$ {produto.preco.toFixed(2)}</p>

      <div className="acoes-detalhe">
        <div className="controle-quantidade">
          <button type="button" onClick={() => alterarQuantidade(-1)}>
            −
          </button>

          <span>{quantidade}</span>

          <button type="button" onClick={() => alterarQuantidade(1)}>
            +
          </button>
        </div>

        <button className="botao-comprar" onClick={adicionarAoCarrinho}>
          Adicionar ao carrinho
        </button>
      </div>

      <Link to="/cardapio" className="link-voltar">
        Voltar para o cardápio
      </Link>
    </div>
  );
}

export default DetalheProduto;
