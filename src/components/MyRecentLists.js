import React from 'react';

export function MyRecentLists(props) {
    
    
    let createdRecentList = props.recents.map((listName) =>{
        return <div className='listName'>{listName}</div>  
    });

    return (
        <section className="recents">
            <h2> My Recent Lists</h2>
                <div className="userListsDiv">
                    {createdRecentList}
                    <div className="listName">+ Create List</div>
                </div>
        </section>
    )
}