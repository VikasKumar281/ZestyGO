import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
// import resList from "../utils/mockData"
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const  Body = () => {
  
  //Local State Variable----->Super Powerful Variable
  //  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
 
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [filteredRestaurant , setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("")

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
      fetchData();
  },[]);

  
//Whenever state variables update,react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered",listOfRestaurants);

  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2371958&lng=86.97457020000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    
    // console.log(json);

    //OPTIONAL CHAINING------------------------------------------------------>
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };


  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection;
      </h1>
    );
  };


  const { loggedInUser , setUserName } = useContext(UserContext);

//SPINNING LOADER ----------------------->
  // if(listOfRestaurants.length === 0){
  //   return <h1>Loading...</h1>;
  // };


//SHIMMER UI ----> is called as CONDITIONAL RENDERING --------------------------------------->
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />
  // };
  
  

return(listOfRestaurants.length === 0)?(
    <Shimmer/> 
  ) : (
      <div className="body">
             <div className="filter flex">
                <div className="search m-4 p-4">
                  <input 
                         type="text" 
                         data-testid = "searchInput"
                         className=" border border-solid border-black"
                         value={searchText}
                         onChange={(event) => {
                             setSearchText(event.target.value)
                             }
                          }
                  />
                  <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                   onClick={() => {
                    // Filter the restaurant cards and update the UI
                    //searchText
                    // console.log(searchText);

                   const filteredRestaurant = listOfRestaurants.filter(
                    (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                   );

                   setFilteredRestaurant(filteredRestaurant);
                  }}>

                    Search

                  </button>
                </div>


                <div className="search m-4 p-4 flex items-center">
                  <button 
                className="px-4 py-1 bg-gray-100 rounded-lg" 
                onClick = {() => {
                  //FILTER LOGIC  
                  const filteredList = listOfRestaurants.filter(
                    (restaurant) => restaurant?.info?.avgRating > 4.0 
                  );
                  setFilteredRestaurant(filteredList);
                }}
                  >
                  Top Rated Restaurants
                  </button>
                </div>


                <div className="search m-4 p-4 flex items-center">
                  <label className="px-2">
                    UserName : 
                  </label>
                  <input className="border border-black p-2"
                     value={loggedInUser}
                     onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

             </div>
             <div className="flex flex-wrap">
                {
                filteredRestaurant.map((restaurant) => (
                <Link
                 key={restaurant?.info?.id}
                 to={"/restaurants/" + restaurant?.info?.id}
                >

                    <RestaurantCard resData = {restaurant} />
                  
                  {/*If a Restaurant is promoted then add a promoted label on it.*/}
                  
                  {/* {restaurant.data.promoted ? (
                    <RestaurantCardPromoted resData = {restaurant} />
                   ) : (
                    <RestaurantCard resData = {restaurant} />
                  )} */}

                </Link>
                ))}
             </div>
        </div>
    )
}

export default Body;