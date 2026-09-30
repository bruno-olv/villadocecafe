import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FavoritosProvider } from './context/Favoritos'
import { ThemeProvider } from './context/Theme'
import Layout from './Components/Layout'
import { useState } from 'react'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'
import CardapioLayout from './components/CardapioLayout'
import Cardapio from './Pages/Cardapio'
import Carrinho from './Pages/Carrinho'
import ListaFavoritos from './Pages/ListaFavoritos'
import './App.css'
import Home from './Pages/Home'
import './Pages/Home.css'

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('usuarioLogado')) || null
    } catch {
      return null
    }
  })

  function fazerLogout() {
    localStorage.removeItem('usuarioLogado')
    setUsuarioLogado(null)
  }

  return (
    <ThemeProvider>
      <FavoritosProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout usuarioLogado={usuarioLogado} fazerLogout={fazerLogout} />}>
              <Route index element={<Home />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="cardapio/favoritos" element={<ListaFavoritos />} />
              <Route path="login" element={<Login aoLogar={setUsuarioLogado} />} />
              <Route path="cadastro" element={<Cadastro />} />
              <Route path="carrinho" element={<Carrinho />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FavoritosProvider>
    </ThemeProvider>
  )
}

export default App
