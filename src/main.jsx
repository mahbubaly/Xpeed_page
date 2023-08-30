import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './Components/Routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <CartProvider>

      <RouterProvider router={router} />



    </CartProvider>




  </React.StrictMode>,
)
