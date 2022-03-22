import { Buttons, Container, Deposit, Fechar, Formulario, Formulario1, Infos, Withdraw } from "./style";
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaEyeSlash, FaEye, FaRegTimesCircle } from 'react-icons/fa'
import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal'

export function Dashboard() {

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
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => setDados(data))
    }, [])

    console.log(dados);

    

    const [showElement, setShowElement] = useState(true);

    const [openModal, setOpenModal] = useState(false);
    const [openModal1, setOpenModal1] = useState(false);

    function handleOpenModal() {
        setOpenModal(true);
        setTipo('Saque');
    }
    function handleOpenModal1() {
        setOpenModal1(true);
        setTipo('Depósito')
    }

    function handleCloseModal() {
        setOpenModal(false);
    }
    function handleCloseModal1() {
        setOpenModal1(false);
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

        handleCloseModal1();
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

        handleCloseModal();
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


    const [valor, setValor] = useState(0);
    const [tipo, setTipo] = useState('');

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
                <button onClick={handleOpenModal1}>Depositar</button>
                <Link to="/extrato">Extrato</Link>
                <button onClick={handleOpenModal}>Sacar</button>
            </Buttons>

            <Modal isOpen={openModal1} onRequestClose={handleCloseModal1} overlayClassName="react-modal-overlay"
            className="react-modal-content" >
                <Formulario1 onSubmit={handleSubmitdeposit}>
                <Fechar onClick={handleCloseModal1}><FaRegTimesCircle/></Fechar>
                    <label htmlFor='valor'>Digite o valor que você quer depositar</label>
                    <input onChange={event => setValor(+event.target.value)}type="number" id="valor"/>
                    <button type="submit">Depositar</button>
                </Formulario1>
            </Modal>

            <Modal isOpen={openModal} onRequestClose={handleCloseModal} overlayClassName="react-modal-overlay"
            className="react-modal-content" >
                <Formulario onSubmit={handleSubmitwithdraw}>
                    <Fechar onClick={handleCloseModal} ><FaRegTimesCircle/></Fechar>
                    <label htmlFor='valor'>Digite o valor que você quer sacar</label>
                    <input onChange={event => setValor(+event.target.value)} type="number" id="valor"/>
                    <button type="submit">Sacar</button>
                </Formulario>
            </Modal>
        </Container>
    )
}