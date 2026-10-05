import Expresso from '../assets/images/Expresso.jpg';
import Macchiato from '../assets/images/Macchiato.jpg';
import Capuccino from '../assets/images/Capuccino.jpg';
import Latte from '../assets/images/Latte.jpg';
import Descafeinado from '../assets/images/Descafeinado.jpg';
import Bolodecenoura from '../assets/images/Bolodecenoura.jpg';
import BoloRedVelvet from '../assets/images/BoloRedVelvet.jpg';
import BolodeChocolate from '../assets/images/BolodeChocolate.jpg';
import PaodeQueijo from '../assets/images/PaodeQueijo.jpg';
import PaonaChapa from '../assets/images/PaonaChapa.jpg';
import MistoQuente from '../assets/images/MistoQuente.jpg';
import SucodeLaranja from '../assets/images/SucodeLaranja.jpg';

    const cardapio = [
  {
    id: 1,
    nome: 'Expresso',
    quantidade: '40ml',
    descricao: 'Café curto, puro e encorpado',
    preco: 10.0,
    imagem: Expresso,
    },
  {
    id: 2,
    nome: 'Macchiato',
    quantidade: '50ml',
    descricao: 'Café com a crema do leite',
    preco: 11.0,
    imagem: Macchiato, 
  },
  {
    id: 3,
    nome: 'Capuccino',
    quantidade: '100ml',
    descricao: 'Café com leite vaporizado e espuma cremosa',
    preco: 15.0,
    imagem: Capuccino,
  },
  {
    id: 4,
    nome: 'Latte',
    quantidade: '150ml',
    descricao: 'Tradicional "café com leite"',
    preco: 16.0,
    imagem: Latte,
  },
  {
    id: 5,
    nome: 'Descafeinado',
    quantidade: '40ml',
    descricao: 'Todo o sabor do café, sem a cafeína',
    preco: 12.0,
    imagem: Descafeinado,
  },
  {
    id: 6,
    nome: 'Fatia de bolo de cenoura',
    descricao: 'Massa fofinha com cobertura de chocolate',
    preco: 15.0,
    imagem: Bolodecenoura,
  },
  {
    id: 7,
    nome: 'Fatia de bolo red velvet',
    descricao: 'Massa aveludada com creme de queijo',
    preco: 15.0,
    imagem: BoloRedVelvet,
  },
  {
    id: 8,
    nome: 'Fatia de bolo de chocolate',
    descricao: 'Bolo macio de chocolate com cobertura cremosa',
    preco: 15.0,
    imagem: BolodeChocolate,
  },
  {
    id: 9,
    nome: 'Pão de queijo',
    descricao: 'Quentinho, crocante por fora e macio por dentro',
    preco: 5.0,
    imagem: PaodeQueijo,
  },
  {
    id: 10,
    nome: 'Pão na chapa',
    descricao: 'Pão francês dourado na chapa com manteiga',
    preco: 5.0,
    imagem: PaonaChapa,
  },
  {
    id: 11,
    nome: 'Misto quente',
    descricao: 'Pão com queijo e presunto, na chapa',
    preco: 5.0,
    imagem: MistoQuente,
  },
  {
    id: 12,
    nome: 'Suco de laranja',
    quantidade: '300ml',
    descricao: 'Feito na hora com laranjas frescas',
    preco: 5.0,
    imagem: SucodeLaranja,
  },
];
export default cardapio;
 