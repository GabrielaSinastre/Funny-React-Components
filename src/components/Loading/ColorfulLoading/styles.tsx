import styled, { keyframes } from 'styled-components';

export const hueRotateAnimation = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

export const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  80%, 100% {
    transform: scale(0);
  }
`;

interface SpanProps {
  index: number;
}

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #042104;
  animation: ${hueRotateAnimation} 10s linear infinite;
`;

export const Loader = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const Span = styled.span<SpanProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * ${({ index }) => index}));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #00FF0A;
    box-shadow: 0 0 10px #00FF0A,
                0 0 20px #00FF0A,
                0 0 40px #00FF0A,
                0 0 60px #00FF0A,
                0 0 80px #00FF0A,
                0 0 100px #00FF0A;
    animation: ${scaleAnimation} 2s linear infinite;
    animation-delay: calc(0.1s * ${({ index }) => index});
  }
`;
