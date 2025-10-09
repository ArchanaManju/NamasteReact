import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";

const Body = () => {
    // We are learning how to update the list of restaurants on button click
    // we will filter the resturants which are having rating > 4
    // const topRatedResturants = resObj.filter((restaurant) => restaurant.info.avgRating > 4);
    // console.log(topRatedResturants);
    // this is example list 
    // if we use let we can reassign but when printing it will not reflect or updat eth changes in ui 
    // to reflect the changes in ui we need to use state variable
//     let ListOfResturants = [{info: {
//         id: "303248",
//         name: "Theobroma",
//         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/2d56f814-bab2-4110-ab76-af0f682045d1_303248.JPG",
//         cuisines: ["Desserts", "Bakery", "Beverages"],
//         avgRating: 4.6,
    
// }},{ info:{
//         id: "303948",
//         name: "KFC",
//         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/2d56f814-bab2-4110-ab76-af0f682045d1_303248.JPG",
//         cuisines: ["Desserts", "Bakery", "Beverages"],
//         avgRating: 3.6,
// }},
// { info:{
//         id: "303908",
//         name: "KFC",
//         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/2d56f814-bab2-4110-ab76-af0f682045d1_303248.JPG",
//         cuisines: ["Desserts", "Bakery", "Beverages"],
//         avgRating: 4.0,
// }}]

const [ListOfResturants, setListOfResturants] = useState(resObj);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = ListOfResturants.filter(
                            (restaurant) => restaurant.info.avgRating > 4
                        );
                        setListOfResturants(filteredList);
                        console.log(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="search">
                <input type="text" className="search-box" placeholder="Search for restaurants" />
                <button className="search-btn">Search</button>
            </div>

            <div className="restaurant-list" style={{ display: "flex", flexWrap: "wrap" }}>
                {ListOfResturants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resdata={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;