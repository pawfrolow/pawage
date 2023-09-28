import { createGlobalStyle } from "styled-components";

export const theme = {
  // https://coolors.co/ffb347-f03a47-af5b5b-2e2836-623cea
  colors: {
    primary: "#AF5B5B",
    accent: "#F03A47",
    dark: "#333",
    white: '#eee',
    background: "#FFB347",
    blackTransparent: 'rgba(0,0,0,0.1)',
    blackTransparentFocus: 'rgba(0,0,0,0.2)'
  }
};

export const GlobalStyles = createGlobalStyle`
  body {
    background:${({ theme }) => theme.colors.background} ;
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Montserrat', sans-serif;
    font-size:  1rem;
  }
`;
