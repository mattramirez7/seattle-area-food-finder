import React from 'react';

export function Recommended() {

    return (
        <section className="recommended">
                <h2>Recommended For You</h2>
                <div className="recommendations">
                    <div>
                        <img src="img/foodrec1.jpg" alt="Matt's Noodle House"/>
                        <p>Matt's Noodle House</p>
                    </div>
                    <div>
                        <img src="img/foodrec2.jpg" alt="Cole's Dynamite Bistro"/>
                        <p>Cole's Dynamite Bistro</p>
                    </div>
                    <div>
                        <img src="img/foodrec3.jpg" alt="Jeff's Breakfast Eatery"/>
                        <p>Jeff's Breakfast Eatery</p>
                    </div>
                </div>
            </section>
    )
}