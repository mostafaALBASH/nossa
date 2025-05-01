import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ React 18
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container); // ✅ createRoot instead of render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: register for offline support
serviceWorker.unregister();
