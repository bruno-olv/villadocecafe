import React from 'react';
import './Home.css';
import cappuccinoImg from '../assets/images/cappuccino.jpg';
import croissantImg from '../assets/images/croissant.jpg';
import limonadaImg from '../assets/images/limonada.jpg';
import rosquinhaSvg from '../assets/icons/rosquinha.svg';

export function Logo() {
    return (
        <div className="logo-container">
            <span className="logo-texto">
                Villa D
                <img src={rosquinhaSvg} alt="o" className="logo-rosquinha" />
                ce Café
            </span>
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <div className="espacador-nav"></div>

            <main className="introducao-texto">
                <h1 className="text1">O seu momento mais doce do dia.</h1>
                <p className="paragrafo1">Cafés especiais, doces artesanais e aquele aconchego que você merece.</p>
            </main>

            <div className="barrinha"></div>

            <section className="primeira-section">
                <div className="container-foto">
                    <img
                        className="primeira-foto"
                        src={'https://media.istockphoto.com/id/523168750/pt/foto/caf%C3%A9-com-gr%C3%A3os-de-caf%C3%A9-na-mesa-de-madeira.jpg?s=612x612&w=0&k=20&c=MRLSozTzhAVHWYziNJIA7FNxELtCGKSb0iWehHfWz0A='}
                        alt="Cappuccino Doce de Leite"
                    />
                </div>
                <div className="container-texto-esquerdo">
                    <h2 className="titulo-produto">Cappuccino Doce de Leite</h2>
                    <p className="texto-cafe">
                        Extraído de grãos selecionados com um toque suave de doce de leite e cremosidade única.
                    </p>
                    <span>R$ 14,50</span>
                </div>
            </section>


            <section className="segunda-section">
                <div className="container-foto">
                    <img
                        className="segunda-foto"
                        src={croissantImg}
                        alt="Croissant com Queijo e Manteiga"
                    />
                </div>
                <div className="container-texto-direito">
                    <h2 className="titulo-produto">Croissant com Queijo e Manteiga</h2>
                    <p className="texto-salgado">
                        Croissant folhado artesanal quentinho, servido com fatia fina de queijo e manteiga aerada da casa. O acompanhamento perfeito para o seu café.
                    </p>
                    <span>R$ 15,90</span>
                </div>
            </section>


            <section className="terceira-section">
                <div className="container-foto">
                    <img
                        src={limonadaImg}
                        alt="Pink Lemonade Refrescante"
                        className="terceira-foto"
                    />
                </div>
                <div className="container-texto-esquerdo">
                    <h2 className="titulo-produto">Pink Lemonade Refrescante</h2>
                    <p className="texto-bebida">
                        Uma combinação equilibrada de limão espremido com xarope artesanal de frutos vermelhos, muito gelo e hortelã fresca. Leve, refrescante e perfeita para qualquer momento.
                    </p>
                    <span>R$ 13,90</span>
                </div>
            </section>

        </div>
    );
}