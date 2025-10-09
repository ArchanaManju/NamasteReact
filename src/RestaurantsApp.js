/* Pllaning to implement RestaurantsApp.js
    1. Header   
        - Logo
        - Nav Items (Right side)
        - Cart
    2. Body
        - Search Bar
        - Restaurant List
            - Restaurant Card (many cards)
    3. Footer
        -copyrights
        -links
        -address
        -contact    
*/

import React from "react";
import ReactDOM from "react-dom/client";

const RestLogoStyle = {
    height: "80px",
    width: "150px",
    borderRadius: "25px"
};

const Header = () => {
    return (
        <div className="header">   
            <div className="logo-container">    
                <img className="logo" alt="logo" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147704672/images/1adf4-eba4-a33c-774a-0c8b431df6f4_Food-Ordering-App-iOS-System-Design.png"/>
                </div>
            <div className="nav-items">    
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
    console.log(props);
  const    {resName,cusine, rating} = props
    return (
        <div className="restaurant-card">   
            <img className="restaurant-logo" style={RestLogoStyle} alt="restaurant-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBW9iVnNAxGS0YuZ1UWsqcAX_glIMiqcdGBbrX5Viw9d2FL9jayR8-k2w&s"/>
            <h3>{resName}</h3>
            <h4>{cusine}</h4>     
            <h4>{rating}</h4>
        </div>
    );
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" className="search-box" placeholder="Search for restaurants"/>
                <button className="search-btn">Search</button>
            </div>
        
            <div className="restaurant-list" style={{display: "flex", flexWrap: "wrap"}}>
                <RestaurantCard resName="pho" cusine="vietnemese" rating="4.9" />
                <RestaurantCard  resName="wagama" cusine="japanese" rating="4.5"/>
                <RestaurantCard  resName="pho1" cusine="chinese" rating="4.8"/>
                <RestaurantCard  resName="pho2" cusine="vietnemese" rating="3.5"/>
                <RestaurantCard  resName="pho3" cusine="chinese" rating="4.7"/>
                <RestaurantCard  resName="pho4" cusine="vietnemese" rating="3.5"/>
                <RestaurantCard  resName="pho5" cusine="indian" rating="4.5"/>
                <RestaurantCard  resName="pho6" cusine="chinese" rating="4.3"/>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">   
            <Header />
            <Body />
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);