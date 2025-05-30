import React from "react";
import ReactDOM from "react-dom/client";


/**  
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *     - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
*/
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
              <img 
                 className="logo" 
                 src="https://www.logodesign.net/image/smoking-burger-with-lettuce-3624ld"
               />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>  
            </div>
        </div>
    )
}
const AppLayout = () =>{
    return (
    <div className = "app">
         <Header/>
    </div>
    )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
