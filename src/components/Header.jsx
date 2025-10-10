import { Link } from "react-router-dom";
import { AppLogo_url } from "../utils/constant.js";
import { useState } from "react";
import {Link} from "react-router-dom";
 
 export const Header = () => {
    const [btnName, setBtnName] = useState("Login"); //for login button toggle
    return (
        <div className="header">   
            <div className="logo-container">    
                <img className="logo" alt="logo" src={AppLogo_url}/>
                </div>
            <div className="nav-items">    
                <ul>
                    <li><Link to ='/'>Home</Link></li>
                    {/* dont use <a> anchor tag since it does entier page re load  
                    <li><a href="/about"/>About Us</li>*/}
                    <li><Link to = '/about'>About Us</Link></li>
                    <li><Link to = '/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={()=>{btnName==="Login"? setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;