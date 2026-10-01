
import './Home.css';
import Cafeteria3 from '../assets/images/Cafeteria3.jpeg';

function Home() {
  return (
    <main>

      {/* =========================================
          INTRODUÇÃO / HERO
      ========================================= */}
      <section className="hero-home">

        {/* IMAGEM DO LADO DIREITO */}
        <div className="hero-imagem">
          <img
            src={Cafeteria3}
            alt="Interior da Villa Doce Café"
          />
        </div>

        {/* ÁREA CLARA DO LADO ESQUERDO */}
        <div className="hero-texto">

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
            transforma tradição, aconchego e memória
            em momentos especiais no coração da cidade.
          </p>

        </div>

      </section>


      {/* =========================================
          PRIMEIRA SEÇÃO - CAFÉS
      ========================================= */}
      <section className="primeira-section">

        <div className="container-foto">
          <img
            src={Cafeteria3}
            alt="Interior da Villa Doce Café"
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


      {/* =========================================
          SEGUNDA SEÇÃO - BEBIDAS
      ========================================= */}
      <section className="segunda-section">

        <div className="container-foto">
          {/* imagem das bebidas */}
        </div>

        <div className="container-texto-direito">

          <h2 className="titulo-produto">
            Bebidas Especiais
          </h2>

          <p className="texto-bebida">
            Cappuccino cremoso, chocolate quente, matcha e muito mais.
            Todas as nossas bebidas são preparadas na hora, com
            ingredientes selecionados para proporcionar a melhor
            experiência.
          </p>

          <span className="preco-produto">
            A partir de R$ 12,00
          </span>

        </div>

      </section>


      {/* =========================================
          TERCEIRA SEÇÃO - DOCES E SALGADOS
      ========================================= */}
      <section className="terceira-section">

        <div className="container-foto">
          {/* imagem dos doces e salgados */}
        </div>

        <div className="container-texto-esquerdo">

          <h2 className="titulo-produto">
            Doces & Salgados
          </h2>

          <p className="texto-salgado">
            Croissants, bolos, cheesecakes e salgados artesanais
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

