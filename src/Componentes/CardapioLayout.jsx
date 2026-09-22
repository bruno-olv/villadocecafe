import { Link } from 'react-router-dom';
import cardapio from '../data/cardapio';

function CardapioLayout() {
  return (
    <div className="cardapio-layout">
      <div className="cardapio-cabecalho">
        <h1>Cardápio</h1>
      </div>

      <div className="cardapio">
        {cardapio.map((produto) => (
          <div className="produto" key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} />

            <h2>{produto.nome}</h2>

            {produto.quantidade && <p>{produto.quantidade}</p>}

            {produto.descricao && <p>{produto.descricao}</p>}

            <strong>R$ {produto.preco.toFixed(2)}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardapioLayout;
