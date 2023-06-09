import { Link } from "react-router-dom";

const UserNavbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Blogeh </h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/create">Create</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/favorites">My Blogs</Link>
            </div>
        </nav>
     );
}
 
export default UserNavbar;