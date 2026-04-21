import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    transform: perspective(1000px) rotateX(0deg);
  }
  100% {
    transform: perspective(1000px) rotateX(359deg);
  }
`;

export const Container = styled.div`
  margin: 0;
  padding: 0;
  background: #607d8b;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Box = styled.div`
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 100px);
  width: 200px;
  height: 300px;

  transform: perspective(1000px) rotateY(-45deg);
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    bottom: -100px;
    left: 0;
    width: 100%;
    height: 50px;
    background: #000;
    filter: blur(40px);
    opacity: 0.5;
    transform: rotateX(90deg);
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d; 
    animation: ${animate} 5s linear infinite;
  }

  div span {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #f1f1f1, #bbb, #f1f1f1);
    border-radius: 20px;
    
  }

  div span:nth-child(1) {
    transform: rotateX(0deg);
    background-color: red;
  }
  
  div span:nth-child(2) {
    transform: rotateX(45deg);
    background-color: black;
  }

  div span:nth-child(3) {
    transform: rotateX(-45deg);
    background-color: #578d35;
  }

  div span:nth-child(4) {
    transform: rotateX(90deg);
    background-color: blue;
  }

`;