import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92% {
    color: #0E3742;
    box-shadow: none;
  }
  18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100% {
    color: #FFF;
    text-shadow: 0 0 10px #03BCF4,
                 0 0 20px #03BCF4,
                 0 0 40px #03BCF4,
                 0 0 80px #03BCF4,
                 0 0 160px #03BCF4;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #07252B;
  font-family: 'Poppins', sans-serif;
`;

export const Title = styled.h2`
  position: relative;
  font-size: 6em;
  letter-spacing: 15px;
  color: #0E3742;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  line-height: 0.70em;
  outline: none;
  animation: ${animate} 5s linear infinite;
`;