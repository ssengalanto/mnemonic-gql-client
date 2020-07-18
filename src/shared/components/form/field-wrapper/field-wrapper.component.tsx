import React from 'react';

import { S } from './field-wrapper.styles';

interface Props {
  touched?: boolean;
  error?: string;
  label?: string;
}

export const FieldWrapper: React.FC<Props> = ({ children }) => <S.Wrapper>{children}</S.Wrapper>;
