import { useParams, Link } from 'react-router-dom';
import cardapio from '../data/Cardapio';
import { useFavoritos } from '../context/Favoritos';

function DetalheProduto() {
  const { id } = useParams();
  const produto = cardapio.find((item) => item.id === Number(id));
  const { ehFavorito, alternarFavorito } = useFavoritos();

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
      <p className="descricao-detalhe">{produto.descricao}</p>
      <p className="preco-detalhe">R$ {produto.preco.toFixed(2)}</p>
      <Link to="/cardapio" className="link-voltar">
        Voltar para o cardápio
      </Link>
    </div>
  );
}

export default DetalheProduto;