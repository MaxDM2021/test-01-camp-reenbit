import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { App } from 'components/App';

import { theme } from './components/servises/theme';
import { ThemeProvider } from 'styled-components';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-01-camp-reenbit">
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// basename="/test-01-camp-reenbit"