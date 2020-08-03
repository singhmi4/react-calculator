import styled from 'styled-components'

export const CalculatorStyles = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    background-color: #0a1128;
    max-width: 100%;
    min-height: 100vh;
    display: grid;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    grid-template-rows: minmax(100px 250px) 1fr;
    grid-template-columns: 1fr;
    /* grid-gap: 1px; */
    .display {
        margin: 0 !important;
        width: 100%;
    }
    .numpad {
        display: grid;
        grid-gap: 1px;
        grid-template-columns: repeat(4, 1fr);
        padding: 0px;
        width: 450px;
        /* height: 300px; */
        margin: 0 auto;
    }
    button.function-button {
        background-color: #034078;
        
    }
    button.aqua-button {
        background-color: #1282a2;
    }
    button {
        width: 100%;
        height: 80px;
        font-size: 2rem;
        border: none;
        color: white;
        background-color: #001f54;
        &:focus {
            outline: none;
        }
        &:hover {
            background-color: #424b54;
        }
    }
    .zero-button {
        grid-column: 1/3;
    }
`

export const DisplayStyles = styled.div`
    display: grid;
    grid-template-rows: 25px 50px;
    grid-template-columns: 1fr;
    border: none;
    max-width: 450px;
    margin: 100px auto;
    align-items: center;
    p, h2 {
        text-align: right;
        color: white;
    }
    p {
        font-size: 0.75rem;
    }
    h2 {
        font-size: 1.5rem;
        margin: 0;
    }

`