import styled from 'styled-components'

export const CalculatorStyles = styled.div `
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');;
    background-color: #0a1128;
    max-width: 100%;
    min-height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    grid-template-rows: minmax(100px 250px) 1fr;
    grid-template-columns: 1fr;
    @media (max-width: 500px) {
        max-width: 90%;
        padding: 5%;
    }
    .display {
        margin: 0 !important;
        width: 100%;
         @media(max-width: 500px) {
             width: 100%;
             max-height: 200px;
         }
    }
    h1 {
        font-weight: 700;
        font-size: 3.5rem;
        text-transform: uppercase;
        color: white;
        text-align: center;
        @media (max-width: 500px) {
           font-size: 2.5rem;
        }
    }
    .numpad {
        display: grid;
        grid-gap: 1px;
        grid-template-columns: repeat(4, 1fr);
        padding: 0px;
        width: 450px;
        margin: 0 auto;
        @media (max-width: 500px) {
            width: 90%;
            margin: 0 auto;
        }
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
        transition: 0.2s;
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

export const DisplayStyles = styled.div `
    display: grid;
    grid-template-rows: 50px 75px;
    grid-template-columns: 1fr;
    border: none;
    max-width: 450px;
    margin: 10px auto;
    align-items: center;
    @media (max-width: 500px) {
        width: 95%;
        grid-template-rows: 25px 50px;
    }
    p, h2 {
        text-align: right;
        color: white;
    }
    p {
        font-size: 1.5rem;
        @media(max-width: 500px) {
            font-size: 0.8rem;
        }
    }
    h2 {
        font-size: 5rem;
        margin: 0;
        @media(max-width: 500px) {
            font-size: 3rem;
            padding: 10px;
        }
    }

`