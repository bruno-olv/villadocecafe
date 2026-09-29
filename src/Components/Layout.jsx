import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ usuarioLogado, fazerLogout }) {
  return (
    <div className="pagina">

      <Navbar
        usuarioLogado={usuarioLogado}
        fazerLogout={fazerLogout}
      />

      <main className="conteudo">
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}

export default Layout