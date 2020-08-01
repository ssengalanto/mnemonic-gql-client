import styled from 'styled-components';

export interface MainProps extends React.ComponentPropsWithoutRef<'main'> {}

const Main = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const S = { Main };
