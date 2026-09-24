import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login({ aoLogar }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')

  const navigate = useNavigate()

  function fazerLogin(event) {
    event.preventDefault()

    const usuarios =
      JSON.parse(localStorage.getItem('usuarios')) || []

    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email === email.trim().toLowerCase() &&
        usuario.senha === senha
    )

    if (!usuarioEncontrado) {
      setMensagem('Email ou senha incorretos.')
      return
    }

    localStorage.setItem(
      'usuarioLogado',
      JSON.stringify(usuarioEncontrado)
    )

    aoLogar(usuarioEncontrado)

    navigate('/cardapio')
  }

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1>Villa Doce Café</h1>
        <h2>Entrar</h2>

        <form onSubmit={fazerLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="seuemail@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label>Senha</label>

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          <button
            type="submit"
            className="botao-auth"
          >
            Entrar
          </button>

        </form>

        {mensagem && (
          <p className="mensagem-erro">
            {mensagem}
          </p>
        )}

        <p className="auth-link">
          Ainda não possui uma conta?{' '}
          <Link to="/cadastro">
            Cadastre-se
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login