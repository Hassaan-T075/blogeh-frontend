import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userdata from "../../constants/Constants";

const UserProfile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPass] = useState("");
  const [followings, setFollowings] = useState("");
  const [blogsCount, setBlogsCount] = useState("");
  const navigate = useNavigate();
  const { user } = useParams();

  const username = userdata.username;

  //make post request here
  useEffect(() => {
    fetch("http://localhost:3000/api/home/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Request-Method": "POST",
        Authorization: `Bearer ${userdata.token}`,
      },
      body: JSON.stringify({ username: user }), // 'stringify' converts 'blog object' into 'json string'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("profile sent");
        setEmail(data.email);
        setName(data.username);

        setFollowings(data.followings);
        setBlogsCount(data.blogsCount);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="create">
         <h2>User Profile</h2>
      <label>Email:</label>
      <input type="text" value={email} />
      <label>Username:</label>
      <input type="text" value={name} />

      <label>Following:</label>
      <input type="text" value={followings} />
      <label>Blog Count:</label>
      <input type="text" value={blogsCount} />
      <br />
    </div>
  );
};

export default UserProfile;
