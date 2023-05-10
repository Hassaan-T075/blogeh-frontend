import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userdata from '../../constants/Constants'
import AuthNavbar from "./AuthNavbar";

const Login = () => {

    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault() //prevents poge from refreshing
        const blog = { username, password }

        setIsLoading(true)

        //make post request here
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Access-Control-Request-Method': 'POST'
            },
            body: JSON.stringify(blog) // 'stringify' converts 'blog object' into 'json string'
        }).then((response) => response.json())
        .then((data) => {
            userdata.token = data.token
            userdata.username = username
            userdata.password = password
            setIsLoading(false);
        if(data.msg === 'Success')
        {
                console.log("Logged In");
                navigate('/home');
               
        }
        else 
        {
            setError(data.msg);
        }
            console.log(userdata.token)
            console.log('logged in');   
            console.log(data);
           
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div className="content">
            <AuthNavbar/>
            <br/>
            <h2>Login</h2>
            <form
                onSubmit={handleSubmit}
            > {/*clicking on 'add' button fires a submit event, we can listen to that submit event in form and react to it*/}
                <label>Username:</label>
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>{error}</label>
                {!isLoading && <button>Login</button>}
                {isLoading && <button disabled>Logging in</button>}
            </form>
        </div>
    );
}

export default Login;