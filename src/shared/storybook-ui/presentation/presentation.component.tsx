import React from 'react';

import { Text } from 'shared/components';

import { S } from './presentation.styles';

interface Props {
  title: string;
  description?: string;
}

export const Presentation: React.FC<Props> = ({ title, description }) => (
  <S.Container>
    <S.Title gutterBottom density="semi-bold">
      {title}
    </S.Title>
    {description && <Text>{description}</Text>}
  </S.Container>
);
