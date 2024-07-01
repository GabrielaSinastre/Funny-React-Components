import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0%, 100% {
    transform: translateZ(-100px);
  }
  50% {
    transform: translateZ(100px);
  }
`;


export const GlobalStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #9c27b0;
`;

export const Loader = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(60deg);

  > span {
    position: absolute;
    display: block;
    border: 5px solid #fff;
    box-shadow: inset 0 5px 0 #ccc;
    box-sizing: border-box;
    border-radius: 50%;
    animation: ${animate} 3s ease-in-out infinite;
  }

  > span:nth-child(1) {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    animation-delay: 1.4s;
  }

  > span:nth-child(2) {
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    animation-delay: 1.3s;
  }

  > span:nth-child(3) {
    top: 20px;
    left: 20px;
    bottom: 20px;
    right: 20px;
    animation-delay: 1.2s;
  }

  > span:nth-child(4) {
    top: 30px;
    left: 30px;
    bottom: 30px;
    right: 30px;
    animation-delay: 1.1s;
  }

  > span:nth-child(5) {
    top: 40px;
    left: 40px;
    bottom: 40px;
    right: 40px;
    animation-delay: 1s;
  }

  > span:nth-child(6) {
    top: 50px;
    left: 50px;
    bottom: 50px;
    right: 50px;
    animation-delay: 0.9s;
  }

  > span:nth-child(7) {
    top: 60px;
    left: 60px;
    bottom: 60px;
    right: 60px;
    animation-delay: 0.8s;
  }

  > span:nth-child(8) {
    top: 70px;
    left: 70px;
    bottom: 70px;
    right: 70px;
    animation-delay: 0.7s;
  }

  > span:nth-child(9) {
    top: 80px;
    left: 80px;
    bottom: 80px;
    right: 80px;
    animation-delay: 0.6s;
  }

  > span:nth-child(10) {
    top: 90px;
    left: 90px;
    bottom: 90px;
    right: 90px;
    animation-delay: 0.5s;
  }

  > span:nth-child(11) {
    top: 100px;
    left: 100px;
    bottom: 100px;
    right: 100px;
    animation-delay: 0.4s;
  }

  > span:nth-child(12) {
    top: 110px;
    left: 110px;
    bottom: 110px;
    right: 110px;
    animation-delay: 0.3s;
  }

  > span:nth-child(13) {
    top: 120px;
    left: 120px;
    bottom: 120px;
    right: 120px;
    animation-delay: 0.2s;
  }

  > span:nth-child(14) {
    top: 130px;
    left: 130px;
    bottom: 130px;
    right: 130px;
    animation-delay: 0.1s;
  }

  > span:nth-child(15) {
    top: 140px;
    left: 140px;
    bottom: 140px;
    right: 140px;
    animation-delay: 0s;
  }
`;