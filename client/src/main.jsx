import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from './reducer/index.js'

const store = configureStore({
  reducer:rootReducer
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    <Toaster></Toaster>
    </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
)
