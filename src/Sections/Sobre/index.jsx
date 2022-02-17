import React from 'react'
import styled from 'styled-components'

const AboutSection = styled.section`
  background: var(--primary);
  width: 100%;
  padding: 2rem 0;
`;
const SobreSection = () => {
  return (
    <AboutSection>
      <h1>Sobre</h1>
    </AboutSection>
  )
}

export default SobreSection