import { createContext, useContext, useEffect, useState } from "react"
 
const ThemeContext = createContext(null)
 
const CHAVE_TEMA = "villadocecafe.tema"
 
export function ThemeProvider({ children }) {
  const [tema, setTema] = useState(() => {
    const temaSalvo = localStorage.getItem(CHAVE_TEMA)
    if (temaSalvo === "claro" || temaSalvo === "escuro") {
      return temaSalvo
    }
    const prefereEscuro =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    return prefereEscuro ? "escuro" : "claro"
  })
 
  useEffect(() => {
    localStorage.setItem(CHAVE_TEMA, tema)
    document.body.classList.toggle("tema-escuro", tema === "escuro")
  }, [tema])
 
  function alternarTema() {
    setTema((temaAtual) => (temaAtual === "claro" ? "escuro" : "claro"))
  }
 
  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  )
}
 
export function useTheme() {
  const contexto = useContext(ThemeContext)
  if (contexto === null) {
    throw new Error("useTheme precisa ser utilizado dentro de um ThemeProvider")
  }
  return contexto
}