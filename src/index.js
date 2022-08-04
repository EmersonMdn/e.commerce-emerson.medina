import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE9CbLtuWDBnmQwvekIK2ye1KYZ7ObvTo",
  authDomain: "lumos-bf45d.firebaseapp.com",
  projectId: "lumos-bf45d",
  storageBucket: "lumos-bf45d.appspot.com",
  messagingSenderId: "282690779420",
  appId: "1:282690779420:web:7690ce8ef0c196af28e2d9",
  measurementId: "G-GG0CWE1LDY"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>
);

reportWebVitals();
