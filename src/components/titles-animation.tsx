'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function TitlesAnimation() {
  return (
    <TypeAnimation
      sequence={[
        'Consultor de soluções digitais',
        'Desenvolvedor de software',
        'Criador do Geracom Educacional',
      ].flatMap((title: string) => [title, 1000])}
      wrapper='span'
      speed={50}
      style={{ fontSize: '1rem' }}
      repeat={Infinity}
    />
  );
}
