import { createContext, useContext, useEffect, useState } from 'react';

const CarrinhoContext = createContext(null);
const CHAVE_ARMAZENAMENTO = 'villadocecafe.carrinho';

export function CarrinhoProvider({ children }) {
    const [itens, setItens] = useState(() => {
        const dadosSalvos = localStorage.getItem(CHAVE_ARMAZENAMENTO);
        return dadosSalvos ? JSON.parse(dadosSalvos) : [];
    });

    useEffect(() => {
        localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(itens));
    }, [itens]);

    function adicionarItem(produto, quantidade) {
        setItens((itensAtuais) => {
            const jaExiste = itensAtuais.find((item) => item.id === produto.id);

            if (jaExiste) {
                return itensAtuais.map((item) =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + quantidade }
                        : item
                );
            }
            return [...itensAtuais, { ...produto, quantidade }];
        });
    }

    function limparCarrinho() {
        setItens([]);
    }

    return (
        <CarrinhoContext.Provider value={{ itens, adicionarItem, limparCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export function useCarrinho() {
    const contexto = useContext(CarrinhoContext);

    if (contexto === null) {
        throw new Error(
            'useCarrinho precisa ser utilizado dentro de um CarrinhoProvider'
        );
    }
    return contexto;
}