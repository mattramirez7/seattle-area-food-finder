import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import RESTAURANT_DATA from './data/restaurants.json';



ReactDOM.render(<App restaurantData={RESTAURANT_DATA}/>, document.getElementById('root'));


