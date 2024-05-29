import './styles/reset.css';
import './styles/styles.css';
import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <App />
)