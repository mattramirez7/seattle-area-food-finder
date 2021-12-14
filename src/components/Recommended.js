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
    {Name:"CIRCLE CHINESE CUISINE",Category:["Chinese"]},
    {Name:"Cafe Bahar",Category:["Indian"]},
    {Name:"Cafe Noir",Category:["Cafes", "Desserts", "Shaved Ice"]},
    {Name:"Good Burger",Category:["Burgers", "Fast Food", "American (Traditional)"]}    
]

let threeRandom = [];
for(let i = 1; i < 4 || i == EXAMPLE_FAV_USER_DATA.lenngth; i++){
    let random = Math.floor(Math.random()*EXAMPLE_FAV_USER_DATA.length);
    do{
        random = Math.floor(Math.random()*EXAMPLE_FAV_USER_DATA.length)
    }while(threeRandom.includes(random));
    threeRandom.push(random);
}
 


//give back a picture name based on categoty
function assignCategory(category){
    if(Categories.indexOf(category) < 13){
        return("Bars.jpg")
    }
    else if(Categories.indexOf(category)< 36){
        return("Asian.jpg")
    }
    else if(Categories.indexOf(category)< 46){
        return("American.jpg")
    }
    else if(Categories.indexOf(category)< 49){
        return("Sushi.jpg")
    }
    else if(Categories.indexOf(category)< 63){
        return("LatinAmerican.jpg")
    }
    else if(Categories.indexOf(category)< 71){
        return("MiddleEastern.jpg")
    }
    else if(Categories.indexOf(category)< 73){
        return("Russian.jpg")
    }
    else if(Categories.indexOf(category)< 76){
        return("European.jpg")
    }
    else if(Categories.indexOf(category)< 79){
        return("Cafe.jpg")
    }
    else if(Categories.indexOf(category)< 82){
        return("Meat.jpg")
    }
    else if(Categories.indexOf(category)< 84){
        return("Vegan.jpg")
    }
    else if(Categories.indexOf(category)< 86){
        return("Grocery.jpg")
    }
    else if(Categories.indexOf(category)< 88){
        return("IceCream.jpg")
    }
    else if(Categories.indexOf(category)< 91){
        return("Soup.jpg")
    }
    else if(Categories.indexOf(category) <92){
        return("Desserts.jpg")
    }
    else if(Categories.indexOf(category) <93){
        return("Bakeries.jpg")
    }
    else if(Categories.indexOf(category) <94){
        return("Pizza.jpg")
    }
    else if(Categories.indexOf(category) <95){
        return("Burgers.jpg")
    }
    else if(Categories.indexOf(category) <96){
        return("African.jpg")
    }
    else if(Categories.indexOf(category) <97){
        return("Foodtruck.jpg")
    }
    else if(Categories.indexOf(category) <98){
        return("ChickenWings.jpg")
    }
    else if(Categories.indexOf(category) <99){
        return("Indian.jpg")
    }
    else if(Categories.indexOf(category) <100){
        return("Noodles.jpg")
    }
    else if(Categories.indexOf(category) <101){
        return("Crepes.jpg")
    }
    else if(Categories.indexOf(category) <102){
        return("Cajin.jpg")
    }
    else if(Categories.indexOf(category) <103){
        return("Greek.jpg")
    }
    else if(Categories.indexOf(category) <104){
        return("Buffet.jpg")
    }
    else if(Categories.indexOf(category) <105){
        return("Australian.jpg")
    }
    else if(Categories.indexOf(category) <106){
        return("Smoothie.jpg")
    }
    else if(Categories.indexOf(category) <107){
        return("Golf.jpg")
    }
    else if(Categories.indexOf(category) <108){
        return("Lebanese.jpg")
    }
    else if(Categories.indexOf(category) <109){
        return("FoodDelivery.jpg")
    }
    else if(Categories.indexOf(category) <110){
        return("Sandwiches.jpg")
    }
    else if(Categories.indexOf(category) <111){
        return("Fish&Chips.jpg")
    }
    
}




let Recommendations = threeRandom.map((number) =>{
return(<div key={number}>
        <img src={"img/"+assignCategory(EXAMPLE_FAV_USER_DATA[number].Category[0])} alt={"Picture related to" +EXAMPLE_FAV_USER_DATA[number].Name}/>
        <p>{EXAMPLE_FAV_USER_DATA[number].Name}</p>
    </div>
    );
});

   


    return (
        <section className="recommended">
                <h2>Recommended For You</h2>
                <div className="recommendations">
                    {Recommendations}
                </div>
            </section>
    )
}