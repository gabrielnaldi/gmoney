import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --white: #FFF;
        --red: #E62E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33CC95;
        --text-tile: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --shape: #FFFFFF;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media(max-width: 768px){
            font-size: 87.5%;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

`;
