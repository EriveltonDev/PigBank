import { Link } from "react-router-dom"
import { Buttons, Container, Table } from "./style"
import {FaHome} from 'react-icons/fa'
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../UserContex/UserContex";

export function Extrato() {

    const dados = useContext(GlobalContext);
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