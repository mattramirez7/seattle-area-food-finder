import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export function NavBar(props) {

    return (
        <nav>
            <ul>
                <a href="">Welcome</a>
                <a href="">Home</a>
                <a href="">List</a>
                <a href="">Map</a>
                <a>Search</a>
            </ul>
            <AccountCircleIcon className='accIcon' aria-label="Account Icon"/>
        </nav>
    )
}