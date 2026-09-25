import { Link } from 'react-router-dom';
import cardapio from '../data/cardapio';
import { useFavoritos } from '../context/Favoritos';

function Favoritos() {
  const { favoritos } = useFavoritos();
  const produtosFavoritos = cardapio.filter((produtos) =>
    favoritos.includes(produtos.id)
  );

  if (produtosFavoritos.length === 0) {
    return (
      <div className="favoritos-vazio">
        <p>Você ainda não marcou nenhum produto como favorito.</p>
        <Link to="/cardapio">Explorar o cardápio</Link>
      </div>
    );
  }

  return (
    <ul className="lista-favoritos">
      {produtosFavoritos.map((produtos) => (
        <li key={produtos.id} className="item-favorito">
          <Link to={`/cardapio/${produtos.id}`}>{produtos.nome}</Link>
          <span className="preco-favorito">R$ {produtos.preco.toFixed(2)}</span>
        </li>
      ))}
      <Link to="/cardapio">Voltar ao cardápio</Link>
    </ul>
  );
}

export default Favoritos;
