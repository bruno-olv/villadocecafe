
import './Home.css';
import Cafeteria3 from '../assets/images/Cafeteria3.jpeg';

function Home() {
  return (
    <main>

      {/*INTRODUÇÃO / HERO*/}
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

    </main>
  );
}

export default Home;

