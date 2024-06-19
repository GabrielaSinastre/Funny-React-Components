import React from 'react';
import { Circle, Container, Cup, GlobalStyle, Handle, Plate, Tea, Top, Vapour } from './styles';

export const HotCupOfTea = () => {
  const vapourSpans = [1, 3, 16, 5, 13, 20, 6, 7, 10, 8, 17, 11, 12, 14, 2, 9, 15, 4, 19].map((i) => (
    <span key={i} style={{ '--i': i } as React.CSSProperties}></span>
  ));

  return (  
    <GlobalStyle>
      <Container>
        <Plate />
        <Cup>
          <Top>
            <Vapour>
              {vapourSpans}
            </Vapour>
            <Circle>
              <Tea />
            </Circle>
          </Top>
          <Handle />
        </Cup>
      </Container>
    </GlobalStyle>
  );
};
