//Hook is a Normal Java Script Utility Function

import { useEffect,useState } from "react";
import { MENU_API } from "../utils/constants";


const useRestaurantMenu = (resId) => {
   
    const [resInfo , setResInfo] = useState(null);

    //fetch data

    useEffect(() => {
        fetchData();
    },[]);
    
   const fetchData = async () => {
    const data = await fetch( MENU_API + resId );
    const json = await data.json();
    
    setResInfo(json.data);
   };

//    console.log(resInfo);
 
    return resInfo;
};


export default useRestaurantMenu;