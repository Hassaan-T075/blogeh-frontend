import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userdata from "../../constants/Constants";
import UserNavbar from '../home/UserNavbar';

const MyProfile = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPass] = useState('')
    const [followings, setFollowings] = useState('')
    const [blogsCount, setBlogsCount] = useState('')
    const navigate = useNavigate();

    const username = userdata.username

    //make post request here
    useEffect(() => {
        fetch('http://localhost:3000/api/home/user/profile', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Access-Control-Request-Method': 'POST',
                'Authorization': `Bearer ${userdata.token}`
            },
            body: JSON.stringify({ username }) // 'stringify' converts 'blog object' into 'json string'
        }).then((response) => response.json())
            .then((data) => {
                console.log('profile sent');
                setEmail(data.email)
                setName(data.username)
                setPass(userdata.password)
                setFollowings(data.followings)
                setBlogsCount(data.blogsCount)
            }).catch((err) => {
                console.log(err.message)
            })
    }, [])

    const onUpdate = (e) => {
        e.preventDefault()

        const update = {'username': name, 'password': password}

        //make post request here
        fetch('http://localhost:3000/api/home/profile', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${userdata.token}`
            },
            body: JSON.stringify(update)
        }).then((data) => {
            console.log(userdata.token);
            console.log('profile updated');
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div>
             <UserNavbar/>
        <div className="create">
                <h2>My Profile</h2>
            <label>Email:</label>
            <input
                type="text"
                value={email}
            />
            <label>Username:</label>
            <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label>Password:</label>
            <input
                type="password"
                required
                value={password}
                onChange={(e) => setPass(e.target.value)}
            />
            <label>Following:</label>
            <input
                type="text"
                value={followings}
            />
            <label>Blog Count:</label>
            <input
                type="text"
                value={blogsCount}
            />
            <br />
            {!isLoading && <button onClick={onUpdate}>Update</button>}
            {isLoading && <button disabled>Updating...</button>}

        </div>
        </div>
    );
}

export default MyProfile;