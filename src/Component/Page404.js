import { Link } from "react-router-dom";

function Page404(){
    return(
        <div>
            <h1>Page not found !opps 404</h1>
            <p>Please enter a valid URL</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}
export default Page404;