import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    'sidenav header'
    'sidenav main'
    'sidenav footer';
  height: 100vh;
  main {
    grid-area: main;
    background-color: #8fd4d9;
  }
`;
