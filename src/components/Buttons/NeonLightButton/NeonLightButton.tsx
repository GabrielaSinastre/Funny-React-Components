import React from 'react';
import { NeonLink, Section, Span } from './styles';

const NeonButton = ({ text }: { text: string }) => (
  <NeonLink href="https://react.dev" target='_blank'>
    <Span />
    <Span />
    <Span />
    <Span />
    {text}
  </NeonLink>
);

export const NeonLightButton = () => {
  const buttons = ['Green Button', 'Pink Button', 'Blue Button'];

  return (
    <Section>
      {buttons.map((text, index) => (
        <NeonButton key={index} text={text} />
      ))}
    </Section>
  );
};
