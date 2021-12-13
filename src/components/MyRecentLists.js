import React from 'react';

export function MyRecentLists(props) {
    
    
    let createdRecentList = props.recents.map((listName) =>{
        return <div key={listName} className='listName'>{listName}</div>  
    });

    return (
        <section className="recents">
            <h2> My Lists</h2>
                <div className="userListsDiv">
                    {createdRecentList}
                </div>
        </section>
    )
}