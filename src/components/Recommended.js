import React from 'react';


export function Recommended() {
    const Categories = ["Bars", "Beer Bar", "Breweries", "Cocktail Bars", "Sports Bars", "Pubs", "Gastropubs", "Wine Bars", "Brewpubs", "Beer, Wine & Spirits", "Wine Tasting Room", "Lounges", "Karaoke",
    "Chinese", "Cantonese", "Taiwanese", "Hong Kong Style Cafe", "Asian Fusion", "Szechuan", "Shanghainese", "Dim Sum", "Korean", "Japanese", "Izakaya", "Ramen", "Japanese Curry", "Thai", "Laotian", "Vietnamese", "Mongolian", "Teppanyaki", "Malaysian", "Hot Pot", "Cambodian", "Filipino", "Poke",
    "American (New)", "American (Traditional)", "Diners", "Southern", "Breakfast & Brunch", "Comfort Food", "Hawaiian", "Hot Dogs", "Fast Food", "Soul Food", 
    "Sushi Bars", "Conveyor Belt Sushi", "Seafood",
    "Latin American", "Mexican", "Tacos", "Spanish", "Salvadoran", "Venezuelan", "Tapas/Small Plates", "Brazilian", "Caribbean", "Cuban", "Colombian", "Tapas Bars", "Tex-Mex", "Peruvian",
    "Middle Eastern", "Egyptian", "Turkish", "Ethiopian", "Pakistani", "Afghan", "Halal", "Mediterranean",
    "Russian", "Scandinavian",
    "Modern European", "Italian", "French",
    "Cafes", "Coffee & Tea", "Gift Shops",
    "Steakhouses", "Barbeque", "Meat Shops",
    "Vegetarian", "Vegan",
    "International Grocery", "Grocery",
    "Ice Cream & Frozen Yogurt", "Gelato",
    "Soup", "Chicken Shop", "Cheese Shops",
    "Desserts",
    "Bakeries",
    "Pizza",
    "Burgers",
    "African",
    "Food Trucks",
    "Chicken Wings",
    "Indian",
    "Noodles",
    "Creperies",
    "Cajun/Creole",
    "Greek",
    "Buffets",
    "Australian",
    "Juice Bars & Smoothies",
    "Golf",
    "Lebanese",
    "Food Delivery Services",
    "Sandwiches",
    "Fish & Chips"]
    
const EXAMPLE_FAV_USER_DATA = [
    {Name:"Vivi Pizzeria",Category:["Pizza", "Italian", "Gluten-Free"]},
    {Name:"CIRCLE CHINESE CUISINE",Star:"4.5","Category":["Chinese"]},
    {Name:"Cafe Bahar",Category:["Indian"]},
    {Name:"Cafe Noir",Category:["Cafes", "Desserts", "Shaved Ice"]},
    {Name:"Good Burger",Category:["Burgers", "Fast Food", "American (Traditional)"]}    
]
function chooseThreeRandom (){
    let threeRandom = []
    for(let i = 1; i < 4 || i == EXAMPLE_FAV_USER_DATA.lenngth; i++){
        let random = Math.floor(Math.random()*EXAMPLE_FAV_USER_DATA.length);
        do{
            random = Math.floor(Math.random()*EXAMPLE_FAV_USER_DATA.length)
        }while(threeRandom.includes(random));
        threeRandom.push(random);
    }
    return(threeRandom)
}

//give back a picture name based on categoty
function assignCategory(category){
    if(Categories.findIndex(category) < 15){
        return("Bars.jpg")
    }
    else if(Categories.findIndex(category)< 38){
        return("Asian.jpg")
    }
    else if(Categories.findIndex(category)< 48){
        return("American.jpg")
    }
    else if(Categories.findIndex(category)< 51){
        return("Sushi.jpg")
    }
    else if(Categories.findIndex(category)< 66){
        return("LatinAmerican.jpg")
    }
    else if(Categories.findIndex(category)< 74){
        return("MiddleEastern.jpg")
    }
    else if(Categories.findIndex(category)< 76){
        return("Russian.jpg")
    }
    else if(Categories.findIndex(category)< 79){
        return("European.jpg")
    }
    else if(Categories.findIndex(category)< 82){
        return("Cafe.jpg")
    }
    else if(Categories.findIndex(category)< 85){
        return("Meat.jpg")
    }
    else if(Categories.findIndex(category)< 87){
        return("Vegan.jpg")
    }
    else if(Categories.findIndex(category)< 89){
        return("Grocery.jpg")
    }
    else if(Categories.findIndex(category)< 91){
        return("IceCream.jpg")
    }
    else if(Categories.findIndex(category)< 94){
        return("Soup.jpg")
    }
    else if(Categories.findIndex(category) <95){
        return("Desserts.jpg")
    }
    else if(Categories.findIndex(category) <96){
        return("Bakeries.jpg")
    }
    else if(Categories.findIndex(category) <97){
        return("Pizza.jpg")
    }
    else if(Categories.findIndex(category) <98){
        return("Burgers.jpg")
    }
    else if(Categories.findIndex(category) <99){
        return("Africa.jpg")
    }
    else if(Categories.findIndex(category) <100){
        return("Foodtruck.jpg")
    }
    else if(Categories.findIndex(category) <101){
        return("ChickenWings.jpg")
    }
    else if(Categories.findIndex(category) <102){
        return("Indian.jpg")
    }
    else if(Categories.findIndex(category) <103){
        return("Noodles.jpg")
    }
    else if(Categories.findIndex(category) <104){
        return("Crepes.jpg")
    }
    else if(Categories.findIndex(category) <105){
        return("Cajin.jpg")
    }
    else if(Categories.findIndex(category) <106){
        return("Greek.jpg")
    }
    else if(Categories.findIndex(category) <107){
        return("Buffet.jpg")
    }
    else if(Categories.findIndex(category) <108){
        return("Australian.jpg")
    }
    else if(Categories.findIndex(category) <109){
        return("Smoothie.jpg")
    }
    else if(Categories.findIndex(category) <110){
        return("Golf.jpg")
    }
    else if(Categories.findIndex(category) <111){
        return("Lebanese.jpg")
    }
    else if(Categories.findIndex(category) <112){
        return("FoodDelivery.jpg")
    }
    else if(Categories.findIndex(category) <113){
        return("Sandwhichs.jpg")
    }
    else if(Categories.findIndex(category) <114){
        return("Fish&Chips.jpg")
    }
    
}



function createReccomended(){
       let Recommnendations = chooseThreeRandom.map((number) =>{
        return(<div>
           <img src={assignCategory(EXAMPLE_FAV_USER_DATA[number].Category[0])} alt={"Picture related to" +EXAMPLE_FAV_USER_DATA[number].Name}/>
           <p>{EXAMPLE_FAV_USER_DATA[number].Name}</p>
            </div>
            );
        });
      
   return(Recommnendations); 
}    


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