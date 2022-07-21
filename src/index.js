import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBE9CbLtuWDBnmQwvekIK2ye1KYZ7ObvTo",
  authDomain: "lumos-bf45d.firebaseapp.com",
  projectId: "lumos-bf45d",
  storageBucket: "lumos-bf45d.appspot.com",
  messagingSenderId: "282690779420",
  appId: "1:282690779420:web:8b2bff97774d208928e2d9",
  measurementId: "G-DTNTBZQ0XP"
};

initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>
);

reportWebVitals();
