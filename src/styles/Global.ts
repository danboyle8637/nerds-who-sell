import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  :root {
    --primary-background: hsl(225, 32%, 20%);
    --secondary-background: hsl(224, 33%, 32%);

    --section-background-1: hsl(224, 33%, 44%);
    --section-background-2: hsl(227, 39%, 62%);
    --section-background-3: hsl(256, 39%, 62%);
    --section-background-4: hsl(256, 29%, 42%);
    --section-background-5: hsl(225, 32%, 16%);

    --accent-1: hsl(246, 59%, 62%);
  
    --base-text-color: hsl(227, 37%, 93%);
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    scrollbar-width: thin;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--primary-background);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
    min-height: 100vh;
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: var(--section-background-5);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: var(--accent-1);
    border-radius: 6px;
    border: none;
  }

  section {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--base-text-color);
  }

  h1 {
    font-size: 5.6rem;
    letter-spacing: 0.1rem;
  }

  p, a, li, label {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    margin: 0;
    padding: 0;
  }

`;

export default Global;
