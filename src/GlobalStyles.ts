import { FONT_MAIN } from "./assetURLs";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Open Sans';
  src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url('${FONT_MAIN}') format('truetype');
  font-weight: 300;
  font-style: normal;
}

* {
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
}

h1 {
  font-size: 1.75em;
}
`;
