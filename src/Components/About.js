import User from "./User"; 
import UserClass from "./UserClass"; 
import {Component} from "react";
import UserContext from "../utils/UserContext";



class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount")
    }

    render(){
        // console.log("Parent Render")
        return (
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>

                                               {/* It is Functional Component */}
                <User name="Vikas Kumar"/> 

                                               {/* It is Class Based Component*/}
                {/* <UserClass name={"Vikas Kumar"} Location="Bhagalpur" contact="vikaskumar280204@gmail.com"/>   */}
                {/* <UserClass name={"Vishal Kumar"} Location="Kanpur" contact="vk.vishalkumar27797@gmail.com"/>    */}
            </div>
        );  
    };
};

//IT IS ABOUT FUNCTIONAL COMPONENT

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//                                            {/* It is Functional Component */}
//             {/* <User name="Vikas Kumar"/>  */}
//                                            {/* It is Class Based Component */}
//             <UserClass name={"Vikas Kumar"} Location="Bhagalpur"/>  
//         </div>
//     );
// };

export default About;


/**
 * Parent Constructor Called
 * Parent Render Called
   - Vikas Constructor
   - Vikas Render

   - Vishal Constructor
   - Vishal Render

    <DOM UPDATED - IN SINGLE BATCH>

   - Vikas ComponentDidMount
   - Vishal ComponentDidMount
   
 * Parent ComponentDidMount
 */