import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { ChakraProvider } from '@chakra-ui/react'

import { Provider } from 'react-redux';
import { store } from './store/store';
import './styles/GlobalStyle.css';

ReactDOM.render(
  <ChakraProvider>
    
    <Provider store={store}>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </Provider>
    
  </ChakraProvider>,
  document.getElementById('root')
);

