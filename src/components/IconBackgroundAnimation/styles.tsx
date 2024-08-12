import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

const rotate1 = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const rotate2 = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
`;

const rotate3 = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const rotate4 = keyframes`
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #111;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const RowContainer = styled.div`
  position: relative;
  top: -64%;
  width: 100%;
  display: flex;
  padding: 10px 0;
  white-space: nowrap;
  font-size: 64px;
  transform: rotate(-30deg);

  & > div {
    animation: ${rotate1} 80s linear infinite;
    animation-delay: -80s;
  }

  & > div:nth-child(2) {
    animation: ${rotate2} 80s linear infinite;
    animation-delay: -40s;
  }

  &:nth-child(even) > div {
    animation: ${rotate3} 80s linear infinite;
    animation-delay: -80s;
  }

  &:nth-child(even) > div:nth-child(2) {
    animation: ${rotate4} 80s linear infinite;
    animation-delay: -40s;
  }
`;

export const IconGroup = styled.div`
  display: flex;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: rgba(0, 0, 0, 0.5);
  transition: color 1s, filter 1s;
  padding: 0 5px;
  user-select: none;
  cursor: default;

  &:hover {
    color: #0f0;
    filter: drop-shadow(0 0 10px #0F0);
    transition: color 0s, filter 0s;
  }
`;