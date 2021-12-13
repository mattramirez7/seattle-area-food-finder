import React from  'react'
import { Link } from 'react-router-dom';


export function SearchList({ searchData, getRestaurantObj }) {
    
    const handleClick = (event) => {
        getRestaurantObj(event.target.text)
    }

    const elems = searchData.map((restaurantObj) => {
        
        return(
            <div key={restaurantObj.Address} className="restList" >
                <Link to="/restaurantPage" onClick={handleClick} >{restaurantObj.Name}</Link>
                {/* Lists out the categories */}
                <p>Category: {restaurantObj.Category.map((category, index)=>{
                    if (index+1 === restaurantObj.Category.length) {
                        return(category)
                    }
                    return(category+", ");
                })}</p>
                <p>Address: {restaurantObj.Address}</p>
            </div>  
        )
    })

    return (
        <div className="">
            {elems}
        </div>
    )
    
}