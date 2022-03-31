import styled from "styled-components";

interface TypeProps {
    type:boolean;
}

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    padding: 6rem 4rem;
    gap: 4rem;
    text-align: center;

    @media (max-width:500px) {
        padding:4rem 2rem;
    }

    label {
        font-size:2rem;
        font-weight: bold;
    }

    input {
        font-size:2rem;
        border-radius: 1rem;
        outline: none;
        border: none;
        background-color:#e6e6e6;
        padding:1rem;

    }
    
    button {
        color: ${(props : TypeProps) => (props.type ? 'red' : '#48a36d')};
        border: none;
        background-color: ${(props : TypeProps) => (props.type ? '#ffd9cc' : '#dcefe4')};
        padding: 1rem 2rem;
        border-radius: 1rem;
        font-weight: bold;
        font-size: 2rem;
        text-transform:uppercase;
        cursor: pointer;
    }
`

export const Fechar = styled.button`
    position: absolute;
    top: .5rem;
    right: -0.5rem;
    background-color: transparent !important;
`