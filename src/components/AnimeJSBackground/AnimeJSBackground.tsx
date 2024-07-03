import React, { useEffect, useRef, useState } from 'react';
import { Block, Container, GlobalStyle, H2, Span } from './styles';
import anime from 'animejs';

export const AnimeJSBackground: React.FC = () => {
  const [blocks, setBlocks] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setBlocks(Array.from({ length: 100 }, (_, i) => i));
    animateBlocks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateBlocks = () => {
    anime({
      targets: '.block',
      translateX: () => anime.random(-700, 700),
      translateY: () => anime.random(-500, 500),
      scale: () => anime.random(1, 5),
      easing: 'linear',
      duration: 3000,
      delay: anime.stagger(10),
      complete: animateBlocks,
    });
  };

  return (
    <GlobalStyle>
      <Container ref={containerRef}>
        <H2>
          <Span>My first video on</Span>
          <br />
          AnimeJS
        </H2>
        {blocks.map((_, index) => (
          <Block key={index} className="block" />
        ))}
      </Container>
    </GlobalStyle>
  );
};