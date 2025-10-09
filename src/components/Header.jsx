import { AppLogo_url } from "../utils/constant.js";
import { useState } from "react";
 
 export const Header = () => {
    const [btnName, setBtnName] = useState("Login"); //for login button toggle
    return (
        <div className="header">   
            <div className="logo-container">    
                <img className="logo" alt="logo" src={AppLogo_url}/>
                </div>
            <div className="nav-items">    
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={()=>{btnName==="Login"? setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;