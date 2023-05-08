import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const [email, setEmail] = useState('');
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault() //prevents poge from refreshing
        const user = { email, username, password }

        setIsLoading(true)

        //make post request here
        fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Access-Control-Request-Method': 'POST'
            },
            body: JSON.stringify(user) // 'stringify' converts 'blog object' into 'json string'
        }).then((response) => response.json())
            .then((data) => {
                console.log('new user added');
                setIsLoading(false);
                navigate('/register');
            }).catch((err) => {
                console.log(err.message)
            })

    }

    return (
        <div className="create">
            <form
                onSubmit={handleSubmit}
            > {/*clicking on 'add' button fires a submit event, we can listen to that submit event in form and react to it*/}
                <label>Email:</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
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
                {!isLoading && <button>Register</button>}
                {isLoading && <button disabled>Registering</button>}
            </form>
        </div>
    );
}

export default Profile;