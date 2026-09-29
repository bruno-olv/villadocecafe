import { NavLink } from "react-router-dom"
import { useFavoritos } from '../Context/Favoritos'
import { useTheme } from '../Context/Theme'
import CartIcon from "./CartIcon"
import rosquinhaSvg from '../assets/icons/rosquinha.svg'
import './Navbar.css'

function Logo() {
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

function Navbar({ usuarioLogado, fazerLogout }) {
  const { favoritos } = useFavoritos()
  const { tema, alternarTema } = useTheme()

  function estiloLink({ isActive }) {
    return isActive ? "link-interno link-interno-ativo" : "link-interno"
  }

  return (
    <nav className="lk-container">
      <div className="navbar-conteudo">

        {/* ESQUERDA: Logo */}
        <div className="navbar-esquerda">
          <NavLink to="/" className="navbar-logo-link">
            <Logo />
          </NavLink>
        </div>

        {/* MEIO: Links de navegação */}
        <div className="navbar-centro">
          <NavLink to="/" end className={estiloLink}>
            Home
          </NavLink>

          <NavLink to="/cardapio" className={estiloLink}>
            Cardápio
            {favoritos.length > 0 && (
              <span className="contador-favoritos">{favoritos.length}</span>
            )}
          </NavLink>

          <NavLink to="/cardapio/favoritos" className={estiloLink}>
            Favoritos
          </NavLink>
        </div>

        {/* DIREITA: Tema, Carrinho e Login/Usuário */}
        <div className="navbar-direita">
          <button
            type="button"
            onClick={alternarTema}
            className="botao-tema"
            aria-label={tema === "claro" ? "Ativar modo escuro" : "Ativar modo claro"}
          >
            {tema === "claro" ? "🌙" : "☀️"}
          </button>

          {usuarioLogado ? (
            <>
              <NavLink to="/carrinho" className={estiloLink}>
                <CartIcon size={20} />
              </NavLink>

              <span className="usuario-navbar">
                Olá, {usuarioLogado.nome}
              </span>

              <button
                type="button"
                className="botao-sair"
                onClick={fazerLogout}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={estiloLink}>
                Entrar
              </NavLink>

              <NavLink to="/cadastro" className="botao-cadastro-navbar">
                Cadastre-se
              </NavLink>
            </>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Navbar