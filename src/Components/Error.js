import { useRouteError } from "react-router-dom";


const Error = () =>{
//react-router-dom gives us an access to an important Hook => useRouteError    
    const err = useRouteError();
    // console.log(err);
   return (
        <div>
            <h1>Oops!!</h1>
            <h2>Something went wrong!!</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
   );
};

export default Error;