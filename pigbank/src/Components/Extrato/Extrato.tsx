import { Link } from "react-router-dom"
import { Buttons, Container, Table } from "./style"
import {FaHome} from 'react-icons/fa'
import { useEffect, useState } from "react";

export function Extrato() {

    interface TypeDados {
        tipo:string;
        id:number;
        valor:number;
    }
    
    const [dados, setDados] = useState<TypeDados[]>([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/transacoes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => setDados(data))
    }, [])

    const [depositosTotais, setDepositosTotais] = useState(0);
    const [saquesTotais, setSaquesTotais] = useState(0);
    const [saldoAtual, setSaldoAtual] = useState(0);


    

    useEffect(() => {
        let totalDepositos = 0;
        let totalSaques = 0;
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].tipo === 'Depósito') {
                totalDepositos += dados[i].valor;
            } else {
                totalSaques += dados[i].valor;
            }
        }
        setSaldoAtual(totalDepositos - totalSaques);
        setSaquesTotais(totalSaques);
        setDepositosTotais(totalDepositos);
    }, [dados]);
    
    return (
        <Container>

            <Table>
                <thead>
                    <tr>
                        <th>Transação</th>
                        <th>Valor</th>
                    </tr>
                </thead>

                <tbody>
                    {dados.map(dado => (
                    <tr 
                    className={dado.tipo === "Depósito" ? 'deposito' : 'saque'} 
                    key={dado.id}>
                        <td>{dado.tipo}</td>
                        <td>{dado.valor},00</td>
                    </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td>Saldo Total</td>
                        <td>{saldoAtual},00</td>
                    </tr>
                </tfoot>
            </Table>

            <Buttons>
                <Link to="/">
                    <span><FaHome/></span>
                    Home
                </Link>
            </Buttons>
        </Container>
    )
}