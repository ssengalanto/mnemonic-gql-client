import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 23rem;
  min-height: 100vh;
  padding: 2rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  z-index: 100;
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${(props) => props.theme.color.bg.default};
`;

export const S = { Container };
