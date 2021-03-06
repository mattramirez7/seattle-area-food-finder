import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {NavLink} from 'react-router-dom';

export function NavBar({user, resetSearchData, resetData}) {

    const handleClick = (() => {
        resetSearchData(resetData);
    })

    return (
        <nav>
            <ul>
                <NavLink exact to="/login">Sign In</NavLink>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/list">List</NavLink>
                <NavLink to="/map">Map</NavLink>
                <NavLink to="/search" onClick={handleClick}>Search</NavLink>
            </ul>
            <AccountCircleIcon className='accIcon' aria-label="Account Icon"/>
        </nav>
    )
}