import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Overlay = styled.div`
  width: inherit;
  height: inherit;
  position: inherit;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const S = { Container, Overlay };
