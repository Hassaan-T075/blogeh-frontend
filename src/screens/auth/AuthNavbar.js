import { Link } from "react-router-dom";

const AuthNavbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Blogeh <p>Curate your thoughts</p></h1>
            <div className="links">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
     );
}
 
export default AuthNavbar;