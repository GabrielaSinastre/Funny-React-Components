import styled, { keyframes } from "styled-components";

const animate1 = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const animate2 = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`;

const animate3 = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

const animate4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: row;
  background: #050801;
  gap: 32px;
`;

export const NeonLink = styled.a`
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  margin: 40px 0;
  color: #03E9F4;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

  &:hover {
    background: #03E9F4;
    color: #050801;
    box-shadow: 0 0 5px #03E9F4, 0 0 25px #03E9F4, 0 0 50px #03E9F4, 0 0 200px #03E9F4;
  }

  &:nth-child(1) {
    filter: hue-rotate(290deg);
  }

  &:nth-child(2) {
    filter: hue-rotate(110deg);
  }
`;

export const Span = styled.span`
  position: absolute;
  display: block;

  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03E9F4);
    animation: ${animate1} 1s linear infinite;
  }

  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03E9F4);
    animation: ${animate2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03E9F4);
    animation: ${animate3} 1s linear infinite;
    animation-delay: 0.5s;
  }

  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03E9F4);
    animation: ${animate4} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;