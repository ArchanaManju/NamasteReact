import { useEffect, useState }  from "react"

const useResturantMenu =(resId)=>{
  const [restaurant, setRestaurant] = useState([]);

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
 
    return restaurant

}

export default useResturantMenu