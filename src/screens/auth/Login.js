import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userdata from '../../constants/Constants'

const Login = () => {

    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault() //prevents poge from refreshing
        const blog = { username, password }

        setIsLoading(true)

        //make post request here
        fetch('https://blogeh.herokuapp.com/api/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Access-Control-Request-Method': 'POST'
            },
            body: JSON.stringify(blog) // 'stringify' converts 'blog object' into 'json string'
        }).then((response) => response.json())
        .then((data) => {
            userdata.token = data.token
            console.log(userdata.token)
            console.log('logged in');
            setIsLoading(false);
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div className="create">
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
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!isLoading && <button>Login</button>}
                {isLoading && <button disabled>Logging in</button>}
            </form>
        </div>
    );
}

export default Login;