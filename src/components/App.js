import React, { useEffect } from 'react';
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
import { Login } from './Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {getDatabase, ref, set, push, onValue} from 'firebase/database'

function App(props) {
    const db = getDatabase();
    const favExRef = (db, "User1/Lists/Favorites");

    const [listNames, setListNames] = useState({Favorites:[]}); //monitors existing lists
    const [searchData, setSearchData] = useState(props.restaurantData); //manages search data to display
    const [clickedRestaurant, setClickedRestaurant] = useState([{Name:"", Star:"", Category:[], Services:[], Address :""}]); //manages clicked search restaurant
    const [isCreatingList, setIsCreatingList] = useState(false); //manages if user is currently making a list
    const [currentList, setCurrentList] = useState("Favorites");

    
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const auth = getAuth();
        const unregisteredAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
             if (firebaseUser) {
                console.log("logging in", firebaseUser.displayName);
                setCurrentUser(firebaseUser);
        } else {
            console.log("logging out");
            setCurrentUser(null);
        }
        })
        return() => {
            unregisteredAuthListener();
        }
    }, [])
    
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

    function addNewList(listName) {
        listNames[listName] = [];
        setListNames(listNames);
        setIsCreatingList(false);
    }

    const RECENT_EXAMPLE = ['Favorites', 'Want to Try', 'Great Burger Places', 'Teriyaki Places'];

    return (
        <div >
            <NavBar user = {currentUser} resetSearchData={setSearchData} resetData={props.restaurantData}/>
            <header>
               <div>
                    <h1>Seattle Area Food Finder</h1>
                </div>
            </header>

            <main>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/home'>        
                        <div className='containerMain'>
                            <MyRecentLists recents ={Object.keys(listNames)}/>
                            <Recommended />
                        </div>
                    </Route>
                    <Route path='/map'>
                        <Map listNames={Object.keys(listNames)} currentList={currentList} setCurrentList={setCurrentList} getRestaurantObj={getRestaurantObj}/>
                    </Route>
                    <Route path='/list'>
                        {<ListView listNames={Object.keys(listNames)} setIsCreatingList={setIsCreatingList} isCreatingList={isCreatingList} addNewList={addNewList} currentList={currentList} setCurrentList={setCurrentList} getRestaurantObj={getRestaurantObj}/> }
                    </Route>
                    <Route path='/search'>
                        <SearchForm searchCallback={getRestaurantSearchData}/>
                        <SearchList searchData={searchData} getRestaurantObj={getRestaurantObj} listObj={listNames} setListObj={setListNames} currentList={currentList} setCurrentList={setCurrentList}/>
                    </Route>
                    <Route path='/restaurantPage'>
                        <SearchForm searchCallback={getRestaurantSearchData}/>
                        <RestaurantPage restaurantObj={clickedRestaurant}/>
                    </Route>
                    <Redirect to='/home'/>
                </Switch>
            </main>
            
            <footer>
                <a href="">About </a>
                <a href=""> Contact Us</a>
                <p>© Seattle Area Food Finder 2021</p>
            </footer>
        </div>
    )
}

export default App;