import React from 'react'
import styled from 'styled-components';
import FooterSection from '../../components/Footer';
import AvaliacoesSection from '../../Sections/avaliacoes';
import BeneficiosSection from '../../Sections/Beneficios';
import HeroSection from "../../Sections/Hero/index"
//import SobreSection from "../../Sections/Sobre"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Home = () => {
  return (
    <Container>
        <HeroSection/>
        <BeneficiosSection/>
        <AvaliacoesSection/>
        <FooterSection/>
    </Container>
  )
}

export default Home 
