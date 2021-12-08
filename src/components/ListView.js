import React from 'react';



export function ListView(props){
    const LISTS_EXAMPLE = ['Favorites', 'Want to try', 'Great burger places', 'Teriyaki places'];
    
    let createdUsersLists = LISTS_EXAMPLE.map((listName, index) =>{
        return <div key={index + listName}  className='listName'>{listName}</div>  
    });


    const FAVORITES_EXAMPLE = [
        {Name:"Din Tai Fung",Star:"4",Category:['Taiwanese', 'Dim Sum', 'Shanghainese'],Address:"700 Bellevue Way NE, Ste 280, Bellevue, WA 98004"},
        {Name:"MOD Pizza","Star":"4",Category:['Pizza', 'Fast Food'],Address:"417 Ramsay Way, Kent, WA 98032"},
        {Name:"IHOP","Star":"3.5",Category:['Breakfast & Brunch', 'American (Traditional)', 'Burgers'],Address:"178 SW Campus Dr, Federal Way, WA 98023"}
    ]
    // creates a lists of restutrants with a form to leave a comment
    let restaurantInCurrentList = FAVORITES_EXAMPLE.map((restaurantObj) =>{
        return(
        <div key={restaurantObj.Name} className="restList">
            <h2>{restaurantObj.Name}</h2>
            {/* Lists out the categories */}
            <p>Category: {restaurantObj.Category.map((category)=>{
                return(category+" ");
            })}</p>
            <p>Address: {restaurantObj.Address}</p>
            <div className="input-group mb-3">
                <button className="btn btn-light btn-outline-secondary" type="submit" >Submit</button>
                <input type="text" className="form-control" placeholder="Leave a comment" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </div>
        </div>  );
    });

    return(
    <div>
    <section className="userLists">
        <h1>My Recent Lists</h1>
            <div className="userListsDivHorizontal">
                {createdUsersLists}
                <div className="listName">+ Create List</div>
            </div> 
    </section>

    {restaurantInCurrentList}
       
    </div>
    
    );
}