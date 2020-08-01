import styled from 'styled-components';

export interface ContainerProps extends React.ComponentPropsWithoutRef<'section'> {}

const Section = styled.section`
  height: 100%;
  width: 100%;
  max-width: 114rem;
  padding: 4rem;
`;

export const S = { Section };
