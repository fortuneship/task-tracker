import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
   {/*  <ThemeProvider theme={theme}>
    </ThemeProvider> */}
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);
