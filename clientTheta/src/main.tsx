import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ThetaTestnet } from '@thirdweb-dev/chains'

import { StateContextProvider } from './context';
import App from './App';
import './index.css';
const VITE_TEMPLATE_CLIENT_ID = import.meta.env.VITE_TEMPLATE_CLIENT_ID;


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <ThirdwebProvider activeChain={ThetaTestnet} clientId={VITE_TEMPLATE_CLIENT_ID}> 
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider> 
  );
} else {
  console.error("Root element not found");
}