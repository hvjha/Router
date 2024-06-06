import { Link, useParams,useLocation } from "react-router-dom";
function User(){
    const params = useParams();
    const {name}=params;
    const location = useLocation();
    console.log(location)
    return(
        <div>
            <h1>this is {name}'s page</h1>
            <Link to="/about">Go to about page</Link>
        </div>
    )
}

export default User;