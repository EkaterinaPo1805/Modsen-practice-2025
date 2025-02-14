import { createGlobalStyle } from 'styled-components';
import { theme } from '@constants/theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-weight: normal;
  }`;
