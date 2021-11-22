import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export function NavBar(props) {

    return (
        <nav>
            <ul>
                <a>Home</a>
                <a>List</a>
                <a>Map</a>
                <a>Search</a>
                <AccountCircleIcon className='accIcon'/>
            </ul>
        </nav>
    )
}