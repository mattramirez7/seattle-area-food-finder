import React from 'react';
import {NavBar} from './NavBar';
import { MyRecentLists } from './MyRecentLists';
import {Recommended} from './Recommended';
import {Map} from './Map';
import { ListView } from './ListView';
import { SearchForm } from './SearchForm';
import { SearchList } from './SearchList';
import { RestaurantPage } from './RestaurantPage';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useState } from 'react'
import { Redirect } from 'react-router-dom';

function App(props) {

    const [listNames, setListNames] = useState(['Favorites']); //monitors existing lists
    const [searchData, setSearchData] = useState(props.restaurantData);
    const [clickedRestaurant, setClickedRestaurant] = useState([{Name:"", Star:"", Category:[], Services:[], Address :""}]);

    function getRestaurantSearchData(searchName) {
        let filteredRestaurants = props.restaurantData.filter((restaurantObj) => {
            return (
                restaurantObj.Name.toLowerCase().startsWith(searchName)
            )
        })
        setSearchData(filteredRestaurants);
    }

    function getRestaurantObj(restaurantName) {
        let restaurantObj = props.restaurantData.filter((restaurant) => {
            return (
                restaurant.Name === restaurantName
            )
        })
        setClickedRestaurant(restaurantObj);
    }

    const RECENT_EXAMPLE = ['Favorites', 'Want to try', 'Great burger places', 'Teriyaki places'];

    return (
        <div >
            <NavBar />
            <header>
               <div>
                    <h1>Seattle Area Food Finder</h1>
                </div>
            </header>

            <main>
                <Switch>
                    <Route path='/home'>        
                        <div className='containerMain'>
                            <MyRecentLists recents ={RECENT_EXAMPLE}/>
                            <Recommended />
                        </div>
                    </Route>
                    <Route path='/map'>
                        <Map />
                    </Route>
                    <Route path='/list'>
                        {<ListView listNames={listNames}/> }
                    </Route>
                    <Route path='/search'>
                        <SearchForm searchCallback={getRestaurantSearchData}/>
                        <SearchList searchData={searchData} getRestaurantObj={getRestaurantObj}/>
                    </Route>
                    <Route path='/restaurantPage'>
                        <RestaurantPage restaurantObj={clickedRestaurant}/>
                    </Route>
                    <Redirect to='/home'/>
                </Switch>
            </main>
            
            <footer>
                <a href="">About </a>
                <a href=""> Contact Us</a>
                <p>© Seattle Food Finder 2021</p>
            </footer>
        </div>
    )
}

export default App;