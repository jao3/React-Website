import React from 'react'
import styled from 'styled-components'


const Avaliacoes = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 2rem 5%;
`;
const Titulo = styled.h1`
    font-size: 2.5rem;
    color: var(--ancoras);
    text-align: center;
    position: relative;
    &::before{
        content: "";
        height: 1px;
        width: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0.5rem);
        border-bottom: 2px solid var(--primary);
    }
`;

function AvaliacoesSection() {
    return (
        <Avaliacoes>
            <Titulo>Avaliações</Titulo>
        </Avaliacoes>
    );
}

export default AvaliacoesSection;