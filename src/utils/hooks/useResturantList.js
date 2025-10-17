import { useEffect, useState } from "react"

const useResturantList = () =>{
const [listOfResturants, setListOfResturants] = useState([]);
const [loading, setLoading] = useState(true);
const [filterRes, setfilterRes] = useState([]);

useEffect(()=>{
    fetchData()
}, [])

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" );
    const json = await data.json();
    const apiData= (json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    console.log({apiData})
    setListOfResturants(apiData)
    setfilterRes(apiData)
    setLoading(false)
}

return { listOfResturants, filterRes, loading };
}

export default useResturantList