import { render , screen ,fireEvent } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
       json: () => Promise.resolve(MOCK_DATA_NAME)
    })
);

it("Should Load Restaurant Menu Component", async () => {
    await act ( async () => render (
        <BrowserRouter>
            <Provider store ={appStore}>
              <Header/>
              <RestaurantMenu/>
              <Cart/>
           </Provider>
        </BrowserRouter>
       
    ));

    const accordionHeader = screen.getByText("Veg Pizza (14)");
    fireEvent.click(accordionHeader);

    const recievedItems = screen.getAllByTestId("foodItems");
    expect(recievedItems.length).toBe(14);

    const addBtns = screen.getAllByRole("button" ,{name : "Add +"});
    // console.log(addBtns.length);

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart-(1 items)" )).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart-(2 items)" )).toBeInTheDocument();

    
    expect(screen.getAllByTestId("foodItems").length).toBe(16);

    fireEvent.click(screen.getByRole("button" , {name:"Clear Cart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(14);

    expect(
        screen.getByText("Your Cart is empty 🥹.Please Add Items to the Cart 😆")).toBeInTheDocument();


});