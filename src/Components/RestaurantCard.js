
//IMPORT OF NAMED EXPORT(CDN_URL)
import { useContext } from "react";
import {CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard =(props) =>{
    const {resData} = props;
    // console.log(resData);

    const { loggedInUser } = useContext(UserContext);
    
    // DESTRUCTURE------------------------>
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    }=resData?.info;
    // console.log(resData);
    
    
   return (
   <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
       <img
         className="rounded-lg"
         alt="res-logo"
         src={CDN_URL+cloudinaryImageId}/>
       <h3 className="font-bold py-4 text-lg">{name}</h3>
       <h4>{cuisines.join(",")}</h4>
       <h4>{avgRating} stars</h4>
       <h4>{costForTwo}</h4>
       <h4>{sla?.slaString}</h4>
   </div>
   ) 
};


//--------->/HIGHER ORDER COMPONENT--------->

// input - RestaurantCard ==>>  RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) =>{
    return () => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard/>
            </div>
        );
    };
};

export default RestaurantCard;