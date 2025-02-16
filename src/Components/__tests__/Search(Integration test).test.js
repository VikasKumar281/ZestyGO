import { fireEvent, render ,screen} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

//global--->global object
//Defining my own dummy Fetch function-----> 
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () =>{
           return Promise.resolve(MOCK_DATA);
        }
    })
});


it("Should Search Res List for burger text input",async () => {

   await act(async () =>{
    render(
    <BrowserRouter>
       <Body />
    </BrowserRouter> 
    ); 
   });

   const cardsBeforeSearch = screen.getAllByTestId("resCard");

   expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn =screen.getByRole("button", { name: "Search" });

    // console.log(searchBtn);

    //Now you can find by testid in your test file, This is another way to find something inside your screen in JSDOM.
    const searchInput = screen.getByTestId("searchInput");
    // console.log(searchInput);

    fireEvent.change(searchInput, { target: { value: "pizza" }})

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(4);

    // expect(searchBtn).toBeInTheDocument();

});

it("Should filter Top Rated Restaurant",async () => {

    await act(async () =>{
     render(
     <BrowserRouter>
        <Body />
     </BrowserRouter> 
     ); 
    });
 
    const cardsBeforeFilter = screen.getAllByTestId("resCard");

   expect(cardsBeforeFilter.length).toBe(20);

   const topRatedBtn = screen.getByRole("button" , {name: "Top Rated Restaurants"});
   fireEvent.click(topRatedBtn);

   const cardsAfterFilter = screen.getAllByTestId("resCard");

   // expect(cardsAfterFilter.length).toBe(20);

 });