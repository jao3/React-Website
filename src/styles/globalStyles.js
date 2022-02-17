import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `

    :root{
        --background: #F6F58C;
        --primary: #00ADB5;
        --secondary: #393E46;
        --ancoras: #EEEEEE;
        --navbar: #222831;
    }


    *,*::before, *::after{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'poppins', sans-serif;
    }
    html{
        font-size: 62,5%;
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-track{
            background: transparent;
        }
        &::-webkit-scrollbar-thumb{
            background: var(--primary);
        }
    }

    @media only screen and (max-width: 991px){
        html{
            font-size: 55%;
        }
    }

    @media only screen and (max-width: 450px){
        html{
            font-size: 50%;
        }
    }


    body, html, a{
        font-family: 'poppins', sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
        border: 0;
        overflow-x: hidden;
        background: var(--secondary);
    }
    h1,h2,h3,h4,h5,h6{
        margin:0;
        padding:0;
    }
    a{
        text-decoration:none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }
    *:focus {
        
        height:auto;
    }
    
`;