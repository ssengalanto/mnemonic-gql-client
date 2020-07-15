import styled from 'styled-components';

import { Row as SharedRow } from 'shared/components';

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

const Row = styled(SharedRow)`
  width: 100%;
  max-width: 114rem;
  padding: 2rem;
`;

export const S = { Header, Row };
