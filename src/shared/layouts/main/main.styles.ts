import styled from 'styled-components';

export interface MainProps extends React.ComponentPropsWithoutRef<'main'> {}

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const S = { Main };
