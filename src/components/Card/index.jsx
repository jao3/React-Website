import React from 'react'
import styled from 'styled-components'

const CARD = styled.div`
  background: var(--btn-icon);
  color: var(--white);
  height: 20rem;
  width: 20rem;
  margin-top: calc(2rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
`;
const Text = styled.h3`
  padding: 0 calc(1rem + 1vw);
  font-size: calc(0.6rem + 0.5rem);
  text-align: center;
`;
const Image = styled.div`
  width: 30%;
  height: 30%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 85%;
  transform: translate(-50%);
  
`;
const NAME = styled.h2`
  padding-top:1rem;
  font-size: 0.5rem + 1vw;
`;

const Card = ({name, text, image}) => {
    const Avatar = require(`../../assets/${image}.jpg`);
    return (
    <CARD>
      <Image img={Avatar} width="400" height = "400"/>
      <Text>{text}</Text>
      <NAME>{name}</NAME>
    </CARD>
  )
}

export default Card