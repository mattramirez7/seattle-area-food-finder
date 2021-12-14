import React from  'react'
import { Link } from 'react-router-dom';


export function SearchList({ searchData, getRestaurantObj, listObj, setListObj, currentList, setCurrentList}) {
    
    const handleClick = (event) => {
        getRestaurantObj(event.target.text)
    }

    const handleAdd = (event) => {
        listObj[currentList].push(event.target.value);
        setListObj(listObj);
        console.log(listObj);
    }

    let createdUsersLists = Object.keys(listObj).map((listName, index) =>{
        return <div key={index + listName}  className='listName'>{listName}</div>  
    });

    const elems = searchData.map((restaurantObj) => {
        
        return(
            <div key={restaurantObj.Address} className="searchList">
                <div className="text-end">
                    <button className="add btn btn-sm" onClick={handleAdd} value={restaurantObj.Name}> Add to selected list </button>
                </div>
                <div className="restList" >
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
            </div>
        )
    })

    return (
        <div className="">
            <div className="userListsDivHorizontal">
                {createdUsersLists}
            </div> 
            {elems}
        </div>
    )
    
}