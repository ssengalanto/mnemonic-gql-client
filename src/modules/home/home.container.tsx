import React from 'react';

import { Section } from 'shared/layouts';

import { Greetings } from './components';

export const HomeContainer: React.FC = () => (
  <Section>
    <Greetings count={12} />
  </Section>
);
