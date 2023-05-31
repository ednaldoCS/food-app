
import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

import {SnackProvider} from './contexts/SnackContext'

import {CartProvider} from './contexts/CartContext'
 

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51M3nfhJt26NDgDxU1y4dQHAo0BQK8ryQdVbgHS7qY0k6D7KHHevemBNOy5f8vgzXLIjM6iQnFzOWV9gKXtsXopFT00UwuIoFRB')
  

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider> 
          <CartProvider>
              <AppRoutes />  
            <ToastContainer autoClose={2000}/>
            <GlobalStyle />
            <Normalize />
          </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
