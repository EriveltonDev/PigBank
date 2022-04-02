import { Buttons, Container, Deposit, Infos, Withdraw } from "./style";
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaEyeSlash, FaEye, FaRegTimesCircle } from 'react-icons/fa'
import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal'
import { ModalComponent } from "../Modal/Modal";
import { GlobalContext } from "../UserContex/UserContex";

export function Dashboard() {

    const dados = useContext(GlobalContext);

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
    }, [dados])


    function handleSubmitdeposit(event : FormEvent) {
        event.preventDefault();

        handleCloseModalDeposit();
        window.location.reload();


        const id = dados.length + 1;

        const data = {
            id,
            valor,
            tipo,
        };

        fetch('http://localhost:5000/transacoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    function handleSubmitwithdraw(event : FormEvent) {
        event.preventDefault();

        handleCloseModalWithdraw();
        window.location.reload();

        const id = dados.length + 1;

        const data = {
            id,
            valor,
            tipo,
        };

        fetch('http://localhost:5000/transacoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    function changeValue(value : number) {
        setValor(value)
    }


    const [valor, setValor] = useState(0);
    const [tipo, setTipo] = useState('');
    const [showElement, setShowElement] = useState(true);

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
                    { showElement ? <p id="total">{saldoAtual},00</p> : null}
                </section>
                
                <section>
                    <Deposit>
                        <h2>Depositado</h2>
                        <span><FaArrowAltCircleUp/></span>
                    </Deposit>
                    <p>{depositosTotais},00</p>
                </section>
               
                <section>
                    <Withdraw>
                        <h2>Sacado</h2>
                        <span><FaArrowAltCircleDown/></span>
                    </Withdraw>
                    <p>{saquesTotais},00</p>
                </section>


            </Infos>

            <Buttons>
                <button onClick={handleOpenModalDeposit}>Depositar</button>
                <Link to="/extrato">Extrato</Link>
                <button onClick={handleOpenModalWithdraw}>Sacar</button>
            </Buttons>

            <ModalComponent
            openModal={openModalWithdraw}
            closeModal={handleCloseModalWithdraw}
            submit={handleSubmitwithdraw}
            change={changeValue}
            type={true}
            >Sacar
            </ModalComponent>

            <ModalComponent
            openModal={openModalDeposit}
            closeModal={handleCloseModalDeposit}
            submit={handleSubmitdeposit}
            change={changeValue}
            type={false}
            >Depositar
            </ModalComponent>
        </Container>
    )
}