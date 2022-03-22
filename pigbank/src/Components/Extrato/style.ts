import styled from 'styled-components';

export const Container = styled.main`
    max-width: 1400px;
    margin: 0 auto;
`

export const Table = styled.table`
    width: 100%;
    padding: 5rem;
    border-spacing: 0 0.5rem;

    @media (max-width:500px) {
        padding:0rem;
    }
    
    th {
        text-align: left;
        padding: 1rem 2rem;
    }

    td {
        padding: 1rem 2rem;
        border: 0;
        background-color: #f2f2f2;
    }

    tfoot {
        font-weight: bold;
    }
`

export const Buttons = styled.section`
    padding: 5rem 5rem 5rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width:400px) {
        padding: 6rem 2rem;
    }

    a {
        text-decoration: none;
        text-align: center;
        color: #4d4d4d;
        width: 100%;
        max-width: 1200px;
        background-color: white;
        padding: 1.5rem;
        border: none;
        box-shadow: 1px 0px 10px 2px #b3b3b3;
        border-radius: 1rem;
        font-size: 1.8rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        transition: .3s;
        position: relative;

        span {
            position: absolute;
            left: 20px;
            font-size: 2.5rem;
            top: 50%;
            transform: translateY(-45%);
        }

    }

`

interface TrProps {
    tipo:boolean;
}
