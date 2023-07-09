 import { LOGO_URL } from "../utils/contants"; 
  
  const Header = () => {
    return (
   <div className="header">
    <div className="Logo-container">
      <img className="logo" src={LOGO_URL}/>
    </div>
     <div className="Nav-bar">
       <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
         
       </ul>
     </div>
   </div>
   );
  };

  export default Header;