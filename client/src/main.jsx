import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from './reducer/index.js'
import persistConfig from "./config/persistConfig.js"
// import persistReducer from 'redux-persist/es/persistReducer'
import { PersistGate } from 'redux-persist/integration/react'
import {persistReducer,persistStore} from "redux-persist"

const persistedReducer= persistReducer(persistConfig,rootReducer)

// const store = configureStore({
//   reducer:rootReducer
// })
const store = configureStore({
  reducer:persistedReducer
});
const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <BrowserRouter>
    <PersistGate  loading={null} persistor={persistor}>
    <App />
    <Toaster></Toaster>
    </PersistGate>
    </BrowserRouter>
    </Provider>
    
 
)
