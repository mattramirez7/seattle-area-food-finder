import React from 'react';
import { useState } from 'react';



export function ListView({listNames, setIsCreatingList, isCreatingList, addNewList, currentList, setCurrentList, getRestaurantObj}){

    const[queryText, setQueryText] = useState('');

    const handleClick = () => {
        setIsCreatingList(true);
    }

    const handleChange = (event) => {
        setQueryText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewList(queryText);
        setQueryText('')
    }

    const listNameClick = (event) =>{
        setCurrentList(event.target.textContent);
    }

    const handleCancel = (() => {
        setIsCreatingList(false);
    })


    const FAVORITES_EXAMPLE = [
        {Name:"Din Tai Fung",Star:"4",Category:['Taiwanese', 'Dim Sum', 'Shanghainese'],Address:"700 Bellevue Way NE, Ste 280, Bellevue, WA 98004"},
        {Name:"MOD Pizza","Star":"4",Category:['Pizza', 'Fast Food'],Address:"417 Ramsay Way, Kent, WA 98032"},
        {Name:"IHOP","Star":"3.5",Category:['Breakfast & Brunch', 'American (Traditional)', 'Burgers'],Address:"178 SW Campus Dr, Federal Way, WA 98023"}
    ]
    let createdUsersLists = listNames.map((listName, index) =>{
        if(listName === currentList) {
            return <div key={index + listName} onClick={listNameClick} className='listName listNameClicked '>{listName}</div>
        }
        return <div onClick={listNameClick} key={index + listName}  className='listName'>{listName}</div>  
    });
    // creates a lists of restutrants with a form to leave a comment
    let restaurantInCurrentList = FAVORITES_EXAMPLE.map((restaurantObj) =>{
        return(
        <div key={restaurantObj.Name} className="restList">
            <h2>{restaurantObj.Name}</h2>
            {/* Lists out the categories */}
            <p>Category: {restaurantObj.Category.map((category, index)=>{
                if (index+1 === restaurantObj.Category.length) {
                    return(category)
                }
                return(category+", ");
            })}</p>
            <p>Address: {restaurantObj.Address}</p>
            <div className="input-group">
                <button className="btn btn-light btn-outline-secondary" type="submit">Submit</button>
                <input type="text" className="form-control" placeholder="Leave a comment" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </div>
        </div>  );
    });

    return(
    <section className="userLists">
        <div className="text-end">
            {isCreatingList && <button className="cancel btn btn-sm" onClick={handleCancel}> cancel </button>}
        </div>
        <h1>My Lists</h1>
            <div className="userListsDivHorizontal">
                {createdUsersLists}
                {isCreatingList && <div className="listName">
                                        <form className="form-inline d-flex flex-row" onSubmit={handleSubmit} >
                                            <div className="form-group mb-2">
                                                <input type="text" className="form-control" placeholder="Enter a list name"
                                                    value={queryText} onChange={handleChange}/>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Create!</button>
                                        </form>
                                    </div>}
                {!isCreatingList && <div className="listName" onClick={handleClick}>+ Create List</div> }
            </div> 
        {restaurantInCurrentList}
    </section>

    
    );
}