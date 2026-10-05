import { NavLink } from "react-router-dom"
import { useFavoritos } from '../Context/Favoritos'
import { useTheme } from '../Context/Theme'
import CartIcon from "./CartIcon"

function Navbar({ usuarioLogado, fazerLogout }) {
  const { favoritos } = useFavoritos()
  const { tema, alternarTema } = useTheme()

  function estiloLink({ isActive }) {
    return isActive
      ? "link-interno link-interno-ativo"
      : "link-interno"
  }

  return (
    <nav className="navbar">

      <span className="navbar-marca">
        <img src="/images/logo.jpg" alt="Logo Villa Doce Café" className="navbar-logo" />
        Villa Doce Café
      </span>

      <div className="navbar-links">

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
          Ver favoritos
        </NavLink>

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
              className="botao-sair"
              onClick={fazerLogout}
            >
              Sair
            </button>

          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={estiloLink}
            >
              Entrar
            </NavLink>

            <NavLink
              to="/cadastro"
              className="botao-cadastro-navbar"
            >
              Cadastre-se
            </NavLink>
          </>
        )}

      </div>

    </nav>
  )
}

export default Navbar