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

import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";



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