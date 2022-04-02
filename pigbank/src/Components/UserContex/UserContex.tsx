import { createContext, useEffect, useState } from "react";

interface TypeDados {
    tipo:string;
    id:number;
    valor:number;
}

export const GlobalContext = createContext<TypeDados[]>([]);

interface TypeProps {
    children: any; // verificar tipagem
}

export function GlobalStorage(props : TypeProps) {

    
    const [dados, setDados] = useState<TypeDados[]>([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/transacoes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => setDados(data))
    }, [])

    return (
        <GlobalContext.Provider value={dados}>
            {props.children}
        </GlobalContext.Provider>
    )
}