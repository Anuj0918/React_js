import RestaurantCard from "./RestaurantCard";
 // import resList from "../utils/Harddata";
import {useState , useEffect} from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom";
  
const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] =  useState([]);
    const [filteredRestaurant, setFilteredRestaurant] =  useState([]);

    const[SearchText,setSearchText ] = useState("");

    useEffect(()=>{
      fetchData();
  },[]);

  const fetchData = async () => {
 const data = await fetch( 
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
   );
      const json = await data.json();

      console.log(json);

      setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };
     // conditional rendering
     
    return listOfRestaurants?.length === 0 ? <Shimmer/> : ( 
   <div className="body">
 <div className="filter"> 
   <div className="Search">
      <input type="text" className="Search-Box" value={SearchText}  
          onChange={(e) =>{
     setSearchText(e.target.value);
          }}
           />
      <button onClick={ () =>{
 const filteredRestaurant = listOfRestaurants.filter((res) => res.data.name.toLowerCase().
 includes(SearchText.toLowerCase()));
  
      setFilteredRestaurant(filteredRestaurant);

      }}      
      >
         Search</button>
   </div>
  <button className="filter-btn"
   onClick = {()=>{
      const filteredRestaurant = listOfRestaurants.filter( 
   (res)=>res.data.avgRating > 4
    );
     setFilteredRestaurant(filteredRestaurant);
   }
} >
   Top rated restaurant 
    </button>
 </div>

  <div className="res-container">
   { filteredRestaurant && filteredRestaurant.map((restaurant) => (  
     <Link 
     key={restaurant.data.id}
     to={"/restaurants/" + restaurant.data.id}>
      <RestaurantCard  resData={restaurant} />
      </Link>
   ))
   }
  </div>
 </div>
    );
 };
  export default Body;



            