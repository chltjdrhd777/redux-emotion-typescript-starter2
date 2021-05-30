import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';
import GlobalStyle from 'styles/global';
import { firebaseInit } from 'server/firebase';
import { store } from 'redux/store';
import { Provider as ReduxProvider } from 'react-redux';
console.log(firebaseInit);

render(
  //<React.StrictMode>
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </ReduxProvider>,

  document.getElementById('root')
);
