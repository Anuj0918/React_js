import { CDN_URL } from "../utils/contants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const { cloudinaryImageId, name, cuisines, costForTwoString, avgRating, deliveryTime} = resData?.data
  return ( 
   <div className="res-card">
      <img className="res-logo"
   src={ CDN_URL+ cloudinaryImageId}/>
      <h3>{name}</h3>
           <p>{cuisines.join(", ")}</p>
           <h5>{costForTwoString}</h5>
           <h5>{avgRating} stars</h5>
           <h5>{deliveryTime} minutes</h5>
   </div>
  );
 };
  export default RestaurantCard;