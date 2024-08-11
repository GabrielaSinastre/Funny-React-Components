import React from 'react';
import { Loader, Section, Span } from './styles';

export const ColorfulLoading = () => {
  const circleSpan = Array.from({ length: 20 }, (_, i) => (
    <Span key={i + 1} index={i + 1} />
  ));

  return (
    <Section>
      <Loader>
        {circleSpan}
      </Loader>
    </Section>
  );
};
