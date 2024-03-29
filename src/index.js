import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
          light: '#757575',
          main:'#424242',
          dark: '#212121'
      },
      secondary: {
        light: '#fb8c00',
        main: '#ef6c00',
        dark: '#e65100'
      },
      error: {
        light:'#ffee58',
        main:'#ffeb3b',
        dark:'#fdd835'
      }
    },
    status: {
      danger: 'orange',
    },
    typography:{
      fontFamily:[
        'Rubik',
        'Roboto',
        'Open Sans',
        'sans-serif'
      ]
    }
  });
ReactDOM.render(
<MuiThemeProvider theme={theme}>
    <App />
</MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
