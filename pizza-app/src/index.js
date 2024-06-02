import './styles/reset.css';
import './styles/styles.css';
import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state/store'


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)