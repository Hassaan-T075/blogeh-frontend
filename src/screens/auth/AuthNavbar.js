import { Link } from "react-router-dom";

const AuthNavbar = () => { //stateless functional component sfc
    return ( 
        <nav className="navbar">
            <h1> Blogeh <p>Curate your thoughts</p></h1>
            <div className="links">
                {/* <a href="/">Home</a> */} {/*Using 'Link' instead of anchor prevents request from being sent to*/}
                {/*server and instead it is intercepted by React Router*/}
                <Link to="/login">Login</Link>
                <Link to="/register" style= {{
                    // color: "white",
                    // backgroundColor: '#f1356d',
                    // borderRadius: '8px',
                }}>Register</Link>
            </div>
        </nav>
     );
}
 
export default AuthNavbar;