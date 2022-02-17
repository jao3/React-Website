import React, { useState } from 'react'
import styled from 'styled-components';

const Headers = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    position: relative;
    z-index: 500;
    background: var(--navbar);
    @media only Screen and (max-width: 64em) {
        padding: 0.5rem 3rem;
    }
    @media only Screen and (max-width: 40em) {
        padding: 0.5rem 1.5rem;
    }
`;
const Logo = styled.a `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: auto;
    cursor: pointer;
    font-weight: 600;
    a{
        color: var(--ancoras);
    }
`;
const Nav = styled.nav`
    width: 25rem;
    max-width: 40rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        display: none;
    }
    

    a{
        font-weight: 600;
        line-height: 1.5;
        color: var(--ancoras);
        &::after{
            content: "";
            height: 3px;
            display: block;
            width: 3px;
            background: transparent;
            transition: width 0.5s;
        }
        &:not(:last-child):hover::after{
                width: 100%;
                background: var(--primary);
            }
    }
`;
const Button = styled.button`
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 20px;
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
const HamburguerBtn = styled.button`
    position: relative;
    background-color: transparent;
    width: 2rem;
    height: 2px;
    cursor: pointer;
    display: none;

    @media only screen and (max-width: 768px) {
        display: inline-block;
    }

    &::before, &::after{
        content: "";
        background-color: var(--ancoras);
        width: 2rem;
        height: 2px;
        display: inline-block;
        position: absolute;
        left: 0;
        cursor: pointer;
        transition: all 0.3s;
    }
    &::before{
        top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
        transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }
    &::after{
        top: ${(props) => (props.clicked ? "0" : "0.5rem")};
        transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    } 
`;
const MobileMenu = styled.div`
    display: none;
    @media only screen and (max-width: 48rem){
        display: flex
    }
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    opacity: ${props => (props.clicked ? "1" : 0)};
    visibility: ${props => props.clicked ? "visible" : "hidden"};
    transition: all 0.5s;
    z-index: -10;

    background:rgba(34, 40, 49, 0.8);
    border-radius: 20px;
    margin: 0.5rem;
    overflow-x: hidden;

    a{
        font-weight: 600;
        font-size: 1.5rem;
        margin: 1.5rem;
        cursor: pointer;
        color: var(--ancoras);
    }
`;

const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
    
  return (
    <Headers>
        <Logo>
            <a href='/'>Logo</a>
        </Logo>
        <Nav>
            <a href="/">Home</a>
            <a href="/">Sobre</a>
            <a href="/">Depoimentos</a>
            <a href="/">
                <Button>Contato</Button>
            </a>
        </Nav>
        <HamburguerBtn onClick={() => handleClick()} clicked={click}>
            <span></span>
        </HamburguerBtn>
        <MobileMenu clicked={click}>
            <a href="/"  onClick={() => handleClick()} clicked={click}>Home</a>
            <a href="/" onClick={() => handleClick()} clicked={click}>Sobre</a>
            <a href="/" onClick={() => handleClick()} clicked={click}>Depoimentos</a>
            <a href="/" onClick={() => handleClick()} clicked={click}>
                <Button>Contato</Button>
            </a>
        </MobileMenu>
    </Headers>
  )
}

export default Header