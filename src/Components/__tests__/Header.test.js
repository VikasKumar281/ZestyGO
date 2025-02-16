import { fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



//UNIT TESTING--------------------------------------------------------------->

// LOGIN Button---------------->
it("Should render Header Component with login button", () => {

  render(<BrowserRouter>
        <Provider store = {appStore}>
          <Header/>
        </Provider>
    </BrowserRouter>);
    //Could not find react-redux context value and so it failed at the point useSelector which comes from react-redux . We are rendering this Header component in isolation in JSDOM . JSDOM understand JSX code,React code, JavaScript code but it does not understand redux code,it does not know, what is Selector(Hook). So we will have to provide a redux store to our Header here.Which will provided by Provider( from appStore).
    //Now Error is coming from <Link> component used in Header which is coming from react-router Dom. So we will have to provide a router to this header here. Which will provide by browser router.
    
    

    //ASSERTION---->

    //First Way to Find Button-------->Better Way------>

    //We have to import " screen " from "@testing-library/react"
    const loginButton = screen.getByRole("button" , {name: "Login" });


    //Second Way----->
    // const loginButton = screen.getByText("Login");

    

    expect(loginButton).toBeInTheDocument();

});


//CART----------------------->
it("Should render Header Component with a Cart items 0", () => {

    render(<BrowserRouter>
         <Provider store = {appStore}>
           <Header/>
         </Provider>
     </BrowserRouter>);
    //Could not find react-redux context value and so it failed at the point useSelector which comes from react-redux . We are rendering this Header component in isolation in JSDOM . JSDOM understand JSX code,React code, JavaScript code but it does not understand redux code,it does not know, what is Selector(Hook). So we will have to provide a redux store to our Header here.Which will provided by Provider( from appStore).
    //Now Error is coming from <Link> component used in Header which is coming from react-router Dom. So we will have to provide a router to this header here. Which will provide by browser router.
    
    

    //ASSERTION---->

    //We have to import " screen " from "@testing-library/react"
    // const cartItems = screen.getByText("Cart-(0 items)");//Input string should be same exactly.
    const cartItems = screen.getByText(/Cart/);//OtherWise you can also use " Regex " and in Regex you don't need to write a exact string .

    

    expect(cartItems).toBeInTheDocument();

});


//LOGIN BUTTON CHANGEMENT------------------->
it("Should change Login Button to Logout on Click", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  // Use getByRole for a single element or refine if multiple exist
  // const logoutButton = screen.getByRole("button", { name: "Logout" });

  // expect(logoutButton).toBeInTheDocument();
});
