import React from 'react';
import styled from 'styled-components';

import { Colors } from '../../src/shared/enums';

export const Wrapper: React.FC = ({ children }) => <StyledDiv>{children}</StyledDiv>;

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 5rem;
  background: ${Colors.WHITE};
`;
