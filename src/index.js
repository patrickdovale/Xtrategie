import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import storeConfig from './Store';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import './index.css';


const store = storeConfig();

const theme = createTheme({
  palette: {
    primary: {
      main: '#44a292',
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

