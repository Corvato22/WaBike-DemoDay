import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

