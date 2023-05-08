import { useParams } from "react-router-dom";

const UserProfile = () => {
    const { user } = useParams()
    return ( <div className="content">{user}</div> );
}
 
export default UserProfile;