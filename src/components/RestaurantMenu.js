import { useParams } from "react-router-dom";
import useResturantMenu from '../utils/hooks/useResturantMenu'


const RestaurantMenu = () => {
 

  const { resId } = useParams();
  const restaurant = useResturantMenu(resId)


  // useEffect(() => {
  //   // Fetch ALL restaurant menu data
  //   fetch('/api/menu')
  //     .then(response => response.json())
  //     .then(data => {
  //       // Find the restaurant by ID
  //       const found = data.find(r => r.id === resId);
  //       setRestaurant(found);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setRestaurant(null);
  //       setLoading(false);
  //     });
  // }, [resId]);




  return (
    <div className="menu">
      <h2>{restaurant.restaurantName}</h2>
       <h2>Menu</h2>
      <ul>
        {restaurant.menu.map(item => (
          <li key={item.itemId}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
