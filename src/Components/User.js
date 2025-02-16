//It is a normal Functional Component User

import { useEffect, useState } from "react";

const User = ({name}) => {

    //STATE VARIABLES
    let [count , setCount]=useState(0);
    const [count2]=useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            // console .log("Namaste React Op") ;      
        },1000);
 
        // console.log("useEffect");

        return () =>{
            clearInterval(timer);
            // console.log("useEffect Return");
        };
        //API CALLS
    },[]);
    
    
     // console.log("Render");

    // useEffect(() => {
    //     //API CALLS
    // },[count2]);

    return(
     <div className="user-card">
       
        <h1>Count 1:{count}</h1>
        <h1>Count 2:{count2}</h1>

         {/* <h2>Name:Vikas Kumar</h2> */} 

        {/* <button onClick={() =>{
            setCount(count+1);
         }}>Count Increase</button> */}

        <h2>Name:{name}</h2>
        <h3>Location:Kanpur</h3>
        <h4>Contact:vikaskumar280204@gmail.com</h4>
    
    </div>
    );
};

export default User;