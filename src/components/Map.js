import React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup}from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const MAP_EXAMPLE_DATA=[
{name:"THIS ONE",adress:"Close", coordiantes:[-122.3, 47.6]},
{name:"THAT ONE",adress:"Nearby", coordiantes:[-123.3, 47.3]}
] 

const mapboxToken = 'pk.eyJ1IjoiY29sZW0xNSIsImEiOiJja3d4OThmamEwYjQ2MnBsYTB2NXQ4eGE0In0.x9yuczRwFieqqkK5IlQ2Mg'

export function Map({listNames}){
    const [viewport, setViewport] = useState({
        longitude: -122.3321,
        latitude: 47.6062,
        zoom: 10,
        width: "100vw",
        height: "90vh"
    }); 

    const[selectedRestaurant, setSelctedRestaurant]= useState(null);

    let createdUsersLists = listNames.map((listName, index) =>{
        return <div key={index + listName}  className='listName'>{listName}</div>  
    });

    //allows user to press escape to close popup
    useEffect(()=>{
        function listener (event){
            if(event.key === "Escape"){
                    setSelctedRestaurant(null)
                }
        }
        window.addEventListener("keydown", listener);

        return() => {
            window.removeEventListener("keydown", listener);
        }
    }, []);

    return(
        <div>
            <h1 className="text-center">My Lists</h1>
            <div className="userListsDivHorizontal">
                {createdUsersLists}
            </div> 
            <ReactMapGL {...viewport} mapboxApiAccessToken={mapboxToken}
            onViewportChange={nextViewport => {
                 setViewport(nextViewport);
            }}
            >
                {MAP_EXAMPLE_DATA.map(function(restaurant){
                    
                    let currName = "";
                    //causes name to appear with greater zoom 
                    if(viewport.zoom>=10){
                        currName = restaurant.name;   
                        
                    if(selectedRestaurant != null && selectedRestaurant.name === restaurant.name){
                        currName="";
                        
                    }}else{
                        currName = "";
                        
                    }
                    return(
                    <Marker key={restaurant.name + restaurant.adress }
                    latitude={restaurant.coordiantes[1]}
                    longitude={restaurant.coordiantes[0]}>
                    <button className='bg-transparent border-0' onClick={(event) => {
                        
                        setSelctedRestaurant(restaurant);
                    }}>
                        <RestaurantIcon color='secondary' ></RestaurantIcon>  
                        {currName}                 
                    </button>   
                    </Marker>
                    )
                    
                })}
                {/* if there is a selectedRestaurant then carry out code to make popup */}
                {selectedRestaurant && 
                    <Popup
                    latitude={selectedRestaurant.coordiantes[1]}
                    longitude={selectedRestaurant.coordiantes[0]}
                    onClose={()=>{
                        setSelctedRestaurant(null);
                    }}
                    >
                      <div className='popupText'>
                          
                          <h2 >{selectedRestaurant.name}</h2>
                          <p> {selectedRestaurant.adress}</p>
                        </div>  
                    </Popup>
                    }
            </ReactMapGL>
        </div>
    );
}