import RestaurantCard from "./RestaurantCard";
import resList from "../utils/Harddata";
import {useState} from "react";


const Body = () => {
    const [listOfRestaurants,setlistOfRestaurants] =  useState(resList);
    return (
   <div className="body">
 <div className="filter"> 
  <button className="filter-btn"
   onClick = {()=>{
      const filteredlist = listOfRestaurants.filter( 
   (res)=>res.data.avgRating>4.1
    );
    setlistOfRestaurants(filteredlist);
   }
} >
   Top rated restaurant</button>
 </div>

  <div className="res-container">
   {listOfRestaurants.map((restaurant) =>
    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
   )
   }
  </div>
 </div>
    );
 };
  export default Body;