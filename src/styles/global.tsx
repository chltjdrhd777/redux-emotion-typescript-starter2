import React from 'react';
import { Global, css } from '@emotion/react';
import { colors } from 'styles/theme';

const globalCSS = css`
  #root {
    height: 100vh;
    background-color: ${colors.black};
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;
