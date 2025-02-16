//When There is No internet This Hook will show the Error

import { useEffect, useState } from "react";


//CUSTOM HOOK
const useOnlineStatus = () => {

    //State Variable
    const[ onlineStatus, setOnlineStatus] = useState(true);

    //Check if Online
     
    useEffect(() => {

          window.addEventListener("offline" , () => {
             setOnlineStatus(false);
          })

          window.addEventListener("online" , () => {
            setOnlineStatus(true);
         })
    },[])

    //Boolean value
    return onlineStatus;
};

export default useOnlineStatus;

//For Checking Online Status, We will use Online Event Listener 