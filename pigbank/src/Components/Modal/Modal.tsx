import { FormEvent, useContext, useState } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa'
import Modal from 'react-modal'
import { takeDeposit, takeWithdraw } from '../../Transactions/Transactions';
import { GlobalContext } from '../UserContex/UserContex';
import { Fechar, Formulario } from './style';

interface TypeProps {
    openModal: boolean;
    closeModal: () => void;
    children: string;
    type: string;
}

export function ModalComponent(props : TypeProps) {

    const dados = useContext(GlobalContext);
    const [valor, setValor] = useState(0);

    function changeValue(value : number) {
        setValor(value)
    }

    function handleSubmit(event : FormEvent) {
        event.preventDefault();
    
        props.closeModal();
        window.location.reload();
    
    
        const id = dados.length + 1;
        const tipo = props.type;
    
        const data = {
            id,
            valor,
            tipo,
        };

        if (props.type === "Depósito") {
            takeDeposit(data);
        } else {
            takeWithdraw(data);
        }

    }

    return (
        <>
        <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
                <Formulario type={props.type} onSubmit={handleSubmit}>

                <Fechar onClick={props.closeModal}>
                    <FaRegTimesCircle/>
                </Fechar>
                
                    <label htmlFor='valor'>Digite o valor que você quer depositar</label>
                    <input onChange={event => changeValue(+event.target.value)}type="number" id="valor"/>
                    <button type="submit">{props.children}</button>
                </Formulario>
        </Modal>
        </>
    )
}