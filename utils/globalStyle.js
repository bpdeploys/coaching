import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`

${fonts
  .map((font) => {
    return `
      @font-face {
        font-family: 'FuturaBk';
        src: url("/vendors/fonts/${font.otf}") format('opentype');
        font-weight: ${font.weight};
      }`;
  })
  .join(' ')}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body {
  font-family: "FuturaBk";
  font-weight: 400;
}

::selection {
  background-color: #132a66b2;
  color: #fff;
}

html {
  font-size: 62.5%;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyle;
