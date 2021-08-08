import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalReset = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    
  }
  body {
    line-height: 1.5;
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    color: '#1a202c';
    letter-spacing: 0;
    background-color: '#f7fafc';
  }
  button {
    border: 0;
    background: none;
  }
`;

export default GlobalReset;