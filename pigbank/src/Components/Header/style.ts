import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: center;
    background-color: #48a36d;
    padding-bottom: 8rem;

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 6rem;
        color: white;
        padding: 1rem;

        span {
            font-weight: bold;
            font-size: 2rem;
        }
    }
`