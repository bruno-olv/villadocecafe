import { NavLink } from "react-router-dom"
function Navbar() {
  function estiloLink({ isActive }) {
    return isActive ? "link-interno link-interno-ativo" : "link-interno"
  }
  return (
    <nav className="navbar">
      <span className="navbar-marca"> Cafeteria Vila Doce Café
</span>
      <div className="navbar-links">
        <NavLink to="/" end className={estiloLink}>
          Home
        </NavLink>
        <NavLink to="/cardapio" className={estiloLink}>
          Cardápio
        </NavLink>
        </div>
        </nav>
        )
        }
        export default Navbar