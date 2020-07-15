import styled from 'styled-components';

export interface WrapperProps extends React.ComponentPropsWithoutRef<'div'> {}

const Wrapper = styled.div`
  height: auto;
  min-height: 100vh;
`;

export const S = { Wrapper };
