import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer'
import { ChakraProvider } from '@chakra-ui/react';


ReactDOM.render(
  <ChakraProvider>
    <Navbar />
    <App />
    <Footer/>
  </ChakraProvider>,
  document.getElementById('root')
);

