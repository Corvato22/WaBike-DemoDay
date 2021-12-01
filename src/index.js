import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { ChakraProvider } from '@chakra-ui/react'
import './styles/GlobalStyle.css';

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

