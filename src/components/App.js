import React from 'react';
import {NavBar} from './NavBar';
import { MyRecentLists } from './MyRecentLists';
import {Recommended} from './Recommended';
import {Map} from './Map';
import { ListView } from './ListView';


function App(props) {

    const RECENT_EXAMPLE = ['Favorites', 'Want to try', 'Great burger places', 'Teriyaki places'];

    return (
        <div >
            <NavBar />
            <header>
               <div>
                    <h1>Seattle Area Food Finder</h1>
                </div>
            </header>

            <main>
                <div className='containerMain'>
                    <MyRecentLists recents ={RECENT_EXAMPLE}/>
                    <Recommended />
                </div>
                <Map />

                {/* <ListView /> */}
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