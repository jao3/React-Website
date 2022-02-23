import React from 'react'
import styled from 'styled-components'
import img from "../../assets/dash-claro.png"
import { MdAttachMoney, MdAccessTimeFilled, MdQueryStats, MdPerson } from "react-icons/md";


const Beneficios = styled.section`
    padding: 2rem 5%;
    @media only screen and (max-width: 1250px) {
        padding: 2rem 1rem;
    }
`;
const Titulo = styled.h1`
    font-size: 2.5rem;
    color: var(--titulo);
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
        border-bottom: 2px solid var(--btn-icon);
    }
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5rem;
    padding: 2rem 0;
    @media only Screen and (max-width: 1250px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:0rem;
    }
`;
const BoxContent = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 18rem);

    @media only Screen and (max-width: 1250px){
        grid-template-columns: repeat(2, 25rem);
    }
    @media only Screen and (max-width: 1250px){
        grid-template-columns: repeat(auto-fit,(2, 40rem));
    }
    @media only Screen and (max-width: 768px){
        margin-top: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        text-align: center;
    }
`;
const Box = styled.div`
    padding: 2rem;
    i{
        color:var(--btn-icon);
        font-size: 2.5rem;
        font-weight: bold;
    }
    h3{
        color: var(--titulo);
        font-size: 1.4rem;
    }
    p{
        font-size: 1rem;
        color: var(--texto)
    }



`;
const RightImg= styled.img`
    padding: 2rem 0;
    width: 40%;
    height: auto;
    @media only Screen and (max-width: 1250px){
        width: 70%;
        height: auto;
        padding: 1rem;
    }
`;

const BeneficiosSection = () => {
  return (
    <Beneficios>
        <Titulo>Áreas de atuação</Titulo>
        <Content>
        
        <BoxContent>
            <Box>
                <i><MdAccessTimeFilled/></i>
                <h3>Cadastro Simples</h3>
                <p>Gerencie todos seus clientes em uma ferramenta integrada. Gere documentos, atestados, planilhas, relate a evolução, administre pagamentos, etc.</p>
            </Box>
            <Box>
                <i><MdAttachMoney/></i>
                <h3>Cadastro Simples</h3>
                <p>Gerencie todos seus clientes em uma ferramenta integrada. Gere documentos, atestados, planilhas, relate a evolução, administre pagamentos, etc.</p>
            </Box>
            <Box>
                <i><MdQueryStats/></i>
                <h3>Cadastro Simples</h3>
                <p>Gerencie todos seus clientes em uma ferramenta integrada. Gere documentos, atestados, planilhas, relate a evolução, administre pagamentos, etc.</p>
            </Box>
            <Box>
                <i><MdPerson/></i>
                <h3>Cadastro Simples</h3>
                <p>Gerencie todos seus clientes em uma ferramenta integrada. Gere documentos, atestados, planilhas, relate a evolução, administre pagamentos, etc.</p>
            </Box>
        </BoxContent>
        <RightImg src={img} width="auto" height="auto"/>
        </Content>
    </Beneficios>
  )
}

export default BeneficiosSection