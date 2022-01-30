import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import TempUnitProvider from "./context/TempUnitProvider.js";
import WindUnitProvider from "./context/WindUnitProvider.js";
import LoginProvider from "./context/LoginProvider";


ReactDOM.render(
    <React.StrictMode>
        <LoginProvider>
            <WindUnitProvider>
                <TempUnitProvider>
                    <App />
                </TempUnitProvider>
            </WindUnitProvider>
        </LoginProvider>
    </React.StrictMode>,
  document.getElementById('root')
);