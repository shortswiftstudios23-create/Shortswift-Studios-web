import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './site/App.jsx';
import './styles/fonts.css';

// Note: no <StrictMode> on purpose. Page scene scripts (src/pages/*/*.run.js) build DOM
// imperatively once per mount; StrictMode's dev-only double mount would run them twice.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
