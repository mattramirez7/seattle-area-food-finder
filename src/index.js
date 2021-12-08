import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import RESTAURANT_DATA from './data/restaurants.json';
import { BrowserRouter } from 'react-router-dom';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSooW-yszuIBetsIwp-0R0IaYRLNjdR1Q",
  authDomain: "seattle-area-food-finder.firebaseapp.com",
  projectId: "seattle-area-food-finder",
  storageBucket: "seattle-area-food-finder.appspot.com",
  messagingSenderId: "399284180777",
  appId: "1:399284180777:web:1a7e93b1ef7e84c2a88938",
  measurementId: "G-J94KN07996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.render(<BrowserRouter><App restaurantData={RESTAURANT_DATA}/></BrowserRouter>, document.getElementById('root'));


