import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
    
    <App />
    </PersistGate>
    </Provider>,
    </BrowserRouter>,
    
  document.getElementById('root')
);
