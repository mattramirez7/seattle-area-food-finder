import React from 'react';


export function RestaurantPage(props) {
    let restaurantObjElems = props.restaurantObj.map((restaurantObj) => {
        return (
            <div key={restaurantObj.Address} className="restList">
                <h2>{restaurantObj.Name}   {restaurantObj.Star} Stars</h2>
                {/* Lists out the categories */}
                <p>Category: {restaurantObj.Category.map((category)=>{
                     return(category+", ");
                })}</p>
                <p>Address: {restaurantObj.Address}</p>
            </div>
        )
    })

    return (
        <div className="my-3">
            {restaurantObjElems}
        </div>
    )
}