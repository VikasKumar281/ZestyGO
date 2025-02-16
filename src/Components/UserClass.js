//It is a Classbased Component.
import React from "react";


class UserClass extends React.Component{

    constructor(props){
        super(props);
        // console.log(this.props);

//STATE VARIABLES IN CLASS BASED COMPONENT
        this.state = {
            // count: 0,
            // count2:1,
            // count3:2,

            userInfo : {
                name : "Dummy",
                location : "Default",
            }
        };
        //  console.log(this.props.name + " Child Constructor");
    };


    // async componentDidMount(){
    //     console.log(this.props.name + " Child Component Did Mount");

    //     //API CALL
    //     const data = await fetch("https://api.github.com/users/VikasKumar281");
    //     const json = await  data.json(); 

    //     this.setState({
    //         userInfo : json,
    //     });

    //    // console.log(json);

    // }

    componentDidMount(){

        this.Timer = setInterval(() => {
            console .log("Namaste React Op") ;      
        },1000);


        // console.log(" Child - Component Did Mount");
    }


    componentDidUpdate(prevProps,prevState){
       
        // if(this.state.count !== prevState.count){
        //     //code
        // }
        
        // if(this.state.count2 !== prevState.count2){
        //     //code
        // }

        // console.log("Component Did Update")

    }



    componentWillUnmount(){

        clearInterval(this.Timer)
        // console.log("Component will Unmount");
    }

     
    render(){
        // console.log(this.props.name + " Child Render");

        //Destructure
        // const{ name , Location , contact}=this.props;
        // const {count, count2}=this.state;
        // const {count,count2,count3}=this.state;
        const {name,location} = this.state.userInfo;
        // debugger;
        return(

            <div className="user-card">
                {/* <h1>Count 1:{count}</h1> */}
                {/* <h1>Count 2:{count2}</h1> */}
                {/* <h1>Count 3:{count3}</h1> */}


                {/* <button 
                    onClick={() => {
                    //NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({
                        count : this.state.count + 1,
                        // count2 : this.state.count2 + 1, 
                        //Only count 1 and count 2 will increase when we click the button, count 3 will not increase beacause we don't apply the incrementation on it.
                    });
                  }}
                > Count Increase</button> */}


                {/* <h2>Name:Vikas Kumar</h2>
                <h2>Name : {name}</h2>
                {/* <h3>Location:Kanpur</h3> */}
                {/* <h3>Location : {Location}</h3>
                <h4>Contact : {contact}</h4>  */}
                
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @VikasKumar281</h4>
           </div>
           );
    }
}

export default UserClass;


/**
 * -----MOUNTING-----
 * 
 * Constructor(dummy)
 * Render(dummy)
 *       <HTML Dummy/>
 * 
 * ComponentDidMount
 *       <API Call/>
 *       <this.setState/> -----------> State Variable is Updated
 *  
 * -----UPDATE-----
 * 
 *    render(API data)
 *    <HTML (new API Data)/>
 *    componrntDidUpdate
 */