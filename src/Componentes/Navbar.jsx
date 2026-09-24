import { NavLink } from "react-router-dom"
import CartIcon from "./CartIcon"

function Navbar({ usuarioLogado, fazerLogout }) {

  function estiloLink({ isActive }) {
    return isActive
      ? "link-interno link-interno-ativo"
      : "link-interno"
  }

  return (
    <nav className="navbar">

      <span className="navbar-marca">
        Cafeteria Vila Doce Café
      </span>

      <div className="navbar-links">

        <NavLink to="/" end className={estiloLink}>
          Home
        </NavLink>

        <NavLink to="/cardapio" className={estiloLink}>
          Cardápio
        </NavLink>

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