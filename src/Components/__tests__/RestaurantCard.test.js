import { render , screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";


//Unit Testing--------->
it("Should render RestaurantCard Component with props data", () => {

    render(<RestaurantCard resData = {MOCK_DATA}/>);


    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();
});