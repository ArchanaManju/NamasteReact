import { useEffect, useState }  from "react"

const useResturantMenu =(resId)=>{
  const [restaurant, setRestaurant] = useState([]);
console.log({resId})
    // fetch data 
    useEffect(()=>{
            fetch('/api/menu')
      .then(response => response.json())
      .then(data => {
        // Find the restaurant by ID
        const found = data.find(r => r.id === resId);
        setRestaurant(found);
      
      })
      .catch(() => {
        setRestaurant(null);
      
      });
    },[])
console.log("here",restaurant)
 
    return restaurant

}

export default useResturantMenu