import styled from 'styled-components';

import { Row as SharedRow } from 'shared/components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`;

const Row = styled(SharedRow)`
  width: 100%;
  max-width: 114rem;
  padding: 1.5rem 2rem;
`;

export const S = { Header, Row };