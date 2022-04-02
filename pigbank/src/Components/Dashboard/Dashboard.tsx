import { Buttons, Container, Deposit, Infos, Withdraw } from "./style";
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaEyeSlash, FaEye, FaRegTimesCircle } from 'react-icons/fa'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ModalComponent } from "../Modal/Modal";
import { GlobalContext } from "../UserContex/UserContex";
import { calc } from "../../Transactions/Calc";

export function Dashboard() {
    const [tipo, setTipo] = useState('');
    const [showElement, setShowElement] = useState(true);
    const dados = useContext(GlobalContext);
    const values = calc(dados);

    const [openModalWithdraw, setOpenModalWithdraw] = useState(false);
    
    function handleOpenModalWithdraw() {
        setOpenModalWithdraw(true);
        setTipo('Saque');
    }

    function handleCloseModalWithdraw() {
        setOpenModalWithdraw(false);
    }
    

    const [openModalDeposit, setOpenModalDeposit] = useState(false);

    function handleOpenModalDeposit() {
        setOpenModalDeposit(true);
        setTipo('Depósito')
    }

    function handleCloseModalDeposit() {
        setOpenModalDeposit(false);
    }

    return (
        <Container>
            <Infos>
                <section>
                    <div>
                        <h2>Saldo Total</h2>
                        <span>
                            <a onClick={() => setShowElement(!showElement)}>
                                {showElement ? <FaEyeSlash/> : <FaEye/>}
                            </a>
                        </span>
                    </div>
                    { showElement ? <p id="total">{values.saldoAtual},00</p> : null}
                </section>
                
                <section>
                    <Deposit>
                        <h2>Depositado</h2>
                        <span><FaArrowAltCircleUp/></span>
                    </Deposit>
                    <p>{values.depositosTotais},00</p>
                </section>
               
                <section>
                    <Withdraw>
                        <h2>Sacado</h2>
                        <span><FaArrowAltCircleDown/></span>
                    </Withdraw>
                    <p>{values.saquesTotais},00</p>
                </section>


            </Infos>

            <Buttons>
                <button onClick={handleOpenModalDeposit}>Depositar</button>
                <Link to="/extrato">Extrato</Link>
                <button onClick={handleOpenModalWithdraw}>Sacar</button>
                <button>Zerar</button>
            </Buttons>

            <ModalComponent
                openModal={openModalWithdraw}
                closeModal={handleCloseModalWithdraw}
                type={tipo}
            >Sacar
            </ModalComponent>

            <ModalComponent
                openModal={openModalDeposit}
                closeModal={handleCloseModalDeposit}
                type={tipo}
            >Depositar
            </ModalComponent>
        </Container>
    )
}