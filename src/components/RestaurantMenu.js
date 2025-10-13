import { useEffect, useState } from "react";

const RestaurantMenu = () => {

  // dynamically load the menu of restaurant using the resId from the url
  // how to read a dynamic url params in react
  // useParams is a hook which will return the params object
  // we can extact the resId from the params object
  // const {resId} = useParams();
  // console.log(resId);
useEffect(()=>{
    fetchMenu()
    console.log("API call to fetch menu data");
},[]);
const fetchMenu = async() =>{
  const data = await fetch('http://localhost:5000/api/menu');
    //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966135&lng=77.5920581&restaurantId=696232&catalog_qa=undefined&submitAction=ENTER");
    if(!data.ok){
      console.log("something went wrong");
    }
    const text = await data.text();
    if(!text){
      console.log("No data found");
    }
    try {
      const json = JSON.parse(text);
      console.log("Menu data:", json);
    }
    catch (error) {
      console.log("Error parsing JSON:", error);
    }


}
  return <div className ="Menu">
    <h1>Restaurant Menu Component</h1>
    <h2>Menu</h2>
    <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet coke</li>
    </ul>    
    </div>;
}

export default RestaurantMenu;