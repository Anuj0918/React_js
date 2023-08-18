import { CDN_URL } from "../utils/contants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const { cloudinaryImageId, name, cuisines, costForTwoString, avgRating, deliveryTime} = resData?.data
  return ( 
   <div className=" m-4 p-4 w-[260px] rounded-lg  hover:bg-orange-400">
      <img className="res-logo"
   src={ CDN_URL+ cloudinaryImageId}/>
      <h3 className="font-bold py-1 text-lg">{name}</h3>
           <p>{cuisines.join(", ")}</p>
           <h5>{costForTwoString}</h5>
           <h5>{avgRating} stars</h5>
           <h5>{deliveryTime} minutes</h5>
   </div>
  );
 };
  export default RestaurantCard;