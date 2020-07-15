import styled from 'styled-components';

export interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {}

const Container = styled.div`
  width: 100%;
  max-width: 114rem;
  padding: 2rem;
`;

export const S = { Container };
