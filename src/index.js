import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import TempUnitProvider from "./context/TempUnitProvider.js";
import WindUnitProvider from "./context/WindUnitProvider.js";


ReactDOM.render(
    <React.StrictMode>
        <WindUnitProvider>
            <TempUnitProvider>
                <App />
            </TempUnitProvider>
        </WindUnitProvider>
    </React.StrictMode>,
  document.getElementById('root')
);