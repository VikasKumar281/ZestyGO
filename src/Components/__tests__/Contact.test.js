import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


//UNIT TESTING ---> testing a component in Isolation ------------------------------------------>

describe("Contact Us Page Test Case", () => {

//    beforeAll(() => {
//     console.log("Before All");
//    });


//    beforeEach(() => {
//     console.log("Before Each");
//    })

//    afterAll(() => {
//     console.log("After All");
//    });

//    afterEach(() => {
//     console.log("After Each");
//    })

    test("Should load contact us component", () =>{

        render(<Contact />);
    
        //QUERYING--->
        const heading = screen.getByRole("heading");
    
        //ASSERTION-->
        expect(heading).toBeInTheDocument();
    });
    
    
    test("Should load button inside contact component", () =>{
    
        render(<Contact />);
    
        // const inputText= screen.getByRole("button");
        const inputText = screen.getByText("Submit");
        // const inputText = screen.getByText("Random"); //ERROR---->Unable to find an element with the text : Random
    
    
        //ASSERTION-->
        expect(inputText).toBeInTheDocument();
    });
    //OR ---> You can Write " it " instead of " test ".Ther is no difference.
    
    
    it("Should load input name inside contact component", () =>{
       //Suppose If I want to Find Input-->
    
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name");
        // const inputName = screen.getByPlaceholderText("name1");//ERROR---->Unable to find an element with the text : name1
    
    
        //ASSERTION-->
        expect(inputName).toBeInTheDocument();
    });
    
    
    it("Should load 2 input boxes on the Contact component", () => {
       //Suppose if there are multiple input boxes------>
       
        render(<Contact/>);
    
    
        //Querying--->
        //Suppose If there are multiple items then--->
        const inputBoxes = screen.getAllByRole("textbox");//This will return JSX element.
    
    
        // console.log(inputBoxes);//It will return array of two items.
        console.log(inputBoxes.length);//It will return 2.
    
    
        //ASSERTION---->
        expect(inputBoxes.length).toBe(2);
        // expect(inputBoxes.length).toBe(3);//Error--->It will Fail because Expected:3 and Recieved:2.
        expect(inputBoxes.length).not.toBe(3);
    
    })

});
