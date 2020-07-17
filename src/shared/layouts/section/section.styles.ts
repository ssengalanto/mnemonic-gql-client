import styled from 'styled-components';

export interface ContainerProps extends React.ComponentPropsWithoutRef<'section'> {}

const Section = styled.section`
  width: 100%;
  max-width: 114rem;
  padding: 2rem;
`;

export const S = { Section };
