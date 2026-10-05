import './Home.css';
import { Link } from 'react-router-dom';
import Cafeteria3 from '../assets/images/Cafeteria3.jpeg';
import NossoCafe from '../assets/images/NossoCafe.jpg'
import BebidasEspeciais from '../assets/images/BebidasEspeciais.jpg'
import CafedaManha from '../assets/images/Tradicional.jpg'
import cardapio from '../Data/Cardapio';

function Home() {

  // Produtos dos "Mais pedidos"
  const maisPedidos = cardapio.filter((produto) =>
    [4, 6, 3].includes(produto.id)
  );
  return (
    <main>

      <section className="hero-home">
        <div className="hero-imagem">
          <img
            src={Cafeteria3}
            alt="Interior da Villa Doce Café"
          />

        </div>
        <div className="hero-conteudo">

          <h1 className="text1">
            Sabores, História e
            <br />
            Experiências que
            <br />
            Atravessam Gerações
          </h1>

          <div className="barrinha"></div>

          <p className="paragrafo1">
            Desde o primeiro grão, a Villa Doce Café
            transforma tradição, aconchego e memória em
            momentos especiais no coração da cidade.
          </p>
        </div>
      </section>

      <section className="mais-pedidos">
        <div className="titulo-mais-pedidos">
          <span className="subtitulo-secao">
            POPULARES DA CASA
          </span>

          <h2>
            Os Mais Pedidos
          </h2>
          <p>
            Conheça os sabores favoritos da Villa Doce Café.
          </p>
        </div>

        <div className="cards-mais-pedidos">
          {maisPedidos.map((produto) => (
            <article
              className="card-produto"
              key={produto.id}
            >
              <div className="imagem-produto">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                />
              </div>

              <div className="conteudo-card">
                <h3>
                  {produto.nome}
                </h3>
                <p>
                  {produto.descricao ||
                    produto.quantidade ||
                    'Preparado com ingredientes selecionados.'
                  }
                </p>
                <div className="rodape-card">
                  <span className="preco-card">
                    R$ {produto.preco.toFixed(2).replace('.', ',')}
                  </span>

                  <Link
                    to="/cardapio"
                    className="botao-card"
                  >
                    Ver no cardápio
                  </Link>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/*botão para acessar o cardapio*/}

        <div className="ver-cardapio">
          <Link
            to="/cardapio"
            className="botao-ver-cardapio"
          >
            Ver cardápio completo
          </Link>

        </div>
      </section>

      <section className="primeira-section">
        <div className="container-foto">

          <img
            src={NossoCafe}
            alt="Nossocafe"
            className="primeira-foto"
          />
        </div>

        <div className="container-texto-esquerdo">
          <h2 className="titulo-produto">
            Nossos Cafés
          </h2>

          <p className="texto-cafe">
            Selecionamos grãos especiais e preparamos cada xícara
            com carinho e precisão. Do espresso clássico aos drinks
            autorais, cada gole conta uma história de sabor e tradição.
          </p>

          <span className="preco-produto">
            A partir de R$ 8,00
          </span>
        </div>

      </section>

      <section className="segunda-section">
        <div className="container-foto">

          <img
            src={BebidasEspeciais}
            alt="Bebidas"
            className="segunda-foto"
          />
        </div>

        <div className="container-texto-direito">
          <h2 className="titulo-produto">
            Nossas Bebidas Especiais
          </h2>


          <p className="texto-bebida">
            Cappuccino cremoso, matcha e muito mais.
            Todas as nossas bebidas são preparadas na hora, com
            ingredientes selecionados para proporcionar a melhor
            experiência.
          </p>


          <span className="preco-produto">
            A partir de R$ 12,00
          </span>
        </div>

      </section>

      <section className="terceira-section">
        <div className="container-foto">

           <img
            src={CafedaManha}
            alt="Cafedamanha"
            className="terceira-foto"
          />
        </div>

        <div className="container-texto-esquerdo">
          <h2 className="titulo-produto">
            Café da Manhã tradicional
          </h2>

          <p className="texto-salgado">
            Bolos, sobremesas e salgados tradicionais
            feitos diariamente. Perfeitos para acompanhar o seu café
            e tornar qualquer momento ainda mais especial.
          </p>

          <span className="preco-produto">
            A partir de R$ 9,50
          </span>
        </div>
      </section>

    </main>
  );
}


export default Home;

