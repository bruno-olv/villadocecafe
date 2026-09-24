import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mensagem, setMensagem] = useState('')

  const navigate = useNavigate()

  function cadastrar(event) {
    event.preventDefault()

    if (!nome || !email || !senha || !confirmarSenha) {
      setMensagem('Preencha todos os campos.')
      return
    }

    if (senha !== confirmarSenha) {
      setMensagem('As senhas não são iguais.')
      return
    }

    const usuarios =
      JSON.parse(localStorage.getItem('usuarios')) || []

    const emailFormatado =
      email.trim().toLowerCase()

    const usuarioExiste = usuarios.find(
      (usuario) => usuario.email === emailFormatado
    )

    if (usuarioExiste) {
      setMensagem('Este email já está cadastrado.')
      return
    }

    const novoUsuario = {
      id: crypto.randomUUID(),
      nome: nome.trim(),
      email: emailFormatado,
      senha: senha
    }

    const novaLista = [
      ...usuarios,
      novoUsuario
    ]

    localStorage.setItem(
      'usuarios',
      JSON.stringify(novaLista)
    )

    alert('Cadastro realizado com sucesso!')

    navigate('/login')
  }

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>Villa Doce Café</h1>
        <h2>Crie sua conta</h2>

        <form onSubmit={cadastrar}>

          <label>Nome</label>

          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />

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
            placeholder="Digite uma senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          <label>Confirmar senha</label>

          <input
            type="password"
            placeholder="Digite a senha novamente"
            value={confirmarSenha}
            onChange={(event) =>
              setConfirmarSenha(event.target.value)
            }
          />

          <button
            type="submit"
            className="botao-auth"
          >
            Criar conta
          </button>

        </form>

        {mensagem && (
          <p className="mensagem-erro">
            {mensagem}
          </p>
        )}

        <p className="auth-link">
          Já possui conta?{' '}
          <Link to="/login">
            Entrar
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Cadastro