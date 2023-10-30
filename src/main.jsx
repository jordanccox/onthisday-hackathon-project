import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { thisDayApi } from './reducers/searchResultsSlice.js';

import App from './App.jsx'
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react/ApiProvider.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <ApiProvider api={thisDayApi}>
      <React.StrictMode>
     <BrowserRouter>
       <App />
      </BrowserRouter>
     </React.StrictMode>
    </ApiProvider>
  </Provider>,
)
