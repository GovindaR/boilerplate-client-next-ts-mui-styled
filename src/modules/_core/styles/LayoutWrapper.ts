import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';

  main {
    background-color: ${(props) => props.theme.palette.background.default};
  }
`;
