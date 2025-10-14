import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { resId } = useParams();


  useEffect(() => {
    // Fetch ALL restaurant menu data
    fetch('/api/menu')
      .then(response => response.json())
      .then(data => {
        // Find the restaurant by ID
        const found = data.find(r => r.id === resId);
        setRestaurant(found);
        setLoading(false);
      })
      .catch(() => {
        setRestaurant(null);
        setLoading(false);
      });
  }, [resId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
