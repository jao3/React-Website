import React from 'react'
import styled from 'styled-components';
import img from "../../assets/bg-hero.svg"

const HomeSection = styled.section`
  display: flex;
  align-items: center;
  width: 100vw;
  position: relative;
  height: 45vw;
  flex-wrap: wrap;
  padding: 2rem 5%;
  

  @media only Screen and (max-width: 48em) {
    height: auto;
    padding: 1rem;
    
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;
const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  @media only Screen and (max-width: 48em) {
    text-align: center;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 0;
    width: 100vw;
  }
`;
const Lb = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  line-height: 1.5;
  position: relative;

  @media only screen and (max-width: 48em){
    width: 80%;
    text-align: center;
    //justify-content: space-around;
    align-items: center;
    //margin-top: calc(2.5rem + 2.5vw);
    filter:drop-shadow(2px 4px 6px black);
  }
`;
const Title = styled.h1`
  color: var(--ancoras);
  font-size: calc(1.7rem + 1vw);
  padding: 0.5rem 0;
  line-height: 1.2;
`;
const SubText = styled.p`
  color: var(--ancoras);
  font-size: calc(0.3rem + 1vw);
  margin-top: 2rem;
`;
const Button = styled.button`
    font-weight: 600;
    margin-top: 2rem;
    padding: 0.5rem 4rem;
    border-radius: 40px;
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.2s;
    background: var(--primary);
    color: var(--ancoras);
    &:hover{
        transform: scale(1.1);
        background: var(--ancoras);
        color: var(--primary);
    }
    &:focus{
        transform: scale(0.9);
    }
`;
const RightImg = styled.img`
  max-width: 100%;
  width: calc(20% + 20vw);
  height: auto;
  @media only Screen and (max-width: 48em){
    width: calc(30% + 20vw);
  }
  
`;


const HeroSection = () => {
  return (
    <HomeSection id="home">
      <MainContent>
        <Lb id="leftBlock">
          <Title>Planilhas & Dashboards para facilitar sua vida nos processos de gestão.</Title>
          <SubText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam atque voluptatibus nihil eligendi, minus quis eaque?</SubText>
          <Button>clique-me</Button>
        </Lb>
        <RightImg src={img} width="500" height="500"/>
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection