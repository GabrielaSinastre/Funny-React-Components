import styled from "styled-components";

export const GlobalStyle = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #E80202;
`;

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H2 = styled.h2`
  color: #FFF;
  text-align: center;
  font-size: 12vw;
  line-height: 1em;    
  z-index: 1000;
  font-weight: 900;
`; 

export const Span = styled.span`
  font-size: 0.2em;
  letter-spacing: 0.4em;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Block = styled.div`
  position: absolute;
  width: 50px;
  height: 100px;
  background: #E80202;
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.2);
`;