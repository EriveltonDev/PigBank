import { Link } from "react-router-dom"
import { Buttons, Container, Table } from "./style"
import {FaHome} from 'react-icons/fa'
import { useContext } from "react";
import { GlobalContext } from "../UserContex/UserContex";
import { calc } from "../../Transactions/Calc";

export function Extrato() {

    const dados = useContext(GlobalContext);
    const values = calc(dados);

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
                        <td>{values.saldoAtual},00</td>
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