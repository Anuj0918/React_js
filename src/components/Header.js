 import { LOGO_URL } from "../utils/contants"; 
 import { useEffect, useState } from "react";
 import {Link} from "react-router-dom";
  const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    console.log("Header rendered");
     
  // No depenedency array useEffect is called every time
  // if dependency array is empty then useEffect is called only intial rendered and only once
  //if dependency array is not empty then useEffect is called on that dependency only;
  useEffect(() => {
    console.log("useeffect is called");
  }, []);

    return (
   <div className="header">
    <div className="Logo-container">
      <img className="logo" src={LOGO_URL}/>
    </div>
     <div className="Nav-bar">
       <ul>
        <li>
        <Link to= "/"> Home</Link>
        </li>
        <li>
          <Link to= "/about"> About us</Link></li>
        <li>
          <Link to="/contact"> Contact Us</Link></li>
        <li>Cart</li>
        <button className="login-out-btn"
                    onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}
                >{btnName}</button>
       </ul>
     </div>
   </div>
   );
  };

  export default Header;