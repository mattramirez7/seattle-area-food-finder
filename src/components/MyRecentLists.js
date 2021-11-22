import React from 'react';

export function MyRecentLists() {

    return (
        <section className="recents">
            <h1> My Recent Lists</h1>
                <div className="userListsDiv">
                    <div className="listName">Favorites</div>
                    <div className="listName">Want to try</div>
                    <div className="listName">Great burger places</div>
                    <div className="listName">Teriyaki places</div>
                    <div className="listName">+ Create List</div>
                </div>
        </section>
    )
}