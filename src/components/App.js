import React from 'react';

import {NavBar} from './NavBar';
import { MyRecentLists } from './MyRecentLists';
import {Recommended} from './Recommended';
import {Map} from './Map';

function App() {

    return (
        <div >
            <header>
                <div className="titleOfPage">
                    <p>Seattle Food Finder</p>
                </div>
            </header>

            <main>
                <NavBar />
                <div className='container'>
                    <MyRecentLists />
                    <Recommended />
                </div>
                <Map />
            </main>
            
            <footer>
                <p>About</p>
                <p>Contact Us</p>
                <p>© Seattle Food Finder 2021</p>
            </footer>
        </div>
    )
}

export default App;