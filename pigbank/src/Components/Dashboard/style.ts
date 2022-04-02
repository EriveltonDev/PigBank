import styled from 'styled-components';

export const Container = styled.main`
    max-width: 1400px;
    margin: 0 auto;
`

export const Infos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-around;
    margin-top: -5rem;
    padding: 0 2rem;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        box-shadow: 1px 0px 10px 2px #737373;
        background-color: white;
        flex: 1;
        max-width: 400px;
        min-width: 292px;
        padding: 2rem 4rem;
        position: relative;

        div {
            display: flex;
            justify-content: center;

            span {
                font-size: 2rem;
                position: absolute;
                right: 20px;

                a {
                    text-decoration: none;
                    cursor: pointer;
                }

            }
            
        }

        h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 2rem;
            font-weight: bold;
        }
    }
`

export const Deposit = styled.div`
    color: #48a36d;
`

export const Withdraw = styled.div`
    color: red;
`

export const Buttons = styled.section`
    padding: 8rem 5rem 5rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width:400px) {
        padding: 6rem 2rem;
    }

    a, button {
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
    }

    a:hover {
        filter: brightness(0.9);
    }

    button:first-child {
        color: #48a36d;
        background-color: #dcefe4 ;
    }

    button:nth-child(3) {
        color: red;
        background-color: #ffd9cc;
    }

    a, button + a, button {
        margin-top: 2rem;
    }

`

