import React,{ lazy , Suspense, useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"
// import Header from "./Components/Header.js"
import Body from "./Components/Body"
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import Grocery from "./Components/Grocery";
import Cart from "./Components/Cart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



//Chunking
//Code Splitting
// Lazy Loading
// Dynamic Bundling 
// on demand Loading
//Dynamic import
const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));

const AppLayout = () =>{

  const[userName, setUserName] = useState();

  //AUTHENTICATION
  
  useEffect(() =>{
   //Make an API call and send username and password
   const data = {
     name: "Vikas Kumar",
   };
   setUserName(data.name);
  },[]);

  return (
      <Provider store={ appStore }>
        <UserContext.Provider value = {{loggedInUser: userName , setUserName }}>
            <div className = "app">
          {/* <UserContext.Provider value = {{loggedInUser: "Ayush Saxena"}}> */}
            <Header/>
          {/* </UserContext.Provider> */}

             {
              /**{ if path = / }
                       <Body />
              
              { if path = /about }
              <About />
              
              { if path = /contact}
              <Contact  />
              */
             }
            <Outlet/>
            </div>  
        </UserContext.Provider>
      </Provider>
    )
// This Outlet component will replace by chidren routes according to path.   
}; 


const appRouter = createBrowserRouter([
    
    // (CREATEBROWSERROUTER WILL CREATE A ROUTING CONFIGURATION, THIS CONFIGURATION IS A LIST OF OBJECTS(ARRAY OF OBJECTS), EACH AND EVERY OBJECT DEFINES A DIFFERENT PATH AND WHAT SHOULD HAPPEN ON THAT PATH .) --------->  
    {
        path:"/",
        element:<AppLayout/>,

    //CHILDREN ROUTES------------------------->
        //children------>List of different paths
        children:[
          {
           path:"/",
           element:<Body/>,
          },
          {
            path:"/about",
            element: <Suspense fallback ={<h1>Loading...</h1>} >
                        <About/>
                     </Suspense>, 
          },
          {
              path:"/contact",
              element: <Contact/>, 
          },
          {
            path:"/grocery",
            element:<Suspense fallback ={<h1>Loading...</h1>} >
                        <Grocery/>
                    </Suspense>, 
          },
          {
            path:"/cart",
            element: <Cart/>
          },
          {
            //resId is Dynamic Id, resId can be change according to the restaurant id.Every restaurant has a unique id.
              path:"/restaurants/:resId",
              element:<RestaurantMenu />,
          },
        ],
        errorElement:<Error/>,
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
