import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @font-face {
    font-family: 'RobotoBold';
    src: url('/fonts/Roboto-Black.woff2') format('woff2');
    font-display: fallback;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background: #f8f8f8;
    width: 100%;
    height: 100%;
  }

  section {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-family: RobotoBold, sans-serif;
    font-size: 4rem;
  }

  h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-family: RobotoBold, sans-serif;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  button {
    margin: 0;
    padding: 0;
  }

`;

export default Global;
