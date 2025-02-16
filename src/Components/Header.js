import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
    // let btnName="Login";

//Local State variable------------------------------>
 const [btnNameReact , setBtnNameReact] = useState(["Login"]);
 //CUSTOM REACT HOOK------------------->
 const onlineStatus = useOnlineStatus();

 const {loggedInUser} = useContext(UserContext);
//  console.log(loggedInUser);



// WE ARE SUBSCRING TO THE STORE USING A SELECTOR
const cartItems = useSelector((store) => store.cart.items);
// console.log(cartItems);



//console.log("Header Rendered");
///--------------->USEEFFECT CASES---------->



///------------>FIRST CASE-------->
//If no dependency array => useEffect is called on every render.....   
// useEffect(()=>{
//     console.log("useEffect called");
//    });



//------>SECOND CASE----------------->
//If there is empty dependency array = [] => useEffect is called on initial render(just once);  
// useEffect(()=>{
//     console.log("useEffect called");
//    },[]);



///------->>THIRD CASE------------------->
//If dependency array is = [btnNameReact] => called every time when btnNameReact is updated;



useEffect(() => {
    // console.log("useEffect called");
   }, [btnNameReact]);   



    return (
        <div className="flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100 shadow-lg">
            <div className="logo-container">
              <img 
                 className="w-32" 
                 src={LOGO_URL}
               />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                        Online Status: { onlineStatus ? "✅" : "🔴"}
                    </li>

                    <li className="px-4">
                        <Link to="/">Home</Link>
                        </li>

                    {/* <li><a href="/about">About Us</a></li> */}
                    <li className="px-4"><Link to="/about">About Us</Link></li>

                    {/* <li><a href="/contact">Contact Us</a></li> */}
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart-({cartItems.length} items)</Link>
                    </li>
        

                    <button className="Login"
                        onClick={() => {
                        // btnName = "Logout";
                        btnNameReact === "Login" ? setBtnNameReact("Logout"):setBtnNameReact("Login");
                         
                        // console.log(btnName);
                        //console.log(btnNameReact);
                        }}
                        >
                        {btnNameReact}
                    </button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                
                </ul>  
            </div>
        </div> 
    )
};


export default Header; 