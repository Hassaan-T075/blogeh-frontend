import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault() //prevents poge from refreshing
        const blog = { name, password }

        setIsLoading(true)

        //make post request here
        fetch('http://localhost:3000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog) // 'stringify' converts 'blog object' into 'json string'
        }).then(() => {
            console.log('new blog added');
            setIsLoading(false);
            navigate('/');
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
                    value={name}
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

export default Register;