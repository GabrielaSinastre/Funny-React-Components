import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #5d3800;
`;

export const Face = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #ffcd00;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 180px;
    width: 150px;
    height: 70px;
    background: #b57700;
    border-bottom-left-radius: 70px;
    border-bottom-right-radius: 70px;
    transition: 0.5s;
  }

  &:hover::before {
    top: 210px;
    height: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const Eyes = styled.div`
  position: relative;
  top: -40px;
  display: flex;
`;

export const Eye = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background: #fff;
  margin: 0 15px;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: #000;
    border-radius: 50%;
  }
`;