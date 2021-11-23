import React from 'react';

import {NavBar} from './NavBar';
import { MyRecentLists } from './MyRecentLists';
import {Recommended} from './Recommended';
import {Map} from './Map';

function App(props) {

    return (
        <div >
            <NavBar />
            <header>
                <div>
                    <h1>Seattle Area Food Finder</h1>
                </div>
            </header>

            <main>
                <div className='container'>
                    <MyRecentLists />
                    <Recommended />
                </div>
                <Map />
            </main>
            
            <footer>
                <a href="">About </a>
                <a href=""> Contact Us</a>
                <p>© Seattle Food Finder 2021</p>
            </footer>
        </div>
    )
}

export default App;