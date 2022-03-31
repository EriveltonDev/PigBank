import { FaRegTimesCircle } from 'react-icons/fa'
import Modal from 'react-modal'
import { Fechar, Formulario } from './style';

interface TypeProps {
    openModal: boolean;
    closeModal: any; // colocar tipagem certa depois
    submit: any; // colocar tipagem certa depois
    children: string;
    change:any;
    type: boolean;
}

export function ModalComponent(props : TypeProps) {

    return (
        <>
        <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
                <Formulario type={props.type} onSubmit={props.submit}>

                <Fechar onClick={props.closeModal}>
                    <FaRegTimesCircle/>
                </Fechar>
                
                    <label htmlFor='valor'>Digite o valor que você quer depositar</label>
                    <input onChange={event => props.change(+event.target.value)}type="number" id="valor"/>
                    <button type="submit">{props.children}</button>
                </Formulario>
        </Modal>
        </>
    )
}