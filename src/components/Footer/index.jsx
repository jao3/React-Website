import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Footer = styled.section`
  padding: 2rem 5%;
  background-color: var(--navbar);
  width: 100%;
`;
const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media only screen and (max-width:1200px){
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`;
const Box = styled.div`
  .link{
    display: block;
    padding: .5rem 0;
    color: var(--btn-icon);
    font-size: 1rem;
    &:hover{
      text-decoration: underline;
    }
  }
`;
const FooterTitle = styled.h3`
  color: var(--btn-icon);
`;
const FooterDesc = styled.p`
  color: var(--texto);
`;
const Share = styled.div`
  margin-top: 1rem;
  a{
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    font-size: 1.7rem;
    color: var(--btn-icon);
    margin-right: 3rem;
    text-align: center;
    &:hover{
      font-size: 1.8rem;
    }
  }
`;
const Creditos = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top:3rem;
  color: var(--btn-icon);
  border-top: 0.2rem solid var(--btn-icon);
`;

export const FooterSection = () => {
  return (
    <Footer>
      <BoxContainer>
        <Box>
          <FooterTitle>Psi Jenifer</FooterTitle>
          <FooterDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. </FooterDesc>
          <Share>
            <a href="/"><FaFacebook/></a>
            <a href="/"><FaInstagram/></a>
            <a href="/"><FaWhatsapp/></a>
          </Share>
        </Box>
        <Box>
          <FooterTitle>Links rapidos</FooterTitle>
          <a href="/" className='link'>Home</a>
          <a href="/" className='link'>Sobre</a>
          <a href="/" className='link'>Depoimentos</a>
        </Box>
        <Box>
          <FooterTitle>Outros Links</FooterTitle>
          <a href="/" className='link'>Ajuda</a>
          <a href="/" className='link'>Termos de uso</a>
        </Box>
      </BoxContainer>
      <Creditos><span>criardo por joaozinho da massa</span></Creditos>
    </Footer>
  )
}

export default FooterSection