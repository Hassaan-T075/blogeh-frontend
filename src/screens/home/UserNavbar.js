import { Link } from "react-router-dom";

const UserNavbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Blogeh </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/favorites">♡</Link>
            </div>
        </nav>
     );
}
 
export default UserNavbar;